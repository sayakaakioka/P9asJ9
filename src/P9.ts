import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { Utils } from "./Utils";
import { ProcessingLexer } from "./P9Parser/ProcessingLexer";
import { ProcessingParser } from "./P9Parser/ProcessingParser";
import { ProcessingParserListener } from "./P9Parser/ProcessingParserListener";
import { P9ParserListener } from "./transpiler/P9ParserListener";
import { P9StructureFuncs } from "./P9/P9StructureFuncs";

export class P9 extends P9StructureFuncs {
  public mouseClicked: Function | undefined;
  public mouseMoved: Function | undefined;
  public mouseDragged: Function | undefined;
  public mousePressed: Function | undefined;
  public mouseReleased: Function | undefined;
  public mouseWheel: Function | undefined;
  public keyPressed: Function | undefined;
  public keyReleased: Function | undefined;
  public keyTyped: Function | undefined;

  public __length(obj: any): number {
    if (typeof obj === "string") {
      return obj.length;
    } else {
      return obj.length();
    }
  }

  public __$__(left: any, operator: string, right: any): any {
    let l;
    let r;
    if (this.isCharacter(left)) {
      if (this.isCharacter(right)) {
        l = left.charCodeAt(0);
        r = right.charCodeAt(0);
      } else if (typeof right === "number") {
        l = left.charCodeAt(0);
      }
    } else if (this.isCharacter(right) && typeof left === "number") {
      r = right.charCodeAt(0);
    }
    if (l === undefined) {
      l = left;
    }
    if (r === undefined) {
      r = right;
    }

    switch (operator) {
      case "+":
        return l + r;
      case "-":
        return l - r;
      case "*":
        return l * r;
      case "/":
        return l / r;
      case "%":
        return l % r;
      case "==":
        return l == r;
      case "!=":
        return l != r;
      case ">":
        return l > r;
      case ">=":
        return l >= r;
      case "<":
        return l < r;
      case "<=":
        return l <= r;
    }
  }

  private isCharacter(obj: any): boolean {
    if (typeof obj === "string" && obj.length === 1) {
      return true;
    } else {
      return false;
    }
  }

  private readonly _src: string;
  private readonly _debug: boolean;
  private readonly _displayCode: boolean;
  private _transpiled: string | undefined;

  // P9 constants and variables
  public readonly UP = 38; // 38 in Processing
  public readonly DOWN = 40; // 40 in Processing
  public readonly CODED = "65535"; // 65535 in Processing
  public readonly ALT = 18; // 18 in Processing
  public readonly CONTROL = 17; // 17 in Processing
  public readonly SHIFT = 16; // 16 in Processing
  private _mouseButton = -1;
  public mousePressedVar = false;
  public keyPressedVar = false;
  public key = "";
  private _keyCode = -1;

  constructor(
    util: Utils,
    private readonly _scriptElement: HTMLScriptElement,
    w: Window
  ) {
    let canvas = document.createElement("canvas");
    super(util, canvas, w);
    this._src = this._scriptElement.innerText;

    this.utils.p9FuncList = [
      "mouseClicked",
      "mouseDragged",
      "mouseMoved",
      "mousePressed",
      "mouseReleased",
      "mouseWheel",
      "keyPressed",
      "keyReleased",
      "keyTyped",
    ];

    this.utils.p9ConstList = [
      "mouseButton",
      "mousePressed",
      "key",
      "keyCode",
      "keyPressed",
      "CODED",
      "UP",
      "DOWN",
      "ALT",
      "CONTROL",
      "SHIFT",
    ];

    // get debug flag
    const debugStr = this._scriptElement.getAttribute("debug");
    if (debugStr === "true") {
      this._debug = true;
      this._displayCode = true;
    } else if (debugStr === "transpiled") {
      this._debug = false;
      this._displayCode = true;
    } else {
      this._debug = false;
      this._displayCode = false;
    }

    // create a canvas and add to the html body
    this.canvas.setAttribute("id", `${this.utils.id}_canvas`);
    this._scriptElement.after(this.canvas);

    // context settings
    if (this.context === null) {
      this.utils.log("P9: constructor(): Failed to get context.");
      return;
    }

    super.setBackground(super.initialBackground);
    this.context.lineWidth = 1.5;
    this.context.lineCap = this.ROUND;
    super.currentLineWidth = this.context.lineWidth;
    super.currentLineCap = this.context.lineCap;

    // add eventListeners to the canvas
    this.canvas.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    this.canvas.addEventListener("click", (e) => {
      this.mousePressedVar = false;
      if (e.button === 0) {
        this._mouseButton = this.LEFT;
      } else if (e.button === 1) {
        this._mouseButton = this.CENTER;
      } else if (e.button === 2) {
        this._mouseButton = this.RIGHT;
      }
      if (this.mouseClicked !== undefined) {
        this.mouseClicked(e);
      }
    });
    this.canvas.addEventListener("mousemove", (e) => {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
      if (this.mousePressedVar === false && this.mouseMoved !== undefined) {
        this.mouseMoved(e);
      } else if (
        this.mousePressedVar === true &&
        this.mouseDragged !== undefined
      ) {
        this.mouseDragged(e);
      }
    });
    this.canvas.addEventListener("mousedown", (e) => {
      this.mousePressedVar = true;
      if (e.button === 0) {
        this._mouseButton = this.LEFT;
      } else if (e.button === 1) {
        this._mouseButton = this.CENTER;
      } else if (e.button === 2) {
        this._mouseButton = this.RIGHT;
      }
      if (this.mousePressed !== undefined) {
        this.mousePressed(e);
      }
    });
    this.canvas.addEventListener("mouseup", (e) => {
      this.mousePressedVar = false;
      if (this.mouseReleased !== undefined) {
        this.mouseReleased(e);
      }
    });
    this.canvas.addEventListener("wheel", (e) => {
      this.mousePressedVar = false;
      if (this.mouseWheel !== undefined) {
        this.mouseWheel(e);
      }
    });
    document.addEventListener("keydown", (e) => {
      this.keyPressedVar = true;
      if (e.altKey) {
        this._keyCode = this.ALT;
        this.key = this.CODED;
      } else {
        if (e.key === "ArrowUp") {
          this._keyCode = this.UP;
          this.key = this.CODED;
        } else if (e.key === "ArrowDown") {
          this._keyCode = this.DOWN;
          this.key = this.CODED;
        } else if (e.key === "ArrowLeft") {
          this._keyCode = this.LEFT;
          this.key = this.CODED;
        } else if (e.key === "ArrowRight") {
          this._keyCode = this.RIGHT;
          this.key = this.CODED;
        } else if (e.key === "Control") {
          this._keyCode = this.CONTROL;
          this.key = this.CODED;
        } else if (e.key === "Shift") {
          this._keyCode = this.SHIFT;
          this.key = this.CODED;
        } else if (e.key.length > 1) {
          this._keyCode = e.keyCode;
          this.key = e.key.toUpperCase();
        } else {
          this._keyCode = e.keyCode;
          this.key = e.key;
        }
      }

      if (this.keyPressed !== undefined) {
        this.keyPressed(e);
      }
    });
    document.addEventListener("keyup", (e) => {
      this.keyPressedVar = false;
      this._keyCode = -1;
      this.key = "";
      if (this.keyReleased !== undefined) {
        this.keyReleased(e);
      }
    });
    document.addEventListener("keypress", (e) => {
      this.keyPressedVar = true;
      if (e.altKey) {
        this._keyCode = this.ALT;
        this.key = this.CODED;
      } else {
        if (e.key === "ArrowUp") {
          this._keyCode = this.UP;
          this.key = this.CODED;
        } else if (e.key === "ArrowDown") {
          this._keyCode = this.DOWN;
          this.key = this.CODED;
        } else if (e.key === "ArrowLeft") {
          this._keyCode = this.LEFT;
          this.key = this.CODED;
        } else if (e.key === "ArrowRight") {
          this._keyCode = this.RIGHT;
          this.key = this.CODED;
        } else if (e.key === "Control") {
          this._keyCode = this.CONTROL;
          this.key = this.CODED;
        } else if (e.key === "Shift") {
          this._keyCode = this.SHIFT;
          this.key = this.CODED;
        } else if (e.key.length > 1) {
          this._keyCode = e.keyCode;
          this.key = e.key.toUpperCase();
        } else {
          this._keyCode = e.keyCode;
          this.key = e.key;
        }
      }
      if (this.keyTyped !== undefined) {
        this.keyTyped(e);
      }
    });

    // antlr4
    const inputStream = CharStreams.fromString(this._src);
    const lexer = new ProcessingLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ProcessingParser(tokenStream);
    const tree = parser.compilationUnit();
    const listener: ProcessingParserListener = new P9ParserListener(this);
    ParseTreeWalker.DEFAULT.walk(listener, tree);
  }

  public set transpiled(str: string) {
    this._transpiled = str;
  }

  public get transpiled(): string {
    if (this._transpiled !== undefined) {
      return this._transpiled;
    } else {
      this.utils.error("P9: getTranspiled(): Transpilation failed.");
      return "";
    }
  }

  public get src(): string {
    return this._src;
  }

  public get debug(): boolean {
    return this._debug;
  }

  public get displayCode(): boolean {
    return this._displayCode;
  }

  public get noLoopCalled(): boolean {
    return super.noLoopCalled;
  }

  public mouseButton(): number {
    return this._mouseButton;
  }

  public keyCode(): number {
    return this._keyCode;
  }

  public toString(): string {
    return `${this.constructor.name}: ${this.utils.id}`;
  }
}

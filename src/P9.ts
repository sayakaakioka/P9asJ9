import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { Utils } from "./Utils";
import { P9DataFuncs } from "./P9/P9DataFuncs";
import { P9EnvironmentFuncs } from "./P9/P9EnvironmentFuncs";
import { P9StructureFuncs } from "./P9/P9StructureFuncs";
import { ProcessingLexer } from "./P9Parser/ProcessingLexer";
import { ProcessingParser } from "./P9Parser/ProcessingParser";
import { ProcessingParserListener } from "./P9Parser/ProcessingParserListener";
import { P9ParserListener } from "./transpiler/P9ParserListener";
import { P9ShapeFuncs } from "./P9/P9ShapeFuncs";
import { P9ColorFuncs } from "./P9/P9ColorFuncs";
import { P9ImageFuncs } from "./P9/P9ImageFuncs";
import { P9TypographyFuncs } from "./P9/P9TypographyFuncs";
import { P9TransformFuncs } from "./P9/P9TransformFuncs";
import { P9LightsCameraFuncs } from "./P9/P9LightsCameraFuncs";
import { P9RenderingFuncs } from "./P9/P9RenderingFuncs";
import { P9InputFuncs } from "./P9/P9InputFuncs";
import { P9OutputFuncs } from "./P9/P9OutputFuncs";
import { P9MathFuncs } from "./P9/P9MathFuncs";

export class P9 {
  private readonly _src: string;
  private readonly _debug: boolean;
  private readonly _displayCode: boolean;
  private readonly _canvas: HTMLCanvasElement;
  private readonly _context: CanvasRenderingContext2D | null;
  private _transpiled: string | undefined;
  private _p9FuncList = new Array<string>();
  private _p9ConstList = [
    "PI",
    "HALF_PI",
    "QUARTER_PI",
    "TWO_PI",
    "TAU",
    "frameCount",
    "frameRate",
    "width",
    "height",
    "mouseButton",
    "mousePressed",
    "LEFT",
    "CENTER",
    "RIGHT",
    "mouseX",
    "mouseY",
    "pmouseX",
    "pmouseY",
    "key",
    "keyCode",
    "keyPressed",
    "TOP",
    "BOTTOM",
    "BASELINE",
    "CODED",
    "UP",
    "DOWN",
    "ALT",
    "CONTROL",
    "SHIFT",
    "RGB",
    "HSB",
  ];

  // P9 related variables
  private _frameCount = 0;
  private _fRate = 60;
  private _currentFrameRate = 60;
  //public isStrokeDirty = false;
  //public isFillDirty = false;
  private _noLoopCalled = false;

  private _doFill = true;
  private _currentFillColor = "#fff";
  private _doStroke = true;
  private _currentStrokeColor = "#000";
  private _currentLineWidth = 1;
  private _currentLineCap = "round";

  private _intervalID = 0;
  private _loopStarted = false;
  private _startTime = 0;

  // P9 structure functions
  public draw: Function | undefined;
  public exit: Function | undefined;
  public loop: Function | undefined;
  public noLoop: Function | undefined;
  public popStyle: Function | undefined;
  public pop: Function | undefined;
  public pushStyle: Function | undefined;
  public push: Function | undefined;
  public redraw: Function | undefined;
  public setLocation: Function | undefined;
  public setResizable: Function | undefined;
  public setTitle: Function | undefined;
  public setup: Function | undefined;
  public thread: Function | undefined;

  // P9 environment functions
  public cursor: Function | undefined;
  public delay: Function | undefined;
  public displayDensity: Function | undefined;
  public frameRate: Function | undefined;
  public fullScreen: Function | undefined;
  public noCursor: Function | undefined;
  public noSmooth: Function | undefined;
  public pixelDensity: Function | undefined;
  public settings: Function | undefined;
  public size: Function | undefined;
  public smooth: Function | undefined;

  // P9 data functions
  public binary: Function | undefined;
  public boolean: Function | undefined;
  public byte: Function | undefined;
  public char: Function | undefined;
  public float: Function | undefined;
  public hex: Function | undefined;
  public int: Function | undefined;
  public str: Function | undefined;
  public unbinary: Function | undefined;
  public unhex: Function | undefined;
  public join: Function | undefined;
  public matchAll: Function | undefined;
  public match: Function | undefined;
  public nf: Function | undefined;
  public nfc: Function | undefined;
  public nfp: Function | undefined;
  public nfs: Function | undefined;
  public splitTokens: Function | undefined;
  public split: Function | undefined;
  public trim: Function | undefined;
  public append: Function | undefined;
  public arrayCopy: Function | undefined;
  public concat: Function | undefined;
  public expand: Function | undefined;
  public reverse: Function | undefined;
  public shorten: Function | undefined;
  public sort: Function | undefined;
  public splice: Function | undefined;
  public subset: Function | undefined;

  // P9 Shape functions
  public createShape: Function | undefined;
  public loadShape: Function | undefined;
  public bezierDetail: Function | undefined;
  public bezierPoint: Function | undefined;
  public bezierTangent: Function | undefined;
  public bezier: Function | undefined;
  public curveDetail: Function | undefined;
  public curvePoint: Function | undefined;
  public curveTangent: Function | undefined;
  public curveTightness: Function | undefined;
  public curve: Function | undefined;
  public ellipseMode: Function | undefined;
  public rectMode: Function | undefined;
  public strokeCap: Function | undefined;
  public strokeJoin: Function | undefined;
  public strokeWeight: Function | undefined;
  public beginContour: Function | undefined;
  public beginShape: Function | undefined;
  public bezierVertex: Function | undefined;
  public curveVertex: Function | undefined;
  public endContour: Function | undefined;
  public endShape: Function | undefined;
  public quadraticVertex: Function | undefined;
  public vertex: Function | undefined;
  public shapeMode: Function | undefined;
  public shape: Function | undefined;
  public arc: Function | undefined;
  public circle: Function | undefined;
  public ellipse: Function | undefined;
  public line: Function | undefined;
  public point: Function | undefined;
  public quad: Function | undefined;
  public rect: Function | undefined;
  public square: Function | undefined;
  public triangle: Function | undefined;
  public box: Function | undefined;
  public sphereDetail: Function | undefined;
  public sphere: Function | undefined;

  // P9 Color functions
  public background: Function | undefined;
  public clear: Function | undefined;
  public colorMode: Function | undefined;
  public fill: Function | undefined;
  public noFill: Function | undefined;
  public noStroke: Function | undefined;
  public stroke: Function | undefined;
  public alpha: Function | undefined;
  public blue: Function | undefined;
  public brightness: Function | undefined;
  public color(
    ...args:
      | [gray: number]
      | [gray: number, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): number {
    let A, R, G, B;
    if (this._colorMode === this.RGB) {
      if (args.length === 1 || args.length === 2) {
        let [c, alpha] = args;
        c = (this._colorElementMaxDef * c) / this._colorElementMax1;
        if (alpha === undefined) {
          A = this._colorElementMaxDef;
        } else {
          A = (this._colorElementMaxDef * alpha) / this._colorElementMaxA;
        }
        R = c;
        G = c;
        B = c;
      } else {
        let [v1, v2, v3, alpha] = args;
        if (alpha === undefined) {
          A = this._colorElementMaxDef;
        } else {
          A = (this._colorElementMaxDef * alpha) / this._colorElementMaxA;
        }
        R = (this._colorElementMaxDef * v1) / this._colorElementMax1;
        G = (this._colorElementMaxDef * v2) / this._colorElementMax2;
        B = (this._colorElementMaxDef * v3) / this._colorElementMax3;
      }
    } else {
      if (args.length === 1 || args.length === 2) {
        const [c, alpha] = args;
        if (alpha === undefined) {
          A = this._colorElementMaxDef;
        } else {
          A = (this._colorElementMaxDef * alpha) / this._colorElementMaxA;
        }
        [R, G, B] = this.hsb2rgb(c, c, c);
      } else {
        const [v1, v2, v3, alpha] = args;
        if (alpha === undefined) {
          A = this._colorElementMaxDef;
        } else {
          A = (this._colorElementMaxDef * alpha) / this._colorElementMaxA;
        }
        [R, G, B] = this.hsb2rgb(v1, v2, v3);
      }
    }
    return (A << 24) | (R << 16) | (G << 8) | B;
  }
  public green: Function | undefined;
  public hue: Function | undefined;
  public lerpColor: Function | undefined;
  public red: Function | undefined;
  public saturation: Function | undefined;

  // P9 Image functions
  public createImage: Function | undefined;
  public imageMode: Function | undefined;
  public image: Function | undefined;
  public loadImage: Function | undefined;
  public noTint: Function | undefined;
  public requestImage: Function | undefined;
  public tint: Function | undefined;
  public textureMode: Function | undefined;
  public textureWrap: Function | undefined;
  public texture: Function | undefined;
  public blend: Function | undefined;
  public copy: Function | undefined;
  public filter: Function | undefined;
  public loadPixels: Function | undefined;
  public mask: Function | undefined;
  public set: Function | undefined;
  public updatePixels: Function | undefined;
  public get: Function | undefined;

  // P9 Typography functions
  public createFont: Function | undefined;
  public loadFont: Function | undefined;
  public textFont: Function | undefined;
  public text: Function | undefined;
  public textAlign: Function | undefined;
  public textLeading: Function | undefined;
  public textMode: Function | undefined;
  public textSize: Function | undefined;
  public textWidth: Function | undefined;
  public textAscent: Function | undefined;
  public textDescent: Function | undefined;

  // P9 Transform functions;
  public applyMatrix: Function | undefined;
  public popMatrix: Function | undefined;
  public printMatrix: Function | undefined;
  public pushMatrix: Function | undefined;
  public resetMatrix: Function | undefined;
  public rotateX: Function | undefined;
  public rotateY: Function | undefined;
  public rotateZ: Function | undefined;
  public rotate: Function | undefined;
  public scale: Function | undefined;
  public shearX: Function | undefined;
  public shearY: Function | undefined;
  public translate: Function | undefined;

  // P9 Lights Camera functions
  public ambientLight: Function | undefined;
  public directionalLight: Function | undefined;
  public lightFalloff: Function | undefined;
  public lightSpecular: Function | undefined;
  public lights: Function | undefined;
  public noLights: Function | undefined;
  public normal: Function | undefined;
  public pointLight: Function | undefined;
  public spotLight: Function | undefined;
  public beginCamera: Function | undefined;
  public camera: Function | undefined;
  public endCamera: Function | undefined;
  public frustum: Function | undefined;
  public ortho: Function | undefined;
  public perspective: Function | undefined;
  public printCamera: Function | undefined;
  public printProjection: Function | undefined;
  public modelX: Function | undefined;
  public modelY: Function | undefined;
  public modelZ: Function | undefined;
  public screenX: Function | undefined;
  public screenY: Function | undefined;
  public screenZ: Function | undefined;
  public ambient: Function | undefined;
  public emissive: Function | undefined;
  public shininess: Function | undefined;
  public specular: Function | undefined;

  // P9 Rendering functions
  public blendMode: Function | undefined;
  public clip: Function | undefined;
  public createGraphics: Function | undefined;
  public hint: Function | undefined;
  public noClip: Function | undefined;
  public loadShader: Function | undefined;
  public resetShader: Function | undefined;
  public shader: Function | undefined;

  // P9 Input functions
  public mouseClicked: Function | undefined;
  public mouseDragged: Function | undefined;
  public mouseMoved: Function | undefined;
  public mousePressed: Function | undefined;
  public mouseReleased: Function | undefined;
  public mouseWheel: Function | undefined;
  public keyPressed: Function | undefined;
  public keyReleased: Function | undefined;
  public keyTyped: Function | undefined;
  public createInput: Function | undefined;
  public createReader: Function | undefined;
  public launch: Function | undefined;
  public loadBytes: Function | undefined;
  public loadJSONArray: Function | undefined;
  public loadJSONObject: Function | undefined;
  public loadStrings: Function | undefined;
  public loadTable: Function | undefined;
  public loadXML: Function | undefined;
  public parseJSONArray: Function | undefined;
  public parseJSONObject: Function | undefined;
  public parseXML: Function | undefined;
  public selectFolder: Function | undefined;
  public selectInput: Function | undefined;
  public day: Function | undefined;
  public hour: Function | undefined;
  public millis: Function | undefined;
  public minute: Function | undefined;
  public month: Function | undefined;
  public second: Function | undefined;
  public year: Function | undefined;

  // P9 Output functions
  public printArray: Function | undefined;
  public print: Function | undefined;
  public println: Function | undefined;
  public saveFrame: Function | undefined;
  public save: Function | undefined;
  public beginRaw: Function | undefined;
  public beginRecord: Function | undefined;
  public createOutput: Function | undefined;
  public createWriter: Function | undefined;
  public endRaw: Function | undefined;
  public endRecord: Function | undefined;
  public saveBytes: Function | undefined;
  public saveJSONArray: Function | undefined;
  public saveJSONObject: Function | undefined;
  public saveStream: Function | undefined;
  public saveStrings: Function | undefined;
  public saveTable: Function | undefined;
  public saveXML: Function | undefined;
  public selectOutput: Function | undefined;

  // P9 Math functions
  public abs: Function | undefined;
  public ceil: Function | undefined;
  public constrain: Function | undefined;
  public dist: Function | undefined;
  public exp: Function | undefined;
  public floor: Function | undefined;
  public lerp: Function | undefined;
  public log: Function | undefined;
  public mag: Function | undefined;
  public map: Function | undefined;
  public max: Function | undefined;
  public min: Function | undefined;
  public norm: Function | undefined;
  public pow: Function | undefined;
  public round: Function | undefined;
  public sq: Function | undefined;
  public sqrt: Function | undefined;
  public acos: Function | undefined;
  public asin: Function | undefined;
  public atan2: Function | undefined;
  public atan: Function | undefined;
  public cos: Function | undefined;
  public degrees: Function | undefined;
  public radians: Function | undefined;
  public sin: Function | undefined;
  public tan: Function | undefined;
  public noiseDetail: Function | undefined;
  public noiseSeed: Function | undefined;
  public noise: Function | undefined;
  public randomGaussian: Function | undefined;
  public randomSeed: Function | undefined;
  public random: Function | undefined;

  // P9 constants and variables
  public readonly PI = Math.PI;
  public readonly HALF_PI = Math.PI / 2;
  public readonly QUARTER_PI = Math.PI / 4;
  public readonly TWO_PI = 2 * Math.PI;
  public readonly TAU = this.TWO_PI;

  public readonly LEFT = 37; // 37 in Processing
  public readonly UP = 38; // 38 in Processing
  public readonly RIGHT = 39; // 39 in Processing
  public readonly DOWN = 40; // 40 in Processing
  public readonly CENTER = 4; // 3 in Processing
  public readonly TOP = 101; // 101 in Processing
  public readonly BOTTOM = 102; // 102 in Processing
  public readonly BASELINE = 0; // 0 in Processing
  public readonly CODED = "65535"; // 65535 in Processing

  public readonly ALT = 18; // 18 in Processing
  public readonly CONTROL = 17; // 17 in Processing
  public readonly SHIFT = 16; // 16 in Processing

  public readonly RGB = 0;
  public readonly HSB = 1;

  private _width: number;
  private _height: number;
  private _pmouseX = 0;
  private _pmouseY = 0;
  private _mouseX = 0;
  private _mouseY = 0;
  private _mouseButton = -1;
  private _mousePressedVar = false;
  private _keyPressedVar = false;
  private _key = "";
  private _keyCode = -1;
  private _colorMode = this.RGB;
  private readonly _colorElementMaxDef = 255.0;
  private _colorElementMax1 = this._colorElementMaxDef;
  private _colorElementMax2 = this._colorElementMaxDef;
  private _colorElementMax3 = this._colorElementMaxDef;
  private _colorElementMaxA = this._colorElementMaxDef;

  constructor(
    private readonly _scriptElement: HTMLScriptElement,
    private readonly _id: string,
    private readonly _window: Window
  ) {
    this._src = this._scriptElement.innerText;

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
    this._canvas = document.createElement("canvas");
    this._canvas.setAttribute("id", `${this._id}_canvas`);
    this._scriptElement.after(this._canvas);
    this._canvas.width = 100;
    this._canvas.height = 100;
    this._width = this._canvas.width;
    this._height = this._canvas.height;

    // context settings
    this._context = this._canvas.getContext("2d");
    if (this._context === null) {
      Utils.log("P9: constructor(): Failed to get context.", this);
      return;
    }
    this.setBackground("rgb(220, 220, 220)");
    this._context.lineWidth = 0.75;
    this._context.lineCap = "round";
    this._currentLineWidth = this._context.lineWidth;
    this._currentLineCap = "round";

    // add function names to the list
    const structureFuncs = new P9StructureFuncs(this, this._window);

    this.exit = function (): void {
      structureFuncs.exit();
    };

    this.loop = function (): void {
      structureFuncs.loop();
    };

    this.noLoop = function (): void {
      structureFuncs.noLoop();
    };

    this.popStyle = function (): void {
      structureFuncs.popStyle();
    };

    this.pop = function (): void {
      structureFuncs.pop();
    };

    this.pushStyle = function (): void {
      structureFuncs.pushStyle();
    };

    this.push = function (): void {
      structureFuncs.push();
    };

    this.redraw = function (): void {
      structureFuncs.redraw();
    };

    this.setLocation = function (a: number, b: number): void {
      structureFuncs.setLocation(a, b);
    };

    this.setResizable = function (b: boolean): void {
      structureFuncs.setResizable(b);
    };

    this.setTitle = function (str: string): void {
      structureFuncs.setTitle(str);
    };

    this.thread = function (): void {
      structureFuncs.thread();
    };

    const environmentFuncs = new P9EnvironmentFuncs(this);
    this.cursor = function (): void {
      environmentFuncs.cursor();
    };

    this.delay = function (): void {
      environmentFuncs.delay();
    };

    this.displayDensity = function (): void {
      environmentFuncs.displayDensity();
    };

    this.frameRate = function (n: number): void {
      environmentFuncs.frameRate(n);
    };

    this.fullScreen = function (): void {
      environmentFuncs.fullScreen();
    };

    this.noCursor = function (): void {
      environmentFuncs.noCursor();
    };

    this.noSmooth = function (): void {
      environmentFuncs.noSmooth();
    };

    this.pixelDensity = function (): void {
      environmentFuncs.pixelDensity();
    };

    this.size = function (w: number, h: number, r?: number): void {
      environmentFuncs.size(w, h, r);
    };

    this.smooth = function (): void {
      environmentFuncs.smooth();
    };

    const dataFuncs = new P9DataFuncs(this);
    this.binary = function (x: number | string, d?: number): string {
      return dataFuncs.binary(x, d);
    };

    this.boolean = function (
      x: number | string | Array<number> | Array<string>
    ): boolean | Array<boolean> {
      if (Array.isArray(x)) {
        return dataFuncs.boolean(x);
      }
      return dataFuncs.boolean(x);
    };

    this.byte = function (
      x:
        | boolean
        | number
        | string
        | Array<boolean>
        | Array<number>
        | Array<string>
    ): number | Array<number> {
      if (Array.isArray(x)) {
        return dataFuncs.byte(x);
      }
      return dataFuncs.byte(x);
    };

    this.char = function (
      x:
        | number
        | boolean
        | string
        | Array<number>
        | Array<boolean>
        | Array<string>
    ): string | Array<string> {
      if (Array.isArray(x)) {
        return dataFuncs.char(x);
      }
      return dataFuncs.char(x);
    };

    this.float = function (
      x: number | string | Array<number> | Array<string>
    ): number | Array<number> {
      if (Array.isArray(x)) {
        return dataFuncs.float(x);
      }
      return dataFuncs.float(x);
    };

    this.hex = function (x: number | string, d?: number): string {
      return dataFuncs.hex(x, d);
    };

    this.int = function (
      x:
        | number
        | boolean
        | string
        | Array<number>
        | Array<boolean>
        | Array<boolean>
    ): number | Array<number> {
      if (Array.isArray(x)) {
        return dataFuncs.int(x);
      }
      return dataFuncs.int(x);
    };

    this.str = function (
      x:
        | boolean
        | number
        | string
        | Array<boolean>
        | Array<number>
        | Array<string>
    ): string | Array<string> {
      if (Array.isArray(x)) {
        return dataFuncs.str(x);
      }
      return dataFuncs.str(x);
    };

    this.unbinary = function (x: string): number {
      return dataFuncs.unbinary(x);
    };

    this.unhex = function (x: string): number {
      return dataFuncs.unhex(x);
    };

    this.join = function (l: Array<string>, s?: string): string {
      return dataFuncs.join(l, s);
    };

    this.matchAll = function (str: string, regex: string): string[][] {
      return dataFuncs.matchAll(str, regex);
    };

    this.match = function (str: string, regexp: string): Array<string> | null {
      return dataFuncs.match(str, regexp);
    };

    this.nf = function (
      ...args:
        | [x: number]
        | [x: number, digits: number]
        | [x: number, left: number, right: number]
        | [x: Array<number>]
        | [x: Array<number>, digits: number]
        | [x: Array<number>, left: number, right: number]
    ): Array<string> {
      return dataFuncs.nf(...args);
    };

    this.nfc = function (
      ...args:
        | [x: number]
        | [x: number, right: number]
        | [x: Array<number>]
        | [x: Array<number>, right: number]
    ): Array<string> {
      return dataFuncs.nfc(...args);
    };

    this.nfp = function (
      x: number | Array<number>,
      left?: number,
      right?: number
    ): string | Array<string> {
      if (Array.isArray(x)) {
        return dataFuncs.nfp(x, left, right);
      }
      return dataFuncs.nfp(x, left, right);
    };

    this.nfs = function (
      x: number | Array<number>,
      left?: number,
      right?: number
    ): string | Array<string> {
      if (Array.isArray(x)) {
        return dataFuncs.nfs(x, left, right);
      }
      return dataFuncs.nfs(x, left, right);
    };

    this.splitTokens = function (str: string, delim?: string): Array<string> {
      return dataFuncs.splitTokens(str, delim);
    };

    this.split = function (str: string, delim: string): Array<string> {
      return dataFuncs.split(str, delim);
    };

    this.trim = function (x: string | Array<string>): string | Array<string> {
      if (Array.isArray(x)) {
        return dataFuncs.trim(x);
      }
      return dataFuncs.trim(x);
    };

    this.append = function (l: Array<any>, v: any): Array<any> {
      return dataFuncs.append(l, v);
    };

    this.arrayCopy = function (
      ...args:
        | [
            src: Array<any>,
            srcPos: number,
            dst: Array<any>,
            dstPos: number,
            length: number
          ]
        | [src: Array<any>, dst: Array<any>, length: number]
        | [src: Array<any>, dst: Array<any>]
    ): void {
      dataFuncs.arrayCopy(...args);
    };

    this.concat = function (a: Array<any>, b: Array<any>): Array<any> {
      return dataFuncs.concat(a, b);
    };

    this.expand = function (l: Array<any>, x?: number): Array<any> {
      return dataFuncs.expand(l, x);
    };

    this.reverse = function (l: Array<any>): Array<any> {
      return dataFuncs.reverse(l);
    };

    this.shorten = function (l: Array<any>): Array<any> {
      return dataFuncs.shorten(l);
    };

    this.sort = function (l: Array<any>, x?: number): Array<any> {
      return dataFuncs.sort(l, x);
    };

    this.splice = function (
      l: Array<any>,
      v: Array<any> | boolean | string | number | object,
      idx: number
    ): Array<any> {
      return dataFuncs.splice(l, v, idx);
    };

    this.subset = function (l: Array<any>, x: number, y?: number): Array<any> {
      return dataFuncs.subset(l, x, y);
    };

    const shapeFuncs = new P9ShapeFuncs(this);
    this.createShape = function (): void {
      shapeFuncs.createShape();
    };

    this.loadShape = function (): void {
      shapeFuncs.loadShape();
    };

    this.bezierDetail = function (): void {
      shapeFuncs.bezierDetail();
    };

    this.bezierPoint = function (): void {
      shapeFuncs.bezierPoint();
    };

    this.bezierTangent = function (): void {
      shapeFuncs.bezierTangent();
    };

    this.bezier = function (): void {
      shapeFuncs.bezier();
    };

    this.curveDetail = function (): void {
      shapeFuncs.curveDetail();
    };

    this.curvePoint = function (): void {
      shapeFuncs.curvePoint();
    };

    this.curveTangent = function (): void {
      shapeFuncs.curveTangent();
    };

    this.curveTightness = function (): void {
      shapeFuncs.curveTightness();
    };

    this.curve = function (): void {
      shapeFuncs.curve();
    };

    this.ellipseMode = function (): void {
      shapeFuncs.ellipseMode();
    };

    this.rectMode = function (): void {
      shapeFuncs.rectMode();
    };

    this.strokeCap = function (): void {
      shapeFuncs.strokeCap();
    };

    this.strokeJoin = function (): void {
      shapeFuncs.strokeJoin();
    };

    this.strokeWeight = function (w: number): void {
      shapeFuncs.strokeWeight(w);
    };

    this.beginContour = function (): void {
      shapeFuncs.beginContour();
    };

    this.beginShape = function (): void {
      shapeFuncs.beginShape();
    };

    this.bezierVertex = function (): void {
      shapeFuncs.bezierVertex();
    };

    this.curveVertex = function (): void {
      shapeFuncs.curveVertex();
    };

    this.endContour = function (): void {
      shapeFuncs.endContour();
    };

    this.endShape = function (): void {
      shapeFuncs.endShape();
    };

    this.quadraticVertex = function (): void {
      shapeFuncs.quadraticVertex();
    };

    this.vertex = function (): void {
      shapeFuncs.vertex();
    };

    this.shapeMode = function (): void {
      shapeFuncs.shapeMode();
    };

    this.shape = function (): void {
      shapeFuncs.shape();
    };

    this.arc = function (
      x: number,
      y: number,
      w: number,
      h: number,
      start: number,
      stop: number,
      mode?: any
    ): void {
      shapeFuncs.arc(x, y, w, h, start, stop, mode);
    };

    this.circle = function (x: number, y: number, e: number): void {
      shapeFuncs.circle(x, y, e);
    };

    this.ellipse = function (x: number, y: number, w: number, h: number): void {
      shapeFuncs.ellipse(x, y, w, h);
    };

    this.line = function (
      a: number,
      b: number,
      c: number,
      d: number,
      e?: number,
      f?: number
    ): void {
      shapeFuncs.line(a, b, c, d, e, f);
    };

    this.point = function (x: number, y: number, z?: number): void {
      shapeFuncs.point(x, y, z);
    };

    this.quad = function (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number
    ): void {
      shapeFuncs.quad(x1, y1, x2, y2, x3, y3, x4, y4);
    };

    this.rect = function (
      a: number,
      b: number,
      c: number,
      d: number,
      ar?: number,
      br?: number,
      cr?: number,
      dr?: number
    ): void {
      shapeFuncs.rect(a, b, c, d);
    };

    this.square = function (x: number, y: number, l: number): void {
      shapeFuncs.square(x, y, l);
    };

    this.triangle = function (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number
    ): void {
      shapeFuncs.triangle(x1, y1, x2, y2, x3, y3);
    };

    this.box = function (): void {
      shapeFuncs.box();
    };

    this.sphereDetail = function (): void {
      shapeFuncs.sphereDetail();
    };

    this.sphere = function (): void {
      shapeFuncs.sphere();
    };

    const colorFuncs = new P9ColorFuncs(this);
    this.background = function (
      ...args:
        | [c: number | number]
        | [c: number | string, alpha: number]
        | [v1: number, v2: number, v3: number]
        | [v1: number, v2: number, v3: number, alpha: number]
    ): void {
      colorFuncs.background(...args);
    };

    this.clear = function (): void {
      colorFuncs.clear();
    };

    this.colorMode = function (
      ...args:
        | [mode: number]
        | [mode: number, max: number]
        | [mode: number, max1: number, max2: number, max3: number]
        | [mode: number, max1: number, max2: number, max3: number, maxA: number]
    ): void {
      colorFuncs.colorMode(...args);
    };

    this.fill = function (
      ...args:
        | [c: number | string]
        | [c: number | string, alpha: number]
        | [v1: number, v2: number, v3: number]
        | [v1: number, v2: number, v3: number, alpha: number]
    ): void {
      colorFuncs.fill(...args);
    };

    this.noFill = function (): void {
      colorFuncs.noFill();
    };

    this.noStroke = function (): void {
      colorFuncs.noStroke();
    };

    this.stroke = function (
      ...args:
        | [c: number | string]
        | [c: number | string, alpha: number]
        | [v1: number, v2: number, v3: number]
        | [v1: number, v2: number, v3: number, alpha: number]
    ): void {
      colorFuncs.stroke(...args);
    };

    this.alpha = function (x: number | string): number {
      return colorFuncs.alpha(x);
    };

    this.blue = function (x: number | string): number {
      return colorFuncs.blue(x);
    };

    this.brightness = function (x: number | string): number {
      return colorFuncs.brightness(x);
    };

    this.green = function (x: number | string): number {
      return colorFuncs.green(x);
    };

    this.hue = function (x: number | string): number {
      return colorFuncs.hue(x);
    };

    this.lerpColor = function (x: number, y: number, z: number): number {
      return colorFuncs.lerpColor(x, y, z);
    };

    this.red = function (x: number | string): number {
      return colorFuncs.red(x);
    };

    this.saturation = function (x: number | string): number {
      return colorFuncs.saturation(x);
    };

    const imageFuncs = new P9ImageFuncs(this);
    this.createImage = function (): void {
      imageFuncs.createImage();
    };

    this.imageMode = function (): void {
      imageFuncs.imageMode();
    };

    this.image = function (): void {
      imageFuncs.image();
    };

    this.loadImage = function (): void {
      imageFuncs.loadImage();
    };

    this.noTint = function (): void {
      imageFuncs.noTint();
    };

    this.requestImage = function (): void {
      imageFuncs.requestImage();
    };

    this.tint = function (): void {
      imageFuncs.tint();
    };

    this.textureMode = function (): void {
      imageFuncs.textureMode();
    };

    this.textureWrap = function (): void {
      imageFuncs.textureWrap();
    };

    this.texture = function (): void {
      imageFuncs.texture();
    };

    this.blend = function (): void {
      imageFuncs.blend();
    };

    this.copy = function (): void {
      imageFuncs.copy();
    };

    this.filter = function (): void {
      imageFuncs.filter();
    };

    this.loadPixels = function (): void {
      imageFuncs.loadPixels();
    };

    this.mask = function (): void {
      imageFuncs.mask();
    };

    this.set = function (): void {
      imageFuncs.set();
    };

    this.updatePixels = function (): void {
      imageFuncs.updatePixels();
    };

    this.get = function (
      ...args:
        | []
        | [x: number, y: number]
        | [x: number, y: number, w: number, h: number]
    ): number {
      return imageFuncs.get(...args);
    };

    const typographyFuncs = new P9TypographyFuncs(this);
    this.createFont = function (): void {
      typographyFuncs.createFont();
    };

    this.loadFont = function (): void {
      typographyFuncs.loadFont();
    };

    this.textFont = function (): void {
      typographyFuncs.textFont();
    };

    this.text = function (
      ...args:
        | [str: string, x: number, y: number]
        | [str: string, x: number, y: number, z: number]
        | [
            chars: Array<string>,
            start: number,
            stop: number,
            x: number,
            y: number
          ]
        | [
            chars: Array<string>,
            start: number,
            stop: number,
            x: number,
            y: number,
            z: number
          ]
        | [str: string, x1: number, y1: number, x2: number, y2: number]
        | [n: number, x: number, y: number]
        | [n: number, x: number, y: number, z: number]
    ): void {
      typographyFuncs.text(...args);
    };

    this.textAlign = function (x: number, y?: number): void {
      typographyFuncs.textAlign(x, y);
    };

    this.textLeading = function (): void {
      typographyFuncs.textLeading();
    };

    this.textMode = function (): void {
      typographyFuncs.textMode();
    };

    this.textSize = function (x: number): void {
      typographyFuncs.textSize(x);
    };

    this.textWidth = function (s: string): number {
      return typographyFuncs.textWidth(s);
    };

    this.textAscent = function (): void {
      typographyFuncs.textAscent();
    };

    this.textDescent = function (): void {
      typographyFuncs.textDescent();
    };

    const transformFuncs = new P9TransformFuncs(this);
    this.applyMatrix = function (): void {
      transformFuncs.applyMatrix();
    };

    this.popMatrix = function (): void {
      transformFuncs.popMatrix();
    };

    this.printMatrix = function (): void {
      transformFuncs.printMatrix();
    };

    this.pushMatrix = function (): void {
      transformFuncs.pushMatrix();
    };

    this.resetMatrix = function (): void {
      transformFuncs.resetMatrix();
    };

    this.rotateX = function (): void {
      transformFuncs.rotateX();
    };

    this.rotateY = function (): void {
      transformFuncs.rotateY();
    };

    this.rotateZ = function (): void {
      transformFuncs.rotateZ();
    };

    this.rotate = function (): void {
      transformFuncs.rotate();
    };

    this.scale = function (): void {
      transformFuncs.scale();
    };

    this.shearX = function (): void {
      transformFuncs.shearX();
    };

    this.shearY = function (): void {
      transformFuncs.shearY();
    };

    this.translate = function (): void {
      transformFuncs.translate();
    };

    const lightsCameraFuncs = new P9LightsCameraFuncs(this);
    this.ambientLight = function (): void {
      lightsCameraFuncs.ambientLight();
    };

    this.directionalLight = function (): void {
      lightsCameraFuncs.directionalLight();
    };

    this.lightFalloff = function (): void {
      lightsCameraFuncs.lightFalloff();
    };

    this.lightSpecular = function (): void {
      lightsCameraFuncs.lightSpecular();
    };

    this.lights = function (): void {
      lightsCameraFuncs.lights();
    };

    this.noLights = function (): void {
      lightsCameraFuncs.noLights();
    };

    this.normal = function (): void {
      lightsCameraFuncs.normal();
    };

    this.pointLight = function (): void {
      lightsCameraFuncs.pointLight();
    };

    this.spotLight = function (): void {
      lightsCameraFuncs.spotLight();
    };

    this.beginCamera = function (): void {
      lightsCameraFuncs.beginCamera();
    };

    this.camera = function (): void {
      lightsCameraFuncs.camera();
    };

    this.endCamera = function (): void {
      lightsCameraFuncs.endCamera();
    };

    this.frustum = function (): void {
      lightsCameraFuncs.frustum();
    };

    this.ortho = function (): void {
      lightsCameraFuncs.ortho();
    };

    this.perspective = function (): void {
      lightsCameraFuncs.perspective();
    };

    this.printCamera = function (): void {
      lightsCameraFuncs.printCamera();
    };

    this.printProjection = function (): void {
      lightsCameraFuncs.printProjection();
    };

    this.modelX = function (): void {
      lightsCameraFuncs.modelX();
    };

    this.modelY = function (): void {
      lightsCameraFuncs.modelY();
    };

    this.modelZ = function (): void {
      lightsCameraFuncs.modelZ();
    };

    this.screenX = function (): void {
      lightsCameraFuncs.screenX();
    };

    this.screenY = function (): void {
      lightsCameraFuncs.screenY();
    };

    this.screenZ = function (): void {
      lightsCameraFuncs.screenZ();
    };

    this.ambient = function (): void {
      lightsCameraFuncs.ambient();
    };

    this.emissive = function (): void {
      lightsCameraFuncs.emissive();
    };

    this.shininess = function (): void {
      lightsCameraFuncs.shininess();
    };

    this.specular = function (): void {
      lightsCameraFuncs.specular();
    };

    const renderingFuncs = new P9RenderingFuncs(this);
    this.blendMode = function (): void {
      renderingFuncs.blendMode();
    };

    this.clip = function (): void {
      renderingFuncs.clip();
    };

    this.createGraphics = function (): void {
      renderingFuncs.createGraphics();
    };

    this.hint = function (): void {
      renderingFuncs.hint();
    };

    this.noClip = function (): void {
      renderingFuncs.noClip();
    };

    this.loadShader = function (): void {
      renderingFuncs.loadShader();
    };

    this.resetShader = function (): void {
      renderingFuncs.resetShader();
    };

    this.shader = function (): void {
      renderingFuncs.shader();
    };

    const inputFuncs = new P9InputFuncs(this);
    this.createInput = function (): void {
      inputFuncs.createInput();
    };

    this.createReader = function (): void {
      inputFuncs.createReader();
    };

    this.launch = function (): void {
      inputFuncs.launch();
    };

    this.loadBytes = function (): void {
      inputFuncs.loadBytes();
    };

    this.loadJSONArray = function (): void {
      inputFuncs.loadJSONArray();
    };

    this.loadJSONObject = function (): void {
      inputFuncs.loadJSONObject();
    };

    this.loadStrings = function (): void {
      inputFuncs.loadStrings();
    };

    this.loadTable = function (): void {
      inputFuncs.loadTable();
    };

    this.loadXML = function (): void {
      inputFuncs.loadXML();
    };

    this.parseJSONArray = function (): void {
      inputFuncs.parseJSONArray();
    };

    this.parseJSONObject = function (): void {
      inputFuncs.parseJSONObject();
    };

    this.parseXML = function (): void {
      inputFuncs.parseXML();
    };

    this.selectFolder = function (): void {
      inputFuncs.selectFolder();
    };

    this.selectInput = function (): void {
      inputFuncs.selectInput();
    };

    this.day = function (): number {
      return inputFuncs.day();
    };

    this.hour = function (): number {
      return inputFuncs.hour();
    };

    this.millis = function (): number {
      return inputFuncs.millis();
    };

    this.minute = function (): number {
      return inputFuncs.minute();
    };

    this.month = function (): number {
      return inputFuncs.month();
    };

    this.second = function (): number {
      return inputFuncs.second();
    };

    this.year = function (): number {
      return inputFuncs.year();
    };

    const outputFuncs = new P9OutputFuncs(this);
    this.printArray = function (list: Array<any>): void {
      outputFuncs.printArray(list);
    };

    this.print = function (
      ...args: Array<number> | Array<boolean> | Array<string> | Array<object>
    ): void {
      outputFuncs.print(...args);
    };

    this.println = function (
      ...args: Array<number> | Array<boolean> | Array<string> | Array<object>
    ): void {
      outputFuncs.println(...args);
    };

    this.saveFrame = function (): void {
      outputFuncs.saveFrame();
    };

    this.save = function (): void {
      outputFuncs.save;
    };

    this.beginRaw = function (): void {
      outputFuncs.beginRaw;
    };

    this.beginRecord = function (): void {
      outputFuncs.beginRecord;
    };

    this.createOutput = function (): void {
      outputFuncs.createOutput;
    };

    this.createWriter = function (): void {
      outputFuncs.createWriter;
    };

    this.endRaw = function (): void {
      outputFuncs.endRaw;
    };

    this.endRecord = function (): void {
      outputFuncs.endRecord;
    };

    this.saveBytes = function (): void {
      outputFuncs.saveBytes;
    };

    this.saveJSONArray = function (): void {
      outputFuncs.saveJSONArray;
    };

    this.saveJSONObject = function (): void {
      outputFuncs.saveJSONObject;
    };

    this.saveStream = function (): void {
      outputFuncs.saveStream;
    };

    this.saveStrings = function (): void {
      outputFuncs.saveStrings;
    };

    this.saveTable = function (): void {
      outputFuncs.saveTable;
    };

    this.saveXML = function (): void {
      outputFuncs.saveXML;
    };

    this.selectOutput = function (): void {
      outputFuncs.selectOutput;
    };

    const mathFuncs = new P9MathFuncs(this);
    this.abs = function (n: number): number {
      return mathFuncs.abs(n);
    };

    this.ceil = function (n: number): number {
      return mathFuncs.ceil(n);
    };

    this.constrain = function (v: number, x: number, y: number): number {
      return mathFuncs.constrain(v, x, y);
    };

    this.dist = function (
      ...args:
        | [x1: number, y1: number, x2: number, y2: number]
        | [
            x1: number,
            y1: number,
            z1: number,
            x2: number,
            y2: number,
            z2: number
          ]
    ): number {
      return mathFuncs.dist(...args);
    };

    this.exp = function (n: number): number {
      return mathFuncs.exp(n);
    };

    this.floor = function (x: number): number {
      return mathFuncs.floor(x);
    };

    this.lerp = function (x: number, y: number, z: number): number {
      return mathFuncs.lerp(x, y, z);
    };

    this.log = function (n: number): number {
      return mathFuncs.log(n);
    };

    this.mag = function (
      ...args: [x: number, y: number] | [x: number, y: number, z: number]
    ): number {
      return mathFuncs.mag(...args);
    };

    this.map = function (
      v: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): number {
      return mathFuncs.map(v, x1, y1, x2, y2);
    };

    this.max = function (
      ...args:
        | [a: number, b: number]
        | [a: number, b: number, c: number]
        | [list: Array<number>]
    ): number {
      return mathFuncs.max(...args);
    };

    this.min = function (
      ...args:
        | [a: number, b: number]
        | [a: number, b: number, c: number]
        | [list: Array<number>]
    ): number {
      return mathFuncs.min(...args);
    };

    this.norm = function (v: number, x: number, y: number): number {
      return mathFuncs.norm(v, x, y);
    };

    this.pow = function (a: number, b: number): number {
      return mathFuncs.pow(a, b);
    };

    this.round = function (n: number): number {
      return mathFuncs.round(n);
    };

    this.sq = function (n: number): number {
      return mathFuncs.sq(n);
    };

    this.sqrt = function (n: number): number {
      return mathFuncs.sqrt(n);
    };

    this.acos = function (n: number): number {
      return mathFuncs.acos(n);
    };

    this.asin = function (n: number): number {
      return mathFuncs.asin(n);
    };

    this.atan2 = function (y: number, x: number): number {
      return mathFuncs.atan2(y, x);
    };

    this.atan = function (n: number): number {
      return mathFuncs.atan(n);
    };

    this.cos = function (n: number): number {
      return mathFuncs.cos(n);
    };

    this.degrees = function (x: number): number {
      return mathFuncs.degrees(x);
    };

    this.radians = function (x: number): number {
      return mathFuncs.radians(x);
    };

    this.sin = function (n: number): number {
      return mathFuncs.sin(n);
    };

    this.tan = function (n: number): number {
      return mathFuncs.tan(n);
    };

    this.noiseDetail = function (): void {
      mathFuncs.noiseDetail();
    };

    this.noiseSeed = function (): void {
      mathFuncs.noiseSeed();
    };

    this.noise = function (): void {
      mathFuncs.noise();
    };

    this.randomGaussian = function (): void {
      mathFuncs.randomGaussian();
    };

    this.randomSeed = function (n: number): void {
      mathFuncs.randomSeed(n);
    };

    this.random = function (
      ...args: [low: number, high: number] | [high: number]
    ): number {
      return mathFuncs.random(...args);
    };

    // add eventListeners to the canvas
    this._canvas.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    this._canvas.addEventListener("click", (e) => {
      this._mousePressedVar = false;
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
    this._canvas.addEventListener("mousemove", (e) => {
      this._mouseX = e.offsetX;
      this._mouseY = e.offsetY;
      if (this._mousePressedVar === false && this.mouseMoved !== undefined) {
        this.mouseMoved(e);
      } else if (
        this._mousePressedVar === true &&
        this.mouseDragged !== undefined
      ) {
        this.mouseDragged(e);
      }
    });
    this._canvas.addEventListener("mousedown", (e) => {
      this._mousePressedVar = true;
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
    this._canvas.addEventListener("mouseup", (e) => {
      this._mousePressedVar = false;
      if (this.mouseReleased !== undefined) {
        this.mouseReleased(e);
      }
    });
    this._canvas.addEventListener("wheel", (e) => {
      this._mousePressedVar = false;
      if (this.mouseWheel !== undefined) {
        this.mouseWheel(e);
      }
    });
    document.addEventListener("keydown", (e) => {
      this._keyPressedVar = true;
      if (e.altKey) {
        this._keyCode = this.ALT;
        this._key = this.CODED;
      } else {
        if (e.key === "ArrowUp") {
          this._keyCode = this.UP;
          this._key = this.CODED;
        } else if (e.key === "ArrowDown") {
          this._keyCode = this.DOWN;
          this._key = this.CODED;
        } else if (e.key === "ArrowLeft") {
          this._keyCode = this.LEFT;
          this._key = this.CODED;
        } else if (e.key === "ArrowRight") {
          this._keyCode = this.RIGHT;
          this._key = this.CODED;
        } else if (e.key === "Control") {
          this._keyCode = this.CONTROL;
          this._key = this.CODED;
        } else if (e.key === "Shift") {
          this._keyCode = this.SHIFT;
          this._key = this.CODED;
        } else if (e.key.length > 1) {
          this._keyCode = e.keyCode;
          this._key = e.key.toUpperCase();
        } else {
          this._keyCode = e.keyCode;
          this._key = e.key;
        }
      }

      if (this.keyPressed !== undefined) {
        this.keyPressed(e);
      }
    });
    document.addEventListener("keyup", (e) => {
      this._keyPressedVar = false;
      if (this.keyReleased !== undefined) {
        this.keyReleased(e);
      }
    });
    document.addEventListener("keypress", (e) => {
      this._keyPressedVar = false;
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
      Utils.error("P9: getTranspiled(): Transpilation failed.", this);
      return "";
    }
  }

  public get id(): string {
    return this._id;
  }

  public get src(): string {
    return this._src;
  }

  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  public get context(): CanvasRenderingContext2D | null {
    return this._context;
  }

  public get currentFrameRate(): number {
    return this._currentFrameRate;
  }

  public set currentFrameRate(n: number) {
    this._currentFrameRate = n;
  }

  public get noLoopCalled(): boolean {
    return this._noLoopCalled;
  }

  public set noLoopCalled(b: boolean) {
    this._noLoopCalled = b;
  }

  public get fRate(): number {
    return this._fRate;
  }

  public set fRate(n: number) {
    this._fRate = n;
  }

  public get frameCount(): number {
    return this._frameCount;
  }

  public set frameCount(n: number) {
    this._frameCount = n;
  }

  public get doStroke(): boolean {
    return this._doStroke;
  }

  public set doStroke(b: boolean) {
    this._doStroke = b;
  }

  public get currentStrokeColor(): string {
    return this._currentStrokeColor;
  }

  public set currentStrokeColor(str: string) {
    this._currentStrokeColor = str;
  }

  public get doFill(): boolean {
    return this._doFill;
  }

  public set doFill(b: boolean) {
    this._doFill = b;
  }

  public get currentFillColor(): string {
    return this._currentFillColor;
  }

  public set currentFillColor(str: string) {
    this._currentFillColor = str;
  }

  public get currentLineWidth(): number {
    return this._currentLineWidth;
  }

  public set currentLineWidth(w: number) {
    this._currentLineWidth = w;
  }

  public get currentLineCap(): string {
    return this._currentLineCap;
  }

  public set currentLineCap(str: string) {
    this._currentLineCap = str;
  }

  public get intervalID(): number {
    return this._intervalID;
  }

  public set intervalID(n: number) {
    this._intervalID = n;
  }

  public get loopStarted(): boolean {
    return this._loopStarted;
  }

  public set loopStarted(b: boolean) {
    this._loopStarted = b;
  }

  public get startTime(): number {
    return this._startTime;
  }

  public set startTime(n: number) {
    this._startTime = n;
  }

  public get width(): number {
    return this._width;
  }

  public set width(n: number) {
    this._width = n;
  }

  public get height(): number {
    return this._height;
  }

  public set height(n: number) {
    this._height = n;
  }

  public get mouseButton(): number {
    return this._mouseButton;
  }

  public get mousePressedVar(): boolean {
    return this._mousePressedVar;
  }

  public get keyPressedVar(): boolean {
    return this._keyPressedVar;
  }

  public get key(): string {
    return this._key;
  }

  public get keyCode(): number {
    return this._keyCode;
  }

  public get pmouseX(): number {
    return this._pmouseX;
  }

  public set pmouseX(n: number) {
    this._pmouseX = n;
  }

  public get pmouseY(): number {
    return this._pmouseY;
  }

  public set pmouseY(n: number) {
    this._pmouseY = n;
  }

  public get mouseX(): number {
    return this._mouseX;
  }

  public set mouseX(n: number) {
    this._mouseX = n;
  }

  public get mouseY(): number {
    return this._mouseY;
  }

  public set mouseY(n: number) {
    this._mouseY = n;
  }

  public get debug(): boolean {
    return this._debug;
  }

  public get displayCode(): boolean {
    return this._displayCode;
  }

  public get p9FuncList(): Array<string> {
    return this._p9FuncList;
  }

  public get p9ConstList(): Array<string> {
    return this._p9ConstList;
  }

  public get currentColorMode(): number {
    return this._colorMode;
  }

  public set currentColorMode(n: number) {
    this._colorMode = n;
  }

  public get colorElementMax1(): number {
    return this._colorElementMax1;
  }

  public set colorElementMax1(n: number) {
    this._colorElementMax1 = n;
  }

  public get colorElementMax2(): number {
    return this._colorElementMax2;
  }

  public set colorElementMax2(n: number) {
    this._colorElementMax2 = n;
  }

  public get colorElementMax3(): number {
    return this._colorElementMax3;
  }

  public set colorElementMax3(n: number) {
    this._colorElementMax3 = n;
  }

  public get colorElementMaxA(): number {
    return this._colorElementMaxA;
  }

  public set colorElementMaxA(n: number) {
    this._colorElementMaxA = n;
  }

  public get colorElementMaxDef(): number {
    return this._colorElementMaxDef;
  }

  public addP9Funcs(list: Array<string>): void {
    this._p9FuncList = this._p9FuncList.concat(list);
  }

  public toString(): string {
    return `${this.constructor.name}: ${this._id}`;
  }

  /*
  public setSize(w: number, h: number): void {
    this._canvas.width = w;
    this._canvas.height = h;
    this.width = w;
    this.height = h;
  }
  */

  public setBackground(str: string): void {
    if (this._context === null) {
      Utils.error("P9: setBackground(): Failed to get context.", this);
      return;
    }

    this._context.fillStyle = str;
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this._context.fillStyle = this._currentFillColor;
  }

  public hsb2rgb(
    hue: number,
    sat: number,
    bri: number
  ): [number, number, number] {
    let h = (360.0 * hue) / this.colorElementMax1;
    if (h === 360) {
      h = 0;
    }
    const s = (1.0 * sat) / this.colorElementMax2;
    const v = (1.0 * bri) / this.colorElementMax3;

    if (s === 0) {
      return [
        this._colorElementMaxDef * v,
        this._colorElementMaxDef * v,
        this._colorElementMaxDef * v,
      ];
    } else {
      const H = (1.0 * h) / 60 - Math.trunc((1.0 * h) / 60);
      const A = this._colorElementMaxDef * v;
      const B = this._colorElementMaxDef * v * (1 - s);
      const C = this._colorElementMaxDef * v * (1 - s * H);
      const D = this._colorElementMaxDef * v * (1 - s * (1 - H));

      if (h >= 0 && h < 60) {
        return [A, D, B];
      } else if (h >= 60 && h < 120) {
        return [C, A, B];
      } else if (h >= 120 && h < 180) {
        return [B, A, D];
      } else if (h >= 180 && h < 240) {
        return [B, C, A];
      } else if (h >= 240 && h < 300) {
        return [D, B, A];
      } else {
        return [A, B, C];
      }
    }
  }
}

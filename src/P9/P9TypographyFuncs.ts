import { Utils } from "../Utils";
import { P9ColorFuncs } from "./P9ColorFuncs";

export class P9TypographyFuncs extends P9ColorFuncs {
  constructor(u: Utils, canvas: HTMLCanvasElement) {
    super(u, canvas);
  }

  public registerTypographyFuncs(): void {
    this.utils.p9FuncList = [
      "createFont",
      "loadFont",
      "textFont",
      "text",
      "textAlign",
      "textLeading",
      "textMode",
      "textSize",
      "textWidth",
      "textAscent",
      "textDescent",
    ];
    this.utils.p9ConstList = ["TOP", "BOTTOM", "BASELINE"];
  }

  public createFont(): void {
    this.utils.log("createFont() is not implemented yet.");
  }

  public loadFont(): void {
    this.utils.log("loadFont() is not implemented yet.");
  }

  public textFont(): void {
    this.utils.log("textFont() is not implemented yet.");
  }

  public text(
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
    if (this.context === null) {
      return;
    }

    if (args.length === 3) {
      const [str, x, y] = args;
      this.context.fillText(`${str}`, x, y);
    } else if (args.length === 4) {
      this.utils.log("text(): this usage is not supported yet.");
    } else if (args.length === 5) {
      if (Array.isArray(args[0])) {
        const [chars, start, stop, x, y] = args;
        this.text(chars.slice(start, stop + 1).join(), x, y);
      } else {
        const [str, x1, y1, x2, y2] = args;
        const [ret, lineHeight] = this.divideText(str, x2, y2);
        ret.forEach((line, idx) => {
          if (this.context !== null) {
            this.context.fillText(line, x1, y1 + lineHeight * idx);
          }
        });
      }
    } else {
      this.utils.log("text(): this usage is not supported yet.");
    }
  }

  private divideText(t: string, w: number, h: number): [Array<string>, number] {
    if (t.length < 1) {
      return [new Array<string>(), 0];
    }

    if (this.context === null) {
      this.utils.log("P9TypographyFuncs: divideText(): context is null");
      return [new Array<string>(), 0];
    }

    const str = t.split("");
    let line = "";
    let ret = new Array<string>();
    str.forEach((c) => {
      if (c === "\n") {
        ret.push(line);
        line = "";
      } else {
        if (
          this.context !== null &&
          this.context.measureText(line + c).width <= w
        ) {
          line = line.concat(c);
        } else {
          ret.push(line);
          line = c;
        }
      }
    });

    if (line.length > 0) {
      ret.push(line);
    }

    const measure = this.context.measureText(ret[0]);
    const singleLineHeight =
      measure.actualBoundingBoxAscent * measure.actualBoundingBoxDescent;
    let counter = ret.length;
    while (counter * singleLineHeight > h) {
      counter--;
    }

    return [ret.slice(0, counter + 1), singleLineHeight];
  }

  public textAlign(alignX: number, alignY?: number): void {
    if (this.context === null) {
      return;
    }

    if (alignX === this.LEFT) {
      this.context.textAlign = "left";
    } else if (alignX === this.CENTER) {
      this.context.textAlign = "center";
    } else if (alignX === this.RIGHT) {
      this.context.textAlign = "right";
    }

    if (alignY !== undefined) {
      if (alignY === this.TOP) {
        this.context.textBaseline = "top";
      } else if (alignY === this.BOTTOM) {
        this.context.textBaseline = "bottom";
      } else if (alignY === this.CENTER) {
        this.context.textBaseline = "middle";
      } else if (alignY === this.BASELINE) {
        this.context.textBaseline = "alphabetic";
      }
    }
  }

  public textLeading(): void {
    this.utils.log("textLeading() is not implemented yet.");
  }

  public textMode(): void {
    this.utils.log("textMode() is not implemented yet.");
  }

  public textSize(size: number): void {
    if (this.context === null) {
      return;
    }
    const f = this.context.font.match(/px.*$/);
    this.context.font = `${size}${f}`;
  }

  public textWidth(str: string): number {
    if (this.context === null) {
      return -1;
    }
    return this.context.measureText(str).width;
  }

  public textAscent(): void {
    this.utils.log("textAscent() is not implemented yet.");
  }

  public textDescent(): void {
    this.utils.log("textDescent() is not implemented yet.");
  }
}

import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9TypographyFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
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
    ]);
  }

  public createFont(): void {
    Utils.log("createFont() is not implemented yet.", this._p);
  }

  public loadFont(): void {
    Utils.log("loadFont() is not implemented yet.", this._p);
  }

  public textFont(): void {
    Utils.log("textFont() is not implemented yet.", this._p);
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
    if (this._p.context === null) {
      return;
    }

    if (args.length === 3) {
      const [str, x, y] = args;
      this._p.context.fillText(`${str}`, x, y);
    } else if (args.length === 4) {
      Utils.log("text(): this usage is not supported yet.", this._p);
    } else if (args.length === 5) {
      if (Array.isArray(args[0])) {
        const [chars, start, stop, x, y] = args;
        this.text(chars.slice(start, stop + 1).join(), x, y);
      } else {
        const [str, x1, y1, x2, y2] = args;
        const [ret, lineHeight] = this.divideText(str, x2, y2);
        ret.forEach((line, idx) => {
          this._p.context!.fillText(line, x1, y1 + lineHeight * idx);
        });
      }
    } else {
      Utils.log("text(): this usage is not supported yet.", this._p);
    }
  }

  private divideText(
    text: string,
    width: number,
    height: number
  ): [Array<string>, number] {
    if (text.length < 1) {
      return [new Array<string>(), 0];
    }

    const str = text.split("");
    let line = "";
    let ret = new Array<string>();
    str.forEach((c) => {
      if (c === "\n") {
        ret.push(line);
        line = "";
      } else {
        if (this._p.context!.measureText(line + c).width <= width) {
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

    const measure = this._p.context!.measureText(ret[0]);
    const singleLineHeight =
      measure.actualBoundingBoxAscent * measure.actualBoundingBoxDescent;
    let counter = ret.length;
    while (counter * singleLineHeight > height) {
      counter--;
    }

    return [ret.slice(0, counter + 1), singleLineHeight];
  }

  public textAlign(alignX: number, alignY?: number): void {
    if (this._p.context === null) {
      return;
    }

    if (alignX === this._p.LEFT) {
      this._p.context.textAlign = "left";
    } else if (alignX === this._p.CENTER) {
      this._p.context.textAlign = "center";
    } else if (alignX === this._p.RIGHT) {
      this._p.context.textAlign = "right";
    }

    if (alignY !== undefined) {
      if (alignY === this._p.TOP) {
        this._p.context.textBaseline = "top";
      } else if (alignY === this._p.BOTTOM) {
        this._p.context.textBaseline = "bottom";
      } else if (alignY === this._p.CENTER) {
        this._p.context.textBaseline = "middle";
      } else if (alignY === this._p.BASELINE) {
        this._p.context.textBaseline = "alphabetic";
      }
    }
  }

  public textLeading(): void {
    Utils.log("textLeading() is not implemented yet.", this._p);
  }

  public textMode(): void {
    Utils.log("textMode() is not implemented yet.", this._p);
  }

  public textSize(size: number): void {
    if (this._p.context === null) {
      return;
    }
    const f = this._p.context.font.match(/px.*$/);
    this._p.context.font = `${size}${f}`;
  }

  public textWidth(str: string): number {
    if (this._p.context === null) {
      return -1;
    }
    return this._p.context.measureText(str).width;
  }

  public textAscent(): void {
    Utils.log("textAscent() is not implemented yet.", this._p);
  }

  public textDescent(): void {
    Utils.log("textDescent() is not implemented yet.", this._p);
  }
}

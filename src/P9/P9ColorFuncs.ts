import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9ColorFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "background",
      "clear",
      "colorMode",
      "fill",
      "noFill",
      "noStroke",
      "stroke",
      "alpha",
      "blue",
      "brightness",
      "color", // defined in P9
      "green",
      "hue",
      "lerpColor",
      "red",
      "saturation",
    ]);
  }

  public background(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): void {
    if (this._p.currentColorMode === this._p.RGB) {
      this._p.setBackground(this.getRGBColorStr(...args));
    } else {
      this._p.setBackground(this.getHSBColorStr(...args));
    }
  }

  public clear(): void {
    Utils.log("clear() is not implemented yet.", this._p);
  }

  public colorMode(
    ...args:
      | [mode: number]
      | [mode: number, max: number]
      | [mode: number, max1: number, max2: number, max3: number]
      | [mode: number, max1: number, max2: number, max3: number, maxA: number]
  ): void {
    if (args.length === 1) {
      const [mode] = args;
      this._p.currentColorMode = mode;
    } else if (args.length === 2) {
      const [mode, max] = args;
      this._p.currentColorMode = mode;
      this._p.colorElementMax1 = max;
      this._p.colorElementMax2 = max;
      this._p.colorElementMax3 = max;
      this._p.colorElementMaxA = max;
    } else if (args.length === 4) {
      const [mode, max1, max2, max3] = args;
      this._p.currentColorMode = mode;
      this._p.colorElementMax1 = max1;
      this._p.colorElementMax2 = max2;
      this._p.colorElementMax3 = max3;
    } else {
      const [mode, max1, max2, max3, maxA] = args;
      this._p.currentColorMode = mode;
      this._p.colorElementMax1 = max1;
      this._p.colorElementMax2 = max2;
      this._p.colorElementMax3 = max3;
      this._p.colorElementMaxA = maxA;
    }
  }

  public fill(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): void {
    if (this._p.context === null) {
      Utils.error("fill(): context is null", this._p);
      return;
    }

    this._p.doFill = true;
    let str;
    if (this._p.currentColorMode === this._p.RGB) {
      console.log(this.getRGBColorStr(...args));
      str = this.getRGBColorStr(...args);
    } else {
      str = this.getHSBColorStr(...args);
    }
    this._p.context.fillStyle = str;
    this._p.currentFillColor = str;
  }

  public noFill(): void {
    this._p.doFill = false;
  }

  public noStroke(): void {
    this._p.doStroke = false;
  }

  public stroke(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): void {
    if (this._p.context === null) {
      Utils.error("stroke(): context is null", this._p);
      return;
    }

    this._p.doStroke = true;
    let str;
    if (this._p.currentColorMode === this._p.RGB) {
      str = this.getRGBColorStr(...args);
    } else {
      str = this.getHSBColorStr(...args);
    }
    this._p.context.strokeStyle = str;
    this._p.currentStrokeColor = str;
  }

  public alpha(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = (parseInt(x.substring(1), 16) >> 24) & 0xff;
    } else {
      ret = (x >> 24) & 0xff;
    }
    return (this._p.colorElementMaxA * ret) / this._p.colorElementMaxDef;
  }

  public blue(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = parseInt(x.substring(1), 16) & 0xff;
    } else {
      ret = x & 0xff;
    }
    return (this._p.colorElementMax3 * ret) / this._p.colorElementMaxDef;
  }

  public brightness(x: number | string): number {
    let c;
    if (typeof x === "string") {
      c = parseInt(x.substring(1), 16);
    } else {
      c = x;
    }
    const max = Math.max(this.red(c), this.green(c), this.blue(c));
    return (this._p.colorElementMax3 * max) / this._p.colorElementMaxDef;
  }

  public green(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = (parseInt(x.substring(1), 16) >> 8) & 0xff;
    } else {
      ret = (x >> 8) & 0xff;
    }
    return (this._p.colorElementMax2 * ret) / this._p.colorElementMaxDef;
  }

  public hue(x: number | string): number {
    let c;
    if (typeof x === "string") {
      c = parseInt(x.substring(1), 16);
    } else {
      c = x;
    }

    const R = this.red(c);
    const G = this.green(c);
    const B = this.blue(c);

    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    let ret;
    if (R === G && R === B) {
      ret = 0;
    } else if (max === R) {
      ret = 60 * ((G - B) / (max - min));
    } else if (max === G) {
      ret = 60 * ((B - R) / (max - min)) + 120;
    } else {
      ret = 60 * ((R - G) / (max - min)) + 240;
    }

    if (ret < 0) {
      ret += 360;
    }
    return ret;
  }

  public lerpColor(c1: number, c2: number, amt: number): number {
    if (amt <= 0) {
      return c1;
    } else if (amt >= 1) {
      return c2;
    } else {
      if (this._p.currentColorMode === this._p.RGB) {
        const r1 = this.red(c1);
        const r2 = this.red(c2);
        const g1 = this.green(c1);
        const g2 = this.green(c2);
        const b1 = this.blue(c1);
        const b2 = this.blue(c2);
        const a1 = this.alpha(c1);
        const a2 = this.alpha(c2);
        return this._p.color(
          r1 + (r2 - r1) * amt,
          g1 + (g2 - g1) * amt,
          b1 + (b2 - b1) * amt,
          a1 + (a2 - a1) * amt
        );
      } else {
        return 0;
      }
    }
  }

  public red(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = (parseInt(x.substring(1), 16) >> 16) & 0xff;
    } else {
      ret = (x >> 16) & 0xff;
    }
    return (this._p.colorElementMax1 * ret) / this._p.colorElementMaxDef;
  }

  public saturation(x: number | string): number {
    let c;
    if (typeof x === "string") {
      c = parseInt(x.substring(1), 16);
    } else {
      c = x;
    }

    const max = Math.max(this.red(c), this.green(c), this.blue(c));
    const min = Math.min(this.red(c), this.green(c), this.blue(c));
    const ret = (max - min) / max;
    return this._p.colorElementMax2 * ret;
  }

  private getHSBColorStr(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [hue: number, sat: number, bri: number]
      | [hue: number, sat: number, bri: number, alpha: number]
  ): string {
    if (args.length === 1 || args.length === 2) {
      // the color is represented in RGB manner
      return this.getRGBColorStr(...args);
    } else {
      const [hue, sat, bri, alpha] = args;
      const [r, g, b] = this._p.hsb2rgb(hue, sat, bri);
      if (alpha === undefined) {
        return `rgba(${r}, ${g}, ${b}, ${this._p.colorElementMaxDef})`;
      } else {
        return `rgba(${r}, ${g}, ${b}, ${
          (this._p.colorElementMaxDef * alpha) / this._p.colorElementMaxA
        })`;
      }
    }
  }

  private getRGBColorStr(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): string {
    let R, G, B, A;
    if (args.length === 1 || args.length === 2) {
      // the color is represented in RGB manner
      const [v, alpha] = args;

      let c;
      if (typeof v === "string") {
        if (v.startsWith("#")) {
          c = parseInt(v.substring(1), 16);
        } else {
          c = parseInt(v.substring(2), 16);
        }
      } else {
        c = v;
      }

      if (c < this._p.colorElementMaxDef + 1 && c >= 0) {
        R = c;
        G = c;
        B = c;
        if (alpha === undefined) {
          A = 1.0;
        } else {
          A = alpha / this._p.colorElementMaxA;
        }
      } else {
        R = this.red(c);
        G = this.green(c);
        B = this.blue(c);
        if (alpha === undefined) {
          A = this.alpha(c) / this._p.colorElementMaxDef;
        } else {
          A = alpha / this._p.colorElementMaxA;
        }
      }
    } else {
      const [v1, v2, v3, alpha] = args;
      R = (this._p.colorElementMaxDef * v1) / this._p.colorElementMax1;
      G = (this._p.colorElementMaxDef * v2) / this._p.colorElementMax2;
      B = (this._p.colorElementMaxDef * v3) / this._p.colorElementMax3;
      if (alpha === undefined) {
        A = 1.0;
      } else {
        A = alpha / this._p.colorElementMaxA;
      }
    }

    //const MASK = 0x00ff;
    //return `rgba(${(r >> 16) & MASK}, ${(g >> 8) & MASK}, ${b & MASK}, ${a})`;
    return `rgba(${R}, ${G}, ${B}, ${A})`;
  }
}

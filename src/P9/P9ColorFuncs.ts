import { Utils } from "../Utils";
import { P9InputFuncs } from "./P9InputFuncs";
import { P9MathFuncs } from "./P9MathFuncs";

export interface P9ColorFuncs extends P9InputFuncs {}
export class P9ColorFuncs extends P9MathFuncs {
  public readonly RGB = 0;
  public readonly HSB = 1;
  public readonly TOP = 101; // 101 in Processing
  public readonly BOTTOM = 102; // 102 in Processing
  public readonly BASELINE = 0; // 0 in Processing
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D | null;
  public width: number;
  public height: number;

  private _colorMode = this.RGB;
  private readonly _colorElementMaxDef = 255.0;
  private _colorElementMaxR = this._colorElementMaxDef;
  private _colorElementMaxG = this._colorElementMaxDef;
  private _colorElementMaxB = this._colorElementMaxDef;
  private _colorElementMaxA = this._colorElementMaxDef;
  private _doFill = true;
  private _currentFillColor = "#fff";
  private _doStroke = true;
  private _currentStrokeColor = "#000";

  private _initialBackground = "rgba(204, 204, 204, 1.0)";

  constructor(u: Utils, c: HTMLCanvasElement) {
    super(u);
    this.canvas = c;
    this.canvas.width = 100;
    this.canvas.height = 100;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext("2d");
    if (this.context === null) {
      this.utils.log("P9ColorFuncs: constructor(): Failed to get context.");
      return;
    }
  }

  public registerColorFuncs(): void {
    this.registerDataFuncs();
    this.registerMathFuncs();
    this.registerTransformFuncs();
    this.registerRenderingFuncs();
    this.registerLightsCameraFuncs();

    this.utils.p9FuncList = [
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
      "color",
      "green",
      "hue",
      "lerpColor",
      "red",
      "saturation",
    ];
    this.utils.p9ConstList = ["RGB", "HSB", "width", "height"];
  }

  protected get initialBackground(): string {
    return this._initialBackground;
  }

  protected get currentStrokeColor(): string {
    return this._currentStrokeColor;
  }

  protected get currentFillColor(): string {
    return this._currentFillColor;
  }

  protected get doStroke(): boolean {
    return this._doStroke;
  }

  protected get doFill(): boolean {
    return this._doFill;
  }

  public background(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): void {
    if (this._colorMode === this.RGB) {
      this.setBackground(this.getRGBColorStr(...args));
    } else {
      this.setBackground(this.getHSBColorStr(...args));
    }
  }

  public clear(): void {
    this.utils.log("clear() is not implemented yet.");
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
      this._colorMode = mode;
    } else if (args.length === 2) {
      const [mode, max] = args;
      this._colorMode = mode;
      this._colorElementMaxR = max;
      this._colorElementMaxG = max;
      this._colorElementMaxB = max;
      this._colorElementMaxA = max;
    } else if (args.length === 4) {
      const [mode, max1, max2, max3] = args;
      this._colorMode = mode;
      this._colorElementMaxR = max1;
      this._colorElementMaxG = max2;
      this._colorElementMaxB = max3;
    } else {
      const [mode, max1, max2, max3, maxA] = args;
      this._colorMode = mode;
      this._colorElementMaxR = max1;
      this._colorElementMaxG = max2;
      this._colorElementMaxB = max3;
      this._colorElementMaxA = maxA;
    }
  }

  public fill(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): void {
    if (this.context === null) {
      this.utils.error("fill(): context is null");
      return;
    }

    this._doFill = true;
    let str;
    if (this._colorMode === this.RGB) {
      str = this.getRGBColorStr(...args);
    } else {
      str = this.getHSBColorStr(...args);
    }
    this.context.fillStyle = str;
    this._currentFillColor = str;
  }

  public noFill(): void {
    this._doFill = false;
  }

  public noStroke(): void {
    this._doStroke = false;
  }

  public stroke(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): void {
    if (this.context === null) {
      this.utils.error("stroke(): context is null");
      return;
    }

    this._doStroke = true;
    let str;
    if (this._colorMode === this.RGB) {
      str = this.getRGBColorStr(...args);
    } else {
      str = this.getHSBColorStr(...args);
    }
    this.context.strokeStyle = str;
    this._currentStrokeColor = str;
  }

  public alpha(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = (parseInt(x.substring(1), 16) >> 24) & 0xff;
    } else {
      ret = (x >> 24) & 0xff;
    }
    return Math.floor(
      (this._colorElementMaxA * ret) / this._colorElementMaxDef
    );
  }

  public blue(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = parseInt(x.substring(1), 16) & 0xff;
    } else {
      ret = x & 0xff;
    }
    return Math.floor(
      (this._colorElementMaxB * ret) / this._colorElementMaxDef
    );
  }

  public brightness(x: number | string): number {
    let c;
    if (typeof x === "string") {
      c = parseInt(x.substring(1), 16);
    } else {
      c = x;
    }

    const R = ((c >> 16) & 0xff) / this._colorElementMaxDef;
    const G = ((c >> 8) & 0xff) / this._colorElementMaxDef;
    const B = (c & 0xff) / this._colorElementMaxDef;

    return this.max(R, G, B) * this._colorElementMaxB;
  }

  public color(
    ...args:
      | [gray: number]
      | [gray: number, alpha: number]
      | [v1: number, v2: number, v3: number]
      | [v1: number, v2: number, v3: number, alpha: number]
  ): number {
    /* this function always returs a value in RGB */
    let A, R, G, B;
    if (this._colorMode === this.RGB) {
      if (args.length === 1 || args.length === 2) {
        let [c, alpha] = args;
        c = (this._colorElementMaxDef * c) / this._colorElementMaxA;
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
        R = (this._colorElementMaxDef * v1) / this._colorElementMaxR;
        G = (this._colorElementMaxDef * v2) / this._colorElementMaxG;
        B = (this._colorElementMaxDef * v3) / this._colorElementMaxB;
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

  public green(x: number | string): number {
    let ret;
    if (typeof x === "string") {
      ret = (parseInt(x.substring(1), 16) >> 8) & 0xff;
    } else {
      ret = (x >> 8) & 0xff;
    }
    return Math.floor(
      (this._colorElementMaxG * ret) / this._colorElementMaxDef
    );
  }

  public hue(x: number | string): number {
    let c;
    if (typeof x === "string") {
      c = parseInt(x.substring(1), 16);
    } else {
      c = x;
    }

    const R = (c >> 16) & 0xff;
    const G = (c >> 8) & 0xff;
    const B = c & 0xff;

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
      if (this._colorMode === this.RGB) {
        const r1 = this.red(c1);
        const r2 = this.red(c2);
        const g1 = this.green(c1);
        const g2 = this.green(c2);
        const b1 = this.blue(c1);
        const b2 = this.blue(c2);
        const a1 = this.alpha(c1);
        const a2 = this.alpha(c2);
        return this.color(
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

    return Math.floor(
      (this._colorElementMaxR * ret) / this._colorElementMaxDef
    );
  }

  public saturation(x: number | string): number {
    let c;
    if (typeof x === "string") {
      c = parseInt(x.substring(1), 16);
    } else {
      c = x;
    }

    const R = (c >> 16) & 0xff;
    const G = (c >> 8) & 0xff;
    const B = c & 0xff;

    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    const ret = (max - min) / max;
    return this._colorElementMaxG * ret;
  }

  protected setBackground(str: string): void {
    if (this.context === null) {
      this.utils.error("P9ColorFuncs: setBackground(): Failed to get context.");
      return;
    }

    this.context.fillStyle = str;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = this._currentFillColor;
  }

  private hsb2rgb(
    hue: number,
    sat: number,
    bri: number
  ): [number, number, number] {
    let h = (360.0 * hue) / this._colorElementMaxR;
    if (h === 360) {
      h = 0;
    }
    const s = (1.0 * sat) / this._colorElementMaxG;
    const v = (1.0 * bri) / this._colorElementMaxB;

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

  private getHSBColorStr(
    ...args:
      | [c: number | string]
      | [c: number | string, alpha: number]
      | [hue: number, sat: number, bri: number]
      | [hue: number, sat: number, bri: number, alpha: number]
  ): string {
    if (args.length === 1 || args.length === 2) {
      // the color is represented in 8-bit * 4
      return this.getRGBColorStr(...args);
    } else {
      const [hue, sat, bri, alpha] = args;
      const [r, g, b] = this.hsb2rgb(hue, sat, bri);
      if (alpha === undefined) {
        return `rgba(${r}, ${g}, ${b}, 1.0)`;
      } else {
        return `rgba(${r}, ${g}, ${b}, ${
          (this._colorElementMaxDef * alpha) / this._colorElementMaxA
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
      const [v, alpha] = args;
      let rgb = true;

      let c;
      if (typeof v === "string") {
        // the color is represented in RGB manner
        if (v.startsWith("#")) {
          c = parseInt(v.substring(1), 16);
        } else {
          c = parseInt(v.substring(2), 16);
        }
      } else {
        c = v;
        // the color is represented in Gray scale manner
        if (c >= 0) {
          rgb = false;
        }
      }

      if (this._colorMode === this.HSB) {
        if (c > 0) {
          [R, G, B] = this.hsb2rgb((c >> 16) & 0xff, (c >> 8) & 0xff, c & 0xff);
        } else {
          R = (c >> 16) & 0xff;
          G = (c >> 8) & 0xff;
          B = c & 0xff;
        }
        if (alpha === undefined) {
          A = 1.0;
        } else {
          A = alpha / this._colorElementMaxA;
        }
      } else if (this._colorMode === this.RGB && rgb) {
        R = (c >> 16) & 0xff;
        G = (c >> 8) & 0xff;
        B = c & 0xff;
        if (alpha === undefined) {
          A = 1.0;
        } else {
          A = alpha / this._colorElementMaxA;
        }
      } else {
        R = Math.floor((this._colorElementMaxDef * c) / this._colorElementMaxR);
        G = R;
        B = R;
        if (alpha === undefined) {
          A = 1.0;
        } else {
          A = alpha / this._colorElementMaxA;
        }
      }
    } else {
      const [v1, v2, v3, alpha] = args;
      R = Math.floor((this._colorElementMaxDef * v1) / this._colorElementMaxR);
      G = Math.floor((this._colorElementMaxDef * v2) / this._colorElementMaxG);
      B = Math.floor((this._colorElementMaxDef * v3) / this._colorElementMaxB);
      if (alpha === undefined) {
        A = 1.0;
      } else {
        A = alpha / this._colorElementMaxA;
      }
    }
    return `rgba(${R}, ${G}, ${B}, ${A})`;
  }
}

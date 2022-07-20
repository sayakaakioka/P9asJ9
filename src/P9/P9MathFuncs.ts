import { Utils } from "../Utils";
import { P9 } from "../P9";

class SeedSettableRandom {
  private x: number;
  private y: number;
  private z: number;
  private w: number;

  constructor(private readonly seed: number) {
    this.x = 31415926535;
    this.y = 8979323846;
    this.z = 521288629;
    this.w = 2643383279;
  }

  public random(): number {
    let t;

    t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;

    const r = Math.abs((this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8))));
    return r / Math.pow(10, r.toString().length);
  }
}

export class P9MathFuncs {
  private randomGenerator: SeedSettableRandom | undefined;

  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "abs",
      "ceil",
      "constrain",
      "dist",
      "exp",
      "floor",
      "lerp",
      "log",
      "mag",
      "map",
      "max",
      "min",
      "norm",
      "pow",
      "round",
      "sq",
      "sqrt",
      "acos",
      "asin",
      "atan2",
      "atan",
      "cos",
      "degrees",
      "radians",
      "sin",
      "tan",
      "noiseDetail",
      "noiseSeed",
      "noise",
      "randomGaussian",
      "randomSeed",
      "random",
    ]);
  }

  public abs(x: number): number {
    return Math.abs(x);
  }

  public ceil(x: number): number {
    return Math.ceil(x);
  }

  public constrain(v: number, min: number, max: number): number {
    if (v < min) {
      return min;
    } else if (v > max) {
      return max;
    } else {
      return v;
    }
  }

  public dist(
    ...args:
      | [x1: number, y1: number, x2: number, y2: number]
      | [x1: number, y1: number, z1: number, x2: number, y2: number, z2: number]
  ): number {
    if (args.length === 4) {
      const [x1, y1, x2, y2] = args;
      return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    } else {
      const [x1, y1, z1, x2, y2, z2] = args;
      return Math.sqrt(
        (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1)
      );
    }
  }

  public exp(x: number): number {
    return Math.exp(x);
  }

  public floor(x: number): number {
    return Math.floor(x);
  }

  public lerp(start: number, stop: number, amt: number): number {
    return start + (stop - start) * amt;
  }

  public log(x: number): number {
    return Math.log(x);
  }

  public mag(
    ...args: [x: number, y: number] | [x: number, y: number, z: number]
  ): number {
    if (args.length == 2) {
      const [x, y] = args;
      return this.dist(0, 0, x, y);
    } else {
      const [x, y, z] = args;
      return this.dist(0, 0, 0, x, y, z);
    }
  }

  public map(
    v: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number {
    return x2 + (v * (y2 - x2)) / (y1 - x1);
  }

  public max(
    ...args:
      | [a: number, b: number]
      | [a: number, b: number, c: number]
      | [list: Array<number>]
  ): number {
    if (args.length === 2) {
      const [a, b] = args;
      return Math.max(a, b);
    } else if (args.length === 3) {
      const [a, b, c] = args;
      return Math.max(a, b, c);
    } else {
      const [l] = args;
      return Math.max(...l);
    }
  }

  public min(
    ...args:
      | [a: number, b: number]
      | [a: number, b: number, c: number]
      | [list: Array<number>]
  ): number {
    if (args.length === 2) {
      const [a, b] = args;
      return Math.min(a, b);
    } else if (args.length === 3) {
      const [a, b, c] = args;
      return Math.min(a, b, c);
    } else {
      const [l] = args;
      return Math.min(...l);
    }
  }

  public norm(v: number, start: number, stop: number): number {
    return this.map(v, start, stop, 0, 1);
  }

  public pow(a: number, b: number): number {
    return Math.pow(a, b);
  }

  public round(x: number): number {
    return Math.round(x);
  }

  public sq(x: number): number {
    return x * x;
  }

  public sqrt(x: number): number {
    return Math.sqrt(x);
  }

  public acos(x: number): number {
    return Math.acos(x);
  }

  public asin(x: number): number {
    return Math.asin(x);
  }

  public atan2(y: number, x: number): number {
    return Math.atan2(y, x);
  }

  public atan(x: number): number {
    return Math.atan(x);
  }

  public cos(x: number): number {
    return Math.cos(x);
  }

  public degrees(x: number): number {
    return (180 * x) / this._p.PI;
  }

  public radians(x: number): number {
    return (this._p.PI * x) / 180;
  }

  public sin(x: number): number {
    return Math.sin(x);
  }

  public tan(x: number): number {
    return Math.tan(x);
  }

  public noiseDetail(): void {
    Utils.log("noiseDetail() is not implemented yet.", this._p);
  }

  public noiseSeed(): void {
    Utils.log("noiseSeed() is not implemented yet.", this._p);
  }

  public noise(): void {
    Utils.log("noise() is not implemented yet.", this._p);
  }

  public randomGaussian(): void {
    Utils.log("randomGaussian() is not implemented yet.", this._p);
  }

  public randomSeed(s: number): void {
    this.randomGenerator = new SeedSettableRandom(s);
  }

  public random(...args: [low: number, high: number] | [high: number]): number {
    let r;

    if (this.randomGenerator === undefined) {
      r = Math.random();
    } else {
      r = this.randomGenerator.random();
    }

    if (args.length === 1) {
      const [high] = args;
      return r * high;
    } else {
      const [low, high] = args;
      return low + (high - low) * r;
    }
  }
}

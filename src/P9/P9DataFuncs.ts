import { P9 } from "../P9";

export class P9DataFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "binary",
      "boolean",
      "byte",
      "char",
      "float",
      "hex",
      "int",
      "str",
      "unbinary",
      "unhex",
      "join",
      "matchAll",
      "match",
      "nf",
      "nfc",
      "nfp",
      "nfs",
      "splitTokens",
      "split",
      "trim",
      "append",
      "arrayCopy",
      "concat",
      "expand",
      "reverse",
      "shorten",
      "sort",
      "splice",
      "subset",
    ]);
  }

  private convert(x: number | string, n: number, d?: number): string {
    let num;
    if (typeof x === "number") {
      num = x;
    } else {
      num = x.charCodeAt(0);
    }

    let ret;
    if (x >= 0) {
      ret = num.toString(n);
    } else {
      ret = (num >>> 0).toString(n);
    }

    if (d === undefined) {
      return ret;
    } else {
      return ret.substring(ret.length - d);
    }
  }

  public binary(x: number | string, d?: number): string {
    return this.convert(x, 2, d);
  }

  public boolean(x: number | string): boolean;
  public boolean(x: Array<number> | Array<string>): Array<boolean>;
  public boolean(x: any): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        return this.boolean(e);
      });
    } else if (typeof x === "number") {
      if (x === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      if (x === "true") {
        return true;
      } else {
        return false;
      }
    }
  }

  public byte(x: number | string | boolean): number;
  public byte(x: Array<number> | Array<string> | Array<boolean>): Array<number>;
  public byte(x: any): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        return this.byte(e);
      });
    } else if (typeof x === "number") {
      const val = x % 256;
      if (val < 128) {
        return val;
      } else {
        return val - 256;
      }
    } else if (typeof x === "string") {
      return x.charCodeAt(0);
    } else {
      return Number(x);
    }
  }

  public char(x: number | string | boolean): string;
  public char(x: Array<number> | Array<string> | Array<boolean>): Array<string>;
  public char(x: any): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        return this.char(e);
      });
    } else if (typeof x === "number") {
      return String.fromCharCode(x);
    } else if (typeof x === "string") {
      return x.charAt(0);
    } else {
      return String.fromCharCode(Number(x));
    }
  }

  public float(x: number | string): number;
  public float(x: Array<number> | Array<string>): Array<number>;
  public float(x: any): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        this.float(e);
      });
    } else if (typeof x === "number") {
      return x + 0.0;
    } else {
      return Number(x);
    }
  }

  public hex(x: number | string, d?: number): string {
    if (typeof x === "string" && x.startsWith("#")) {
      return this.convert(parseInt(`ff${x.substring(1)}`, 16), 16, d);
    } else {
      return this.convert(x, 16, d);
    }
  }

  public int(x: string | number | boolean): number;
  public int(x: Array<string> | Array<number> | Array<boolean>): Array<number>;
  public int(x: any): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        return this.int(e);
      });
    } else if (typeof x === "string") {
      if (Number.isFinite(x)) {
        return Math.round(Number(x));
      } else if (Number.isInteger(x)) {
        return Number(x);
      } else {
        return x.charCodeAt(0);
      }
    } else if (typeof x === "number") {
      return Math.floor(x);
    } else {
      return Number(x);
    }
  }

  public str(x: string | boolean | number): string;
  public str(x: Array<string> | Array<boolean> | Array<number>): Array<string>;
  public str(x: any): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        this.str(e);
      });
    } else if (typeof x === "string") {
      return x;
    } else {
      return String(x);
    }
  }

  public unbinary(x: string): number {
    return parseInt(x, 2);
  }

  public unhex(x: string): number {
    return parseInt(x, 16);
  }

  public join(list: Array<string>, separator?: string): string {
    if (separator !== undefined) {
      return list.join(separator);
    } else {
      return list.join();
    }
  }

  public matchAll(str: string, regexp: string): string[][] {
    return [...str.matchAll(RegExp(regexp, "g"))];
  }

  public match(str: string, regexp: string): Array<string> | null {
    return str.match(regexp);
  }

  public nf(
    ...args:
      | [x: number]
      | [x: number, digits: number]
      | [x: number, left: number, right: number]
      | [x: Array<number>]
      | [x: Array<number>, digits: number]
      | [x: Array<number>, left: number, right: number]
  ): Array<string> {
    const [x, left, right] = args;
    if (typeof x === "number") {
      if (left !== undefined) {
        if (right === undefined) {
          return new Array<string>(x.toString().padStart(left, "0"));
        } else {
          return new Array<string>(
            x.toFixed(right).padStart(left + right + 1, "0")
          );
        }
      } else {
        return new Array<string>(x);
      }
    } else {
      return x.flatMap((e) => {
        if (left !== undefined) {
          if (right === undefined) {
            return this.nf(e, left);
          } else {
            return this.nf(e, left, right);
          }
        } else {
          return this.nf(e);
        }
      });
    }
  }

  public nfc(
    ...args:
      | [x: number]
      | [x: number, right: number]
      | [x: Array<number>]
      | [x: Array<number>, right: number]
  ): Array<string> {
    const [x, right] = args;
    if (typeof x === "number") {
      if (right !== undefined) {
        return new Array<string>(x.toFixed(right).toLocaleString());
      } else {
        return new Array<string>(x.toLocaleString());
      }
    } else {
      return x.flatMap((e) => {
        if (right !== undefined) {
          return this.nfc(e, right);
        } else {
          return this.nfc(e);
        }
      });
    }
  }

  public nfp(x: number, left?: number, right?: number): string;
  public nfp(x: Array<number>, left?: number, right?: number): Array<string>;
  public nfp(x: any, left?: number, right?: number): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        return this.nfp(e, left, right);
      });
    } else {
      if (x >= 0) {
        if (left !== undefined) {
          if (right !== undefined) {
            return `+${this.nf(x, left, right)}`;
          } else {
            return `+${this.nf(x, left)}`;
          }
        } else {
          return `+${this.nf(x)}`;
        }
      } else {
        if (left !== undefined) {
          if (right !== undefined) {
            return `-${this.nf(-x, left, right)}`;
          } else {
            return `-${this.nf(-x, left)}`;
          }
        } else {
          return `-${this.nf(-x)}`;
        }
      }
    }
  }

  public nfs(x: number, left?: number, right?: number): string;
  public nfs(x: Array<number>, left?: number, right?: number): Array<string>;
  public nfs(x: any, left?: number, right?: number): any {
    if (Array.isArray(x)) {
      return x.map((e) => {
        return ` ${this.nfp(e, left, right).slice(1)}`;
      });
    } else {
      return ` ${this.nfp(x, left, right).slice(1)}`;
    }
  }

  public splitTokens(str: string, delim?: string): Array<string> {
    if (delim === undefined) {
      return str.split(" ");
    } else {
      return str.split(new RegExp(`[${delim}]+`)).filter(function (s) {
        return s !== "";
      });
    }
  }

  public split(str: string, delim: string): Array<string> {
    return str.split(delim);
  }

  public trim(x: string): string;
  public trim(x: Array<string>): Array<string>;
  public trim(x: any): any {
    if (Array.isArray(x)) {
      return x.map(function (e) {
        return e.trim();
      });
    } else {
      return x.trim();
    }
  }

  public append(l: Array<any>, v: any): any {
    l.push(v);
    return l;
  }

  public arrayCopy(
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
    if (args.length === 2) {
      const [src, dst] = args;
      this.arrayCopy(src, 0, dst, 0, src.length);
    } else if (args.length === 3) {
      const [src, dst, length] = args;
      this.arrayCopy(src, 0, dst, 0, length);
    } else {
      const [src, srcPos, dst, dstPos, length] = args;
      src.map(function (e, idx) {
        if (idx >= srcPos && idx < srcPos + length) {
          dst[dstPos + idx - srcPos] = e;
        }
      });
    }
  }

  public concat(a: Array<any>, b: Array<any>): Array<any> {
    return a.concat(b);
  }

  public expand(l: Array<any>, newSize?: number): Array<any> {
    if (newSize === undefined) {
      newSize = 2 * l.length;
    }
    l.length = newSize;
    return l;
  }

  public reverse(l: Array<any>): Array<any> {
    return l.reverse();
  }

  public shorten(l: Array<any>): Array<any> {
    return l.slice(0, l.length - 1);
  }

  public sort(l: Array<any>, count?: number): Array<any> {
    if (count === undefined) {
      return l.slice().sort();
    } else {
      return l.slice(0, count).sort().concat(l.slice(count, l.length));
    }
  }

  public splice(
    l: Array<any>,
    v: Array<any> | boolean | string | number | object,
    idx: number
  ): Array<any> {
    return l.slice(0, idx).concat(v).concat(l.slice(idx, l.length));
  }

  public subset(l: Array<any>, start: number, count?: number): Array<any> {
    if (count === undefined) {
      return l.slice(start, l.length);
    } else {
      return l.slice(start, start + count);
    }
  }
}

import { P9 } from "P9";

export class Utils {
  public static error(str: string, p: P9): void {
    console.error(`[${p.id}] ${str}`);
  }

  public static log(str: string, p: P9): void {
    console.log(`[${p.id}] ${str}`);
  }

  public static wrap(
    lines: Array<string> | undefined,
    rest: Array<string>
  ): Array<string> {
    let ret;
    if (lines !== undefined) {
      ret = lines;
      const idx = ret.length - 1;
      ret[idx] = `${ret[idx]} {`;
    } else {
      ret = new Array<string>("{");
    }

    ret = ret.concat(rest);
    ret.push("}");
    return ret;
  }
}

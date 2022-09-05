import { P9Expression } from "transpiler/P9Expression";

export class Utils {
  private _p9FuncList = new Array<string>();
  private _p9ConstList = new Array<string>();

  constructor(private readonly _id: string) {}

  public get id(): string {
    return this._id;
  }

  public get p9FuncList(): Array<string> {
    return this._p9FuncList;
  }

  public set p9FuncList(list: Array<string>) {
    this._p9FuncList = this._p9FuncList.concat(list);
  }

  public get p9ConstList(): Array<string> {
    return this._p9ConstList;
  }

  public set p9ConstList(list: Array<string>) {
    this._p9ConstList = this._p9ConstList.concat(list);
  }

  public error(str: string): void {
    console.error(`[${this._id}] ${str}`);
  }

  public log(str: string): void {
    console.log(`[${this._id}] ${str}`);
  }

  public wrap(l: Array<string> | undefined, r: Array<string>): Array<string> {
    let ret;
    if (l !== undefined) {
      ret = l;
      const idx = ret.length - 1;
      ret[idx] = `${ret[idx]} {`;
    } else {
      ret = new Array<string>("{");
    }

    ret = ret.concat(r);
    ret.push("}");
    return ret;
  }

  public buildArrayConstructor(
    name: string,
    l: Array<P9Expression>,
    inner: string
    //length: Array<P9Expression>
  ): string {
    if (l.length === 1) {
      const length = l[l.length - 1];
      if (inner === "") {
        return `${name} = []; ${name}.length = ${length}`;
      } else {
        return `${name} = []; ${name}.length = ${length}; ${inner}`;
      }
    }

    let str = `${name}`;
    for (let i = 0; i < l.length - 1; i++) {
      str = `${str}[c${i}]`;
    }
    const varname = `c${l.length - 2}`;
    const loopTail = l[l.length - 2];
    const length = l[l.length - 1];
    str = `for(let ${varname}=0; ${varname}<${loopTail}; ${varname}++){${str} = []; ${str}.length = ${length}; ${inner}}`;
    return this.buildArrayConstructor(name, l.slice(0, -1), str);
  }
}

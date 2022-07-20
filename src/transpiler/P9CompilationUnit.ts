import { P9 } from "P9";
import { P9Elements } from "./P9Elements";

export class P9CompilationUnit implements P9Elements {
  private _lines = new Array<string>();

  constructor(private readonly _p: P9) {}

  public push(lines: Array<string> | string): void {
    if (typeof lines === "string") {
      this._lines.push(lines);
    } else {
      this._lines = this._lines.concat(lines);
    }
  }

  public unshift(lines: Array<string> | string): void {
    if (typeof lines === "string") {
      this._lines.unshift(lines);
    } else {
      this._lines = lines.concat(this._lines);
    }
  }

  public getLines(): Array<string> {
    let lines = new Array<string>(`\nfunction transpiledP9 ($p9obj) {`);
    //let lines = new Array<string>(`\n\t{`);
    lines = lines.concat(
      this._lines.map(function (e) {
        return `\t${e}`;
      })
    );
    lines.push(`}\n\t`);

    return lines;
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

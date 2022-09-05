import { Utils } from "../Utils";
import { P9Elements } from "./P9Elements";
import { P9Statement } from "./P9Statement";
import { P9VarDecl } from "./P9Variable";

export class P9Block implements P9Elements {
  private _blockStatementList = Array<P9BlockStatement>();

  constructor(private readonly _u: Utils) {}

  public push(obj: P9BlockStatement) {
    this._blockStatementList.push(obj);
  }

  public getLines(): Array<string> {
    let lines = this._blockStatementList.flatMap(function (e) {
      return e.getLines().map(function (e) {
        return `\t${e}`;
      });
    });

    return lines;
  }

  public toString(): string {
    return `${this.getLines().join("\n")}`;
  }
}

export class P9BlockStatement implements P9Elements {
  private _obj: P9VarDecl | P9Statement | undefined;

  constructor(private readonly _u: Utils) {}

  public set statement(obj: P9Statement) {
    this._obj = obj;
  }

  public set varDecl(obj: P9VarDecl) {
    this._obj = obj;
  }

  public getLines(): Array<string> {
    if (this._obj instanceof P9Statement || this._obj instanceof P9VarDecl) {
      return this._obj.getLines();
    } else {
      this._u.error(
        "P9BlockStatement: getLines(): BlockStatement expects varDecl or statement."
      );
      return new Array<string>();
    }
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

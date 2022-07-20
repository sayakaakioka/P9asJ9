import { P9 } from "P9";
import { Utils } from "../Utils";
import { P9Elements } from "./P9Elements";
import { P9Type, P9VariableDeclaratorId } from "./P9Variable";

export class P9FormalParameter implements P9Elements {
  private _modifierList = new Array<string>();
  private _type: P9Type | undefined;
  private _variableDeclaratorId: P9VariableDeclaratorId | undefined;

  constructor(private readonly _p: P9) {}

  public push(str: string): void {
    this._modifierList.push(str);
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public set variableDeclaratorId(obj: P9VariableDeclaratorId) {
    this._variableDeclaratorId = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._variableDeclaratorId !== undefined) {
      /*
      if (this._modifierList.includes("final")) {
        return `const ${this._variableDeclaratorId.toString()}`;
      } else {
        return `let ${this._variableDeclaratorId.toString()}`;
      }
      */
      return `${this._variableDeclaratorId.toString()}`;
    }

    Utils.error(
      "P9FormalParameter: toString(): FormalParameter expects variableDeclaratorId.",
      this._p
    );
    return "";
  }
}

export class P9FormalParameters implements P9Elements {
  private _formalParameterList: P9FormalParameterList | undefined;

  constructor(private readonly _p: P9) {}

  public set formalParameterList(obj: P9FormalParameterList) {
    this._formalParameterList = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._formalParameterList !== undefined) {
      return `(${this._formalParameterList.toString()})`;
    } else {
      return `()`;
    }
  }
}

export class P9FormalParameterList implements P9Elements {
  private _list = new Array<P9FormalParameter>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9FormalParameter): void {
    this._list.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return this._list
      .map(function (e) {
        return e.toString();
      })
      .join(", ");
  }
}

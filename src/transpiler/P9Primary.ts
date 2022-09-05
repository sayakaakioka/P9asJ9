import { PrimaryContext } from "P9Parser/ProcessingParser";
import { Utils } from "Utils";
import { P9Elements } from "./P9Elements";
import {
  P9Expression,
  P9NonWildcardTypeArguments,
  P9ExplicitGenericInvocationSuffix,
} from "./P9Expression";
import { P9TypeOrVoid } from "./P9Variable";

export class P9Primary implements P9Elements {
  private _expression: P9Expression | undefined;
  private _literal: string | undefined;
  private _typeOrVoid: P9TypeOrVoid | undefined;
  private _nonWildcardTypeArguments: P9NonWildcardTypeArguments | undefined;
  private _explicitGenericInvocationSuffix:
    | P9ExplicitGenericInvocationSuffix
    | undefined;
  private _classVarList: Array<string> | undefined;

  constructor(
    private readonly _context: PrimaryContext,
    private readonly _u: Utils
  ) {}

  public set expression(obj: P9Expression) {
    this._expression = obj;
  }

  public set literal(str: string) {
    if (/^#[0-9a-fA-F]{6}$/.test(str)) {
      this._literal = `"${str}"`;
    } else if (/^[-]?[0-9]+[\.]?[0-9]*[lLfFdD]$/.test(str)) {
      this._literal = str.substring(0, str.length - 1);
    } else {
      this._literal = str;
    }
  }

  public set typeOrVoid(obj: P9TypeOrVoid) {
    this._typeOrVoid = obj;
  }

  public set nonWildcardTypeArguments(obj: P9NonWildcardTypeArguments) {
    this._nonWildcardTypeArguments = obj;
  }

  public set explicitGenericInvocationSuffix(
    obj: P9ExplicitGenericInvocationSuffix
  ) {
    this._explicitGenericInvocationSuffix = obj;
  }

  public set classVarList(list: Array<string>) {
    this._classVarList = list.slice(0, list.length);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._expression !== undefined) {
      return `(${this._expression.toString()})`;
    }

    if (this._context.THIS()) {
      return "this";
    }

    if (this._context.SUPER()) {
      return "super";
    }

    if (this._literal !== undefined) {
      return this._literal;
    }

    if (this._context._id !== undefined) {
      const str = `${this._context._id.text}`;

      if (this._u.p9ConstList.includes(str)) {
        if (str === "mousePressed" || str === "keyPressed") {
          return `$p9obj.${str}Var`;
        } else if (str === "frameRate") {
          return `$p9obj.currentFrameRate`;
        } else {
          return `$p9obj.${str}`;
        }
      } else if (
        this._classVarList !== undefined &&
        this._classVarList.includes(str)
      ) {
        return `this.${str}`;
      } else {
        return str;
      }
    }

    if (this._context.CLASS()) {
      if (this._typeOrVoid !== undefined) {
        return `${this._typeOrVoid.toString()}.class`;
      }
      this._u.error("P9Primary: toString(): class expects typeOrVoid.");
      return "";
    }

    if (this._nonWildcardTypeArguments !== undefined) {
      if (this._explicitGenericInvocationSuffix !== undefined) {
        return `${this._nonWildcardTypeArguments.toString()} ${this._explicitGenericInvocationSuffix.toString()}`;
      }
      this._u.error(
        "P9Primary: toString(): nonWildcardTypeArguments expects explicitGenericInvocationSuffix."
      );
      return "";
    }

    this._u.error("P9Primary: toString(): Unknown grammar.");
    return "";
  }
}

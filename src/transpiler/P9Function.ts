import { P9 } from "P9";
import {
  FuncCallContext,
  FuncDeclContext,
  MemberDeclarationContext,
} from "../P9Parser/ProcessingParser";
import { Utils } from "../Utils";
import { P9Block } from "./P9Block";
import { P9QualifiedNameList } from "./P9Class";
import { P9Elements } from "./P9Elements";
import { P9ExpressionList } from "./P9Expression";
import { P9FormalParameters } from "./P9FormalParameter";
import { P9TypeOrVoid } from "./P9Variable";

export class P9FuncDecl implements P9Elements {
  private _modifierList = new Array<string>();
  private _typeOrVoid: P9TypeOrVoid | undefined;
  private _formalParameters: P9FormalParameters | undefined;
  private _qualifedNameList: P9QualifiedNameList | undefined;
  private _block: P9Block | undefined;

  constructor(
    private readonly _context: FuncDeclContext,
    private readonly _p: P9
  ) {}

  public push(str: string): void {
    this._modifierList.push(str);
  }

  public set typeOrVoid(obj: P9TypeOrVoid) {
    this._typeOrVoid = obj;
  }

  public set formalParameters(obj: P9FormalParameters) {
    this._formalParameters = obj;
  }

  public set qualifiedNameList(obj: P9QualifiedNameList) {
    this._qualifedNameList = obj;
  }

  public set block(obj: P9Block) {
    this._block = obj;
  }

  public getLines(): Array<string> {
    const id = this._context._funcId.text;
    if (id !== undefined) {
      let lines = new Array<string>();
      if (this._context.parent instanceof MemberDeclarationContext) {
        if (this._formalParameters === undefined) {
          lines.push(`${id}()`);
        } else {
          lines.push(`${id}${this._formalParameters.toString()}`);
        }
      } else {
        if (this._formalParameters === undefined) {
          lines.push(`function ${id}()`);
        } else {
          lines.push(`function ${id}${this._formalParameters.toString()}`);
        }
      }

      if (this._context.THROWS()) {
        if (this._qualifedNameList !== undefined) {
          lines = lines.concat(`throws ${this._qualifedNameList.getLines()}`);
        } else {
          Utils.error(
            "P9FuncDecl: getLines(): funcDecl expects qualifiedNameList.",
            this._p
          );
        }
      }

      if (this._block !== undefined) {
        lines = Utils.wrap(lines, this._block.getLines());
      } else {
        lines.push(";");
      }

      if (!(this._context.parent instanceof MemberDeclarationContext)) {
        lines.push(`$p9obj.${id} = ${id};`);
        //lines.push(`${id} = ${id}.bind ($p9obj);\n`);
      }

      return lines;
    }

    Utils.error("P9FuncDecl: getLines(): funcDecl expects funcId.", this._p);
    return new Array<string>("");
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9FuncCall implements P9Elements {
  private _expressionList: P9ExpressionList | undefined;

  constructor(
    private readonly _context: FuncCallContext,
    private readonly _p: P9
  ) {}

  public set expressionList(obj: P9ExpressionList) {
    this._expressionList = obj;
  }

  public toString(): string {
    let str = "(";
    if (this._expressionList !== undefined) {
      str = str.concat(this._expressionList.toString());
    }
    str = str.concat(")");

    if (this._context._id !== undefined) {
      if (this._p.p9FuncList.includes(`${this._context._id.text}`)) {
        return `$p9obj.${this._context._id.text} ${str}`;
      } else {
        return `${this._context._id.text} ${str}`;
      }
    }

    if (this._context.THIS()) {
      return `this${str}`;
    }

    if (this._context.SUPER()) {
      return `super${str}`;
    }

    if (this._context.BOOLEAN()) {
      return `$p9obj.boolean${str}`;
    }

    if (this._context.BYTE()) {
      return `$p9obj.byte${str}`;
    }

    if (this._context.CHAR()) {
      return `$p9obj.char${str}`;
    }

    if (this._context.FLOAT()) {
      return `$p9obj.float${str}`;
    }

    if (this._context.INT()) {
      return `$p9obj.int${str}`;
    }

    if (this._context.COLOR()) {
      return `$p9obj.color${str}`;
    }

    Utils.error("P9FuncCall: toString(): Unknown grammar.", this._p);
    return "";
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }
}

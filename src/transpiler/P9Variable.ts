import { P9 } from "P9";
import {
  TypeContext,
  TypeOrVoidContext,
  VarDeclContext,
  VariableDeclaratorIdContext,
} from "../P9Parser/ProcessingParser";
import { Utils } from "../Utils";
import { P9ClassType } from "./P9Class";
import { P9Elements } from "./P9Elements";
import { P9Expression } from "./P9Expression";

export class P9Type implements P9Elements {
  private _type: string | undefined;

  constructor(
    private readonly _context: TypeContext,
    private readonly _p: P9
  ) {}

  public set type(str: string | P9ClassType) {
    if (str instanceof P9ClassType) {
      this._type = str.toString();
    } else {
      this._type = str;
    }
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._type !== undefined) {
      let str = this._type;
      this._context.LBRACK().map(function () {
        str = str.concat("[]");
      });
      return str;
    }

    Utils.error(
      "P9Type: toString(): type expects classTypes or primitiveTypes.",
      this._p
    );
    return "";
  }
}

export class P9TypeOrVoid implements P9Elements {
  private _type: P9Type | undefined;

  constructor(
    private readonly _context: TypeOrVoidContext,
    private readonly _p: P9
  ) {}

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context.VOID()) {
      return "void";
    }

    if (this._type !== undefined) {
      return this._type.toString();
    }

    Utils.error(
      "P9TypeOrVoid: toString(): typeOrVoid expects type or void.",
      this._p
    );
    return "";
  }
}

export class P9VarDecl implements P9Elements {
  private _modifierList = new Array<string>();
  private _type: P9Type | undefined;
  private _variableDeclarators: P9VariableDeclarators | undefined;
  private _classVarList: Array<string> | undefined;

  constructor(
    private readonly _context: VarDeclContext,
    private readonly _p: P9
  ) {}

  public push(str: string): void {
    this._modifierList.push(str);
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public set variableDeclarators(obj: P9VariableDeclarators) {
    this._variableDeclarators = obj;
  }

  public set classVarList(list: Array<string>) {
    this._classVarList = list.slice(0, list.length);
  }

  public getList(): Array<string> {
    if (this._variableDeclarators !== undefined) {
      return this._variableDeclarators.getList();
    }
    return new Array<string>();
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._variableDeclarators !== undefined) {
      if (this._classVarList !== undefined) {
        return `${this._variableDeclarators.list
          .map(function (e) {
            return e.toString();
          })
          .join("; ")};`;
      } else if (this._modifierList.includes("final")) {
        return `const ${this._variableDeclarators.toString()};`;
      } else {
        return `let ${this._variableDeclarators.toString()};`;
      }
    }

    Utils.error(
      "P9VariableDeclarators: toString(): VarDecl expects variableDeclarators.",
      this._p
    );
    return "";
  }
}

export class P9VariableDeclarators implements P9Elements {
  private _list = new Array<P9VariableDeclarator>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9VariableDeclarator): void {
    this._list.push(obj);
  }

  public get list(): Array<P9VariableDeclarator> {
    return this._list;
  }

  public getList(): Array<string> {
    return this._list.map(function (e) {
      return e.getId();
    });
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return `${this._list
      .map(function (e) {
        return e.toString();
      })
      .join(", ")}`;
  }
}

export class P9VariableDeclarator implements P9Elements {
  private _id: P9VariableDeclaratorId | undefined;
  private _variableInitializer: P9VariableInitializer | undefined;

  constructor(private readonly _p: P9) {}

  public set variableDeclaratorId(obj: P9VariableDeclaratorId) {
    this._id = obj;
  }

  public getId(): string {
    if (this._id !== undefined) {
      return this._id.toString();
    } else {
      return "";
    }
  }

  public set variableInitializer(obj: P9VariableInitializer) {
    this._variableInitializer = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._id !== undefined) {
      if (this._variableInitializer !== undefined) {
        return `${this._id.toString()} = ${this._variableInitializer.toString()}`;
      }
      return this._id.toString();
    }

    Utils.error(
      "P9VariableDeclarator: toString(): VariableDeclarator expects ID.",
      this._p
    );
    return "";
  }
}

export class P9VariableDeclaratorId implements P9Elements {
  constructor(
    private readonly _context: VariableDeclaratorIdContext,
    private readonly _p: P9
  ) {}

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context._id.text !== undefined) {
      return this._context._id.text;
    }

    Utils.error(
      "P9VariableDeclaratorId: toString(): VariableDeclaratorId expects ID.",
      this._p
    );
    return "";
  }
}

export class P9VariableInitializer implements P9Elements {
  private _initializer: P9ArrayInitializer | P9Expression | undefined;

  constructor(private readonly _p: P9) {}

  public set initializer(obj: P9ArrayInitializer | P9Expression) {
    this._initializer = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._initializer !== undefined) {
      return this._initializer.toString();
    }
    Utils.error(
      "P9VariableInitializer: toString(): VariableInitializer expects arrayInitializer or expression.",
      this._p
    );
    return "";
  }
}

export class P9ArrayInitializer implements P9Elements {
  private _list = new Array<P9VariableInitializer>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9VariableInitializer): void {
    this._list.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return `[${this._list
      .map(function (e) {
        return `${e.toString()}`;
      })
      .join(", ")}]`;
  }
}

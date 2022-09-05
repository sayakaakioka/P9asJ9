import {
  CreatedNameUnitContext,
  TypeArgumentsOrDiamondContext,
} from "P9Parser/ProcessingParser";
import { Utils } from "Utils";
import { P9ClassCreatorRest, P9TypeArguments } from "./P9Class";
import { P9Elements } from "./P9Elements";
import { P9NonWildcardTypeArguments, P9Expression } from "./P9Expression";
import { P9ArrayInitializer } from "./P9Variable";

export class P9Creator implements P9Elements {
  private _nonWildcardTypeArguments: P9NonWildcardTypeArguments | undefined;
  private _createdName: P9CreatedName | undefined;
  private _classCreatorRest: P9ClassCreatorRest | undefined;
  private _arrayCreatorRest: P9ArrayCreatorRest | undefined;
  private _isArrayConstructor = false;

  constructor(private readonly _u: Utils) {}

  public set nonWildcardTypeArguments(obj: P9NonWildcardTypeArguments) {
    this._nonWildcardTypeArguments = obj;
  }

  public set createdName(obj: P9CreatedName) {
    this._createdName = obj;
  }

  public set classCreatorRest(obj: P9ClassCreatorRest) {
    this._classCreatorRest = obj;
  }

  public set arrayCreatorRest(obj: P9ArrayCreatorRest) {
    this._arrayCreatorRest = obj;
    this._isArrayConstructor = obj.isArrayConstructor;
  }

  public get isArrayConstructor() {
    return this._isArrayConstructor;
  }

  public get expressionList() {
    if (this._arrayCreatorRest !== undefined) {
      return this._arrayCreatorRest.expressionList;
    } else {
      return new Array<P9Expression>();
    }
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (
      this._nonWildcardTypeArguments !== undefined &&
      this._createdName !== undefined &&
      this._classCreatorRest !== undefined
    ) {
      return `${this._nonWildcardTypeArguments.toString()} ${this._createdName.toString()} ${this._classCreatorRest.toString()}`;
    }

    if (this._arrayCreatorRest !== undefined) {
      return `${this._arrayCreatorRest.toString()}`;
    }

    if (
      this._createdName !== undefined &&
      this._classCreatorRest !== undefined
    ) {
      return `${this._createdName.toString()} ${this._classCreatorRest.toString()}`;
    }

    this._u.error("P9Creator: toString(): Unknown grammar.");
    return "";
  }
}

export class P9CreatedName implements P9Elements {
  private _createdNameUnitList = new Array<P9CreatedNameUnit>();
  private _primitiveType: string | undefined;

  constructor(private readonly _u: Utils) {}

  public push(obj: P9CreatedNameUnit): void {
    this._createdNameUnitList.push(obj);
  }

  public set primitiveType(str: string) {
    this._primitiveType = str;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._primitiveType !== undefined) {
      return this._primitiveType;
    }

    return this._createdNameUnitList
      .map(function (e) {
        return e.toString();
      })
      .join(".");
  }
}

export class P9CreatedNameUnit implements P9Elements {
  private _typeArgumentsOrDiamond: P9TypeArgumentsOrDiamond | undefined;

  constructor(
    private readonly _context: CreatedNameUnitContext,
    private readonly _u: Utils
  ) {}

  public set typeArgumentsOrDiamond(obj: P9TypeArgumentsOrDiamond) {
    this._typeArgumentsOrDiamond = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context._id !== undefined) {
      if (this._typeArgumentsOrDiamond !== undefined) {
        return `${
          this._context._id.text
        } ${this._typeArgumentsOrDiamond.toString()}`;
      } else {
        return `${this._context._id.text}`;
      }
    }

    this._u.error("P9CreatedNameUnit: toString(): Unknown grammar.");
    return "";
  }
}

export class P9TypeArgumentsOrDiamond implements P9Elements {
  private _typeArguments: P9TypeArguments | undefined;

  constructor(
    private readonly _context: TypeArgumentsOrDiamondContext,
    private readonly _u: Utils
  ) {}

  public set typeArguments(obj: P9TypeArguments) {
    this._typeArguments = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._typeArguments !== undefined) {
      return this._typeArguments.toString();
    }

    if (this._context.GT() && this._context.LT()) {
      return "<>";
    }

    this._u.error("P9TypeArgumentsOrDiamond: toString(): Unknown grammar.");
    return "";
  }
}

export class P9ArrayCreatorRest implements P9Elements {
  private _expressionList = new Array<P9Expression>();
  private _arrayInitializer: P9ArrayInitializer | undefined;
  private _isArrayConstructor = false;

  constructor(private readonly _u: Utils) {}

  public push(expression: P9Expression): void {
    this._expressionList.push(expression);
    this._isArrayConstructor = true;
  }

  public set arrayInitializer(initializer: P9ArrayInitializer) {
    this._arrayInitializer = initializer;
  }

  public get isArrayConstructor() {
    return this._isArrayConstructor;
  }

  public get expressionList() {
    return this._expressionList;
  }

  public toString(): string {
    if (this._arrayInitializer !== undefined) {
      return this._arrayInitializer.toString();
    } else {
      return "";
    }
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }
}

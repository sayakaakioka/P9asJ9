import { P9Elements } from "./P9Elements";
import { P9FuncCall } from "./P9Function";
import {
  CreatedNameUnitContext,
  ExplicitGenericInvocationSuffixContext,
  ExpressionContext,
  PrimaryContext,
  SuperSuffixContext,
  TypeArgumentsOrDiamondContext,
} from "../P9Parser/ProcessingParser";
import { P9ArrayInitializer, P9Type, P9TypeOrVoid } from "./P9Variable";
import {
  P9ClassCreatorRest,
  P9TypeArguments,
  P9TypeBound,
  P9TypeList,
} from "./P9Class";
import { P9 } from "P9";
import { Utils } from "../Utils";

export class P9Expression implements P9Elements {
  private _primary: P9Primary | undefined;
  private _expression: P9Expression | undefined;
  private _expression2: P9Expression | undefined;
  private _expression3: P9Expression | undefined;
  private _funcCall: P9FuncCall | undefined;
  private _superSuffix: P9SuperSuffix | undefined;
  private _nonWildcardTypeArguments: P9NonWildcardTypeArguments | undefined;
  private _explicitGenericInvocationSuffix:
    | P9ExplicitGenericInvocationSuffix
    | undefined;
  private _creator: P9Creator | undefined;
  private _typeBound: P9TypeBound | undefined;
  private _type: P9Type | undefined;
  private _expressionList: P9ExpressionList | undefined;

  constructor(
    private readonly _context: ExpressionContext,
    private readonly _p: P9
  ) {}

  public set primary(obj: P9Primary) {
    this._primary = obj;
  }

  public push(expression: P9Expression): void {
    if (this._expression === undefined) {
      this._expression = expression;
    } else if (this._expression2 === undefined) {
      this._expression2 = expression;
    } else {
      this._expression3 = expression;
    }
  }

  public set funcCall(obj: P9FuncCall) {
    this._funcCall = obj;
  }

  public set superSuffix(obj: P9SuperSuffix) {
    this._superSuffix = obj;
  }

  public set nonWildcardTypeArguments(obj: P9NonWildcardTypeArguments) {
    this._nonWildcardTypeArguments = obj;
  }

  public set explicitGenericInvocationSuffix(
    obj: P9ExplicitGenericInvocationSuffix
  ) {
    this._explicitGenericInvocationSuffix = obj;
  }

  public set creator(obj: P9Creator) {
    this._creator = obj;
  }

  public set typeBound(obj: P9TypeBound) {
    this._typeBound = obj;
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public set expressionList(list: P9ExpressionList) {
    this._expressionList = list;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._primary !== undefined) {
      return this._primary.toString();
    }

    if (this._context._bop !== undefined) {
      if (this._context._bop.text === "?") {
        if (
          this._expression !== undefined &&
          this._expression2 !== undefined &&
          this._expression3 !== undefined
        ) {
          return `${this._expression.toString()} ? ${this._expression2.toString()} : ${this._expression3.toString()}`;
        }
        Utils.error(
          'P9Expression: toString(): "?" expects expressions.',
          this._p
        );
        return "";
      }

      if (this._context._bop.text === ".") {
        if (this._expression !== undefined) {
          if (this._context._id !== undefined) {
            return `${this._expression.toString()}.${this._context._id.text}`;
          }

          if (this._funcCall !== undefined) {
            return `${this._expression.toString()}.${this._funcCall.toString()}`;
          }

          if (this._context.THIS()) {
            return `${this._expression.toString()}.this`;
          }

          if (this._context.SUPER()) {
            if (this._superSuffix !== undefined) {
              return `${this._expression.toString()}.super${this._superSuffix.toString()}`;
            }
            Utils.error(
              'P9Expression: toString(): "super" expects superSuffix.',
              this._p
            );
            return "";
          }

          if (this._context.EQUALS()) {
            if (this._expressionList !== undefined) {
              return `${this._expression.toString()} === ${this._expressionList.toString()}`;
            }

            Utils.error(
              'P9Expression: toString(): "equals" expects this.expressionList.',
              this._p
            );
            return "";
          }

          if (
            this._nonWildcardTypeArguments !== undefined &&
            this._explicitGenericInvocationSuffix !== undefined
          ) {
            return `${this._expression.toString()}.${this._nonWildcardTypeArguments.toString()}${this._explicitGenericInvocationSuffix.toString()}`;
          }
        }
        Utils.error(
          'P9Expression: toString(): "." expects expression.',
          this._p
        );
        return "";
      }

      if (this._context._bop.text === "instanceof") {
        if (this._expression !== undefined && this._type !== undefined) {
          return `${
            this._expression.toString
          } instanceof ${this._type.toString()}`;
        }
        Utils.error(
          'P9Expression: toString(): "instanceof" expects expressions.',
          this._p
        );
        return "";
      }

      if (this._expression !== undefined && this._expression2 !== undefined) {
        return `${this._expression.toString()} ${
          this._context._bop.text
        } ${this._expression2.toString()}`;
      }

      Utils.error("P9Expression: toString(): Unknown operation.", this._p);
      return "";
    } // end of bop defined case

    if (this._context._postfix !== undefined) {
      if (this._expression !== undefined) {
        return `${this._expression.toString()} ${this._context._postfix.text}`;
      }
      Utils.error(
        "P9Expression: toString(): Operation expects expression.",
        this._p
      );
      return "";
    }

    if (this._context._prefix !== undefined) {
      if (this._expression !== undefined) {
        return `${this._context._prefix.text} ${this._expression.toString()}`;
      }
      Utils.error(
        "P9Expression: toString(): Operation expects expression.",
        this._p
      );
      return "";
    }

    if (this._funcCall !== undefined) {
      return this._funcCall.toString();
    }

    if (this._context.NEW()) {
      if (this._creator !== undefined) {
        return `new ${this._creator.toString()}`;
      }
      Utils.error('P9Expression: toString(): "new" expects creator.', this._p);
      return "";
    }

    if (this._typeBound !== undefined) {
      if (this._expression !== undefined) {
        return `${this._expression.toString()}`;
      }
      Utils.error(
        "P9Expression: toString(): typeBound expects expression.",
        this._p
      );
      return "";
    }

    if (this._expression !== undefined && this._expression2 !== undefined) {
      return `${this._expression.toString()} [${this._expression2.toString()}]`;
    }
    Utils.error("P9Expression: toString(): Unknown grammar.", this._p);
    return "";
  }
}

export class P9ExpressionList implements P9Elements {
  private _list = new Array<P9Expression>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9Expression): void {
    this._list.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return this._list.join(", ");
  }
}

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
    private readonly _p: P9
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

      if (this._p.p9ConstList.includes(str)) {
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
      Utils.error("P9Primary: toString(): class expects typeOrVoid.", this._p);
      return "";
    }

    if (this._nonWildcardTypeArguments !== undefined) {
      if (this._explicitGenericInvocationSuffix !== undefined) {
        return `${this._nonWildcardTypeArguments.toString()} ${this._explicitGenericInvocationSuffix.toString()}`;
      }
      Utils.error(
        "P9Primary: toString(): nonWildcardTypeArguments expects explicitGenericInvocationSuffix.",
        this._p
      );
      return "";
    }

    Utils.error("P9Primary: toString(): Unknown grammar.", this._p);
    return "";
  }
}

export class P9NonWildcardTypeArguments implements P9Elements {
  private _typeList: P9TypeList | undefined;

  constructor(private readonly _p: P9) {}

  public set typeList(obj: P9TypeList) {
    this._typeList = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._typeList !== undefined) {
      return `<${this._typeList.toString()}>`;
    }

    Utils.error(
      "P9NonWildcardTypeArguments: toString(): nonWildcardTypeArguments expects typeList.",
      this._p
    );
    return "";
  }
}

export class P9SuperSuffix implements P9Elements {
  private _arguments: P9Arguments | undefined;
  private _typeArguments: P9TypeArguments | undefined;

  constructor(
    private readonly _context: SuperSuffixContext,
    private readonly _p: P9
  ) {}

  public set arguments(obj: P9Arguments) {
    this._arguments = obj;
  }

  public set typeArguments(obj: P9TypeArguments) {
    this._typeArguments = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context.DOT()) {
      if (this._context._id !== undefined) {
        let str = ".";
        if (this._typeArguments !== undefined) {
          str = str.concat(this._typeArguments.toString());
        }

        str = str.concat(`${this._context._id.text}`);

        if (this._arguments !== undefined) {
          str = str.concat(this._arguments.toString());
        }

        return str;
      }
      Utils.error('P9SuperSuffix: toString(): "." expects id.', this._p);
      return "";
    }

    if (this._arguments !== undefined) {
      return this._arguments.toString();
    }

    Utils.error(
      "P9SuperSuffix: toString(): creator expects arrayCreatorRest or classCreatorRest.",
      this._p
    );
    return "";
  }
}

export class P9ExplicitGenericInvocationSuffix implements P9Elements {
  private _superSuffix: P9SuperSuffix | undefined;
  private _arguments: P9Arguments | undefined;

  constructor(
    private readonly _context: ExplicitGenericInvocationSuffixContext,
    private readonly _p: P9
  ) {}

  public set superSuffix(obj: P9SuperSuffix) {
    this._superSuffix = obj;
  }

  public set arguments(obj: P9Arguments) {
    this._arguments = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context.SUPER()) {
      if (this._superSuffix !== undefined) {
        return this._superSuffix.toString();
      }
      Utils.error(
        "P9ExplicitGenericInvocationSuffix: toString(): super expects superSuffix.",
        this._p
      );
      return "";
    }

    if (this._context._id !== undefined) {
      if (this._arguments !== undefined) {
        return `${this._context._id.text} ${this._arguments.toString()}`;
      }
      Utils.error(
        "P9ExplicitGenericInvocationSuffix: toString(): id expects arguments.",
        this._p
      );
      return "";
    }

    Utils.error(
      "P9ExplicitGenericInvocationSuffix: toString(): Unknown grammar.",
      this._p
    );
    return "";
  }
}

export class P9Creator implements P9Elements {
  private _nonWildcardTypeArguments: P9NonWildcardTypeArguments | undefined;
  private _createdName: P9CreatedName | undefined;
  private _classCreatorRest: P9ClassCreatorRest | undefined;
  private _arrayCreatorRest: P9ArrayCreatorRest | undefined;

  constructor(private readonly _p: P9) {}

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

    Utils.error("P9Creator: toString(): Unknown grammar.", this._p);
    return "";
  }
}

export class P9CreatedName implements P9Elements {
  private _createdNameUnitList = new Array<P9CreatedNameUnit>();
  private _primitiveType: string | undefined;

  constructor(private readonly _p: P9) {}

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
    private readonly _p: P9
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

    Utils.error("P9CreatedNameUnit: toString(): Unknown grammar.", this._p);
    return "";
  }
}

export class P9TypeArgumentsOrDiamond implements P9Elements {
  private _typeArguments: P9TypeArguments | undefined;

  constructor(
    private readonly _context: TypeArgumentsOrDiamondContext,
    private readonly _p: P9
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

    Utils.error(
      "P9TypeArgumentsOrDiamond: toString(): Unknown grammar.",
      this._p
    );
    return "";
  }
}

export class P9ArrayCreatorRest implements P9Elements {
  private _expressionList = new Array<P9Expression>();
  private _arrayInitializer: P9ArrayInitializer | undefined;

  constructor(private readonly _p: P9) {}

  public push(expression: P9Expression): void {
    this._expressionList.push(expression);
  }

  public set arrayInitializer(initializer: P9ArrayInitializer) {
    this._arrayInitializer = initializer;
  }

  public toString(): string {
    if (this._arrayInitializer !== undefined) {
      return this._arrayInitializer.toString();
    } else {
      return `Array(${this._expressionList.join(", ")})`;
    }
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }
}

export class P9Arguments implements P9Elements {
  private _expressionList: P9ExpressionList | undefined;

  constructor(private readonly _p: P9) {}

  public set expressionList(list: P9ExpressionList) {
    this._expressionList = list;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._expressionList !== undefined) {
      return `(${this._expressionList.toString()})`;
    } else {
      return "()";
    }
  }
}

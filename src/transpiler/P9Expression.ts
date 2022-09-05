import { P9Elements } from "./P9Elements";
import { P9FuncCall } from "./P9Function";
import {
  ExplicitGenericInvocationSuffixContext,
  ExpressionContext,
  SuperSuffixContext,
} from "../P9Parser/ProcessingParser";
import { P9Type } from "./P9Variable";
import { P9TypeArguments, P9TypeBound, P9TypeList } from "./P9Class";
import { Utils } from "../Utils";
import { P9Primary } from "./P9Primary";
import { P9Creator } from "./P9Creator";

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
  private _isArrayConstructor = false;

  constructor(
    private readonly _context: ExpressionContext,
    private readonly _u: Utils
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
    this._isArrayConstructor = obj.isArrayConstructor;
  }

  public get creatorExpressionList() {
    if (this._creator !== undefined) {
      return this._creator.expressionList;
    } else {
      return new Array<P9Expression>();
    }
  }

  public get isArrayConstructor() {
    return this._isArrayConstructor;
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
        this._u.error('P9Expression: toString(): "?" expects expressions.');
        return "";
      }

      if (this._context._bop.text === ".") {
        if (this._expression !== undefined) {
          if (this._context._id !== undefined) {
            return `${this._expression.toString()}.${this._context._id.text}`;
          }

          if (this._funcCall !== undefined) {
            if (this._funcCall.toString() === "length()") {
              return `$p9obj.__length(${this._expression.toString()})`;
            } else {
              return `${this._expression.toString()}.${this._funcCall.toString()}`;
            }
          }

          if (this._context.THIS()) {
            return `${this._expression.toString()}.this`;
          }

          if (this._context.SUPER()) {
            if (this._superSuffix !== undefined) {
              return `${this._expression.toString()}.super${this._superSuffix.toString()}`;
            }
            this._u.error(
              'P9Expression: toString(): "super" expects superSuffix.'
            );
            return "";
          }

          if (this._context.EQUALS()) {
            if (this._expressionList !== undefined) {
              return `${this._expression.toString()} === ${this._expressionList.toString()}`;
            }

            this._u.error(
              'P9Expression: toString(): "equals" expects this.expressionList.'
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
        this._u.error('P9Expression: toString(): "." expects expression.');
        return "";
      }

      if (this._context._bop.text === "instanceof") {
        if (this._expression !== undefined && this._type !== undefined) {
          return `${
            this._expression.toString
          } instanceof ${this._type.toString()}`;
        }
        this._u.error(
          'P9Expression: toString(): "instanceof" expects expressions.'
        );
        return "";
      }

      if (this._expression !== undefined && this._expression2 !== undefined) {
        const bop = this._context._bop.text;
        if (bop === "=" && this._expression2.isArrayConstructor) {
          return this._u.buildArrayConstructor(
            this._expression.toString(),
            this._expression2.creatorExpressionList,
            ""
          );
        } else if (
          bop === "+" ||
          bop === "-" ||
          bop === "*" ||
          bop === "/" ||
          bop === "%" ||
          bop === "==" ||
          bop === "!=" ||
          bop === ">" ||
          bop === ">=" ||
          bop === "<" ||
          bop === "<="
        ) {
          return `$p9obj.__$__(${this._expression.toString()}, "${bop}", ${this._expression2.toString()})`;
        } else {
          return `${this._expression.toString()} ${bop} ${this._expression2.toString()}`;
        }
      }

      this._u.error("P9Expression: toString(): Unknown operation.");
      return "";
    } // end of bop defined case

    if (this._context._postfix !== undefined) {
      if (this._expression !== undefined) {
        return `${this._expression.toString()} ${this._context._postfix.text}`;
      }
      this._u.error("P9Expression: toString(): Operation expects expression.");
      return "";
    }

    if (this._context._prefix !== undefined) {
      if (this._expression !== undefined) {
        return `${this._context._prefix.text} ${this._expression.toString()}`;
      }
      this._u.error("P9Expression: toString(): Operation expects expression.");
      return "";
    }

    if (this._funcCall !== undefined) {
      return this._funcCall.toString();
    }

    if (this._context.NEW()) {
      if (this._creator !== undefined) {
        if (this._creator.isArrayConstructor) {
          return "";
        } else {
          return `new ${this._creator.toString()}`;
        }
      } else {
        this._u.error('P9Expression: toString(): "new" expects creator.');
        return "";
      }
    }

    if (this._typeBound !== undefined) {
      if (this._expression !== undefined) {
        return `${this._expression.toString()}`;
      }
      this._u.error("P9Expression: toString(): typeBound expects expression.");
      return "";
    }

    if (this._expression !== undefined && this._expression2 !== undefined) {
      return `${this._expression.toString()}[${this._expression2.toString()}]`;
    }
    this._u.error("P9Expression: toString(): Unknown grammar.");
    return "";
  }
}

export class P9ExpressionList implements P9Elements {
  private _list = new Array<P9Expression>();

  constructor(private readonly _u: Utils) {}

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

export class P9NonWildcardTypeArguments implements P9Elements {
  private _typeList: P9TypeList | undefined;

  constructor(private readonly _u: Utils) {}

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

    this._u.error(
      "P9NonWildcardTypeArguments: toString(): nonWildcardTypeArguments expects typeList."
    );
    return "";
  }
}

export class P9SuperSuffix implements P9Elements {
  private _arguments: P9Arguments | undefined;
  private _typeArguments: P9TypeArguments | undefined;

  constructor(
    private readonly _context: SuperSuffixContext,
    private readonly _u: Utils
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
      this._u.error('P9SuperSuffix: toString(): "." expects id.');
      return "";
    }

    if (this._arguments !== undefined) {
      return this._arguments.toString();
    }

    this._u.error(
      "P9SuperSuffix: toString(): creator expects arrayCreatorRest or classCreatorRest."
    );
    return "";
  }
}

export class P9ExplicitGenericInvocationSuffix implements P9Elements {
  private _superSuffix: P9SuperSuffix | undefined;
  private _arguments: P9Arguments | undefined;

  constructor(
    private readonly _context: ExplicitGenericInvocationSuffixContext,
    private readonly _u: Utils
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
      this._u.error(
        "P9ExplicitGenericInvocationSuffix: toString(): super expects superSuffix."
      );
      return "";
    }

    if (this._context._id !== undefined) {
      if (this._arguments !== undefined) {
        return `${this._context._id.text} ${this._arguments.toString()}`;
      }
      this._u.error(
        "P9ExplicitGenericInvocationSuffix: toString(): id expects arguments."
      );
      return "";
    }

    this._u.error(
      "P9ExplicitGenericInvocationSuffix: toString(): Unknown grammar."
    );
    return "";
  }
}

export class P9Arguments implements P9Elements {
  private _expressionList: P9ExpressionList | undefined;

  constructor(private readonly _u: Utils) {}

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

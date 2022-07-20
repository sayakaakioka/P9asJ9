import { P9 } from "P9";
import {
  CatchClauseContext,
  StatementContext,
  SwitchLabelContext,
} from "P9Parser/ProcessingParser";
import { Utils } from "../Utils";
import { P9Block, P9BlockStatement } from "./P9Block";
import { P9Elements } from "./P9Elements";
import { P9Expression, P9ExpressionList } from "./P9Expression";
import {
  P9Type,
  P9VariableDeclaratorId,
  P9VariableDeclarators,
} from "./P9Variable";

export class P9Statement implements P9Elements {
  private _block: P9Block | undefined;
  private _expression: P9Expression | undefined;
  private _statement: P9Statement | undefined;
  private _statement2: P9Statement | undefined;
  private _forControl: P9ForControl | undefined;
  private _catchClauseList = new Array<P9CatchClause>();
  private _switchBlockStatementList = new Array<P9SwitchBlockStatementGroup>();
  private _switchLabelList = new Array<P9SwitchLabel>();

  constructor(
    private readonly _context: StatementContext,
    private readonly _p: P9
  ) {}

  public set expression(obj: P9Expression) {
    this._expression = obj;
  }

  public push(
    obj:
      | P9Statement
      | P9CatchClause
      | P9SwitchBlockStatementGroup
      | P9SwitchLabel
  ): void {
    if (obj instanceof P9Statement) {
      if (this._statement === undefined) {
        this._statement = obj;
      } else {
        this._statement2 = obj;
      }
    } else if (obj instanceof P9CatchClause) {
      this._catchClauseList.push(obj);
    } else if (obj instanceof P9SwitchBlockStatementGroup) {
      this._switchBlockStatementList.push(obj);
    } else if (obj instanceof P9SwitchLabel) {
      this._switchLabelList.push(obj);
    }
  }

  public set forControl(obj: P9ForControl) {
    this._forControl = obj;
  }

  public set block(obj: P9Block) {
    this._block = obj;
  }

  public toString(): string {
    return this.getLines().join("\n");
  }

  public getLines(): Array<string> {
    if (this._context.IF()) {
      if (this._expression !== undefined && this._statement !== undefined) {
        let lines = new Array<string>(`if (${this._expression.toString()})`);
        lines = Utils.wrap(lines, this._statement.getLines());
        if (this._context.ELSE()) {
          if (this._statement2 !== undefined) {
            lines.push(`else`);
            lines = Utils.wrap(lines, this._statement2.getLines());
          } else {
            Utils.error(
              "P9Statement: getLines(): Else expects statement.",
              this._p
            );
            return new Array<string>();
          }
        }
        return lines;
      } else {
        Utils.error(
          "P9Statement: getLines(): If expects expression and statement.",
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._context.FOR()) {
      if (this._forControl !== undefined && this._statement !== undefined) {
        let lines = new Array<string>(`for (${this._forControl.toString()})`);
        lines = Utils.wrap(lines, this._statement.getLines());
        return lines;
      } else {
        Utils.error(
          "P9Statement: getLines(): For expects forControl and statement.",
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._context.WHILE()) {
      if (this._expression !== undefined && this._statement !== undefined) {
        let lines = new Array<string>(`while (${this._expression.toString()})`);

        lines = Utils.wrap(lines, this._statement.getLines());
        return lines;
      } else {
        Utils.error(
          "P9Statement: getLines(): While expects expression and statement.",
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._context.DO() && this._context.WHILE()) {
      if (this._statement !== undefined && this._expression !== undefined) {
        let lines = new Array<string>(`do`);
        lines = Utils.wrap(lines, this._statement.getLines());

        const idx = lines.length - 1;
        lines[idx] = `${lines[idx]} while(${this._expression.toString()});`;
        return lines;
      } else {
        Utils.error(
          "P9Statement: getLines(): Do-while expects statement and expression.",
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._context.TRY()) {
      if (this._block !== undefined) {
        let lines = new Array<string>(`try`);
        lines = Utils.wrap(lines, this._block.getLines());
        lines = lines.concat(
          this._catchClauseList.flatMap(function (e) {
            return e.getLines();
          })
        );
        return lines;
      } else {
        Utils.error("P9Statement: getLines(): Try expects block.", this._p);
        return new Array<string>();
      }
    }

    if (this._context.SWITCH()) {
      if (this._expression !== undefined) {
        let lines = new Array<string>(
          `switch(${this._expression.toString()}) {`
        );
        lines = lines.concat(
          this._switchBlockStatementList.flatMap(function (e) {
            return e.getLines();
          })
        );
        lines = lines.concat(
          this._switchLabelList.flatMap(function (e) {
            return e.getLines();
          })
        );
        lines.push("}");
        return lines;
      } else {
        Utils.error(
          "P9Statement: getLines(): Switch expects expression.",
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._context.RETURN()) {
      if (this._expression !== undefined) {
        return new Array<string>(`return ${this._expression.toString()};`);
      } else {
        return new Array<string>("return;");
      }
    }

    if (this._context.THROW()) {
      if (this._expression !== undefined) {
        return new Array<string>(`throw ${this._expression.toString()};`);
      } else {
        Utils.error(
          `P9Statement: getLines(): Throw expects expression.`,
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._context.BREAK()) {
      return new Array<string>("break;");
    }

    if (this._context.CONTINUE()) {
      return new Array<string>("continue;");
    }

    if (this._expression !== undefined) {
      return new Array<string>(`${this._expression.toString()};`);
    }

    if (this._context._identifierLabel !== undefined) {
      if (this._statement !== undefined) {
        let lines = new Array<string>(
          `${this._context._identifierLabel.text}:`
        );
        return lines.concat(this._statement.getLines());
      } else {
        Utils.error(
          `P9Statement: getLines(): Label expects statement.`,
          this._p
        );
        return new Array<string>();
      }
    }

    if (this._block !== undefined) {
      return this._block.getLines();
    }

    return new Array<string>(";");
  }
}

export class P9EnhancedForControl implements P9Elements {
  private _modifierList = new Array<string>();
  private _type: P9Type | undefined;
  private _id: P9VariableDeclaratorId | undefined;
  private _expression: P9Expression | undefined;

  constructor(private readonly _p: P9) {}

  public push(str: string): void {
    this._modifierList.push(str);
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public set variableDeclaratorId(obj: P9VariableDeclaratorId) {
    this._id = obj;
  }

  public set expression(obj: P9Expression) {
    this._expression = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._id !== undefined && this._expression !== undefined) {
      if (this._modifierList.includes("final")) {
        return `const ${this._id.toString()} of ${this._expression.toString()}`;
      } else if (this._type !== undefined) {
        return `let ${this._id.toString()} of ${this._expression.toString()}`;
      } else {
        return `${this._id.toString()} of ${this._expression.toString()}`;
      }
    }

    Utils.error(
      `P9EnhancedForControl: toString():enhancedForControl expects variableDeclaratorId and expression.`,
      this._p
    );
    return "";
  }
}

export class P9ForInit implements P9Elements {
  private _modifierList = new Array<string>();
  private _type: P9Type | undefined;
  private _variableDeclarators: P9VariableDeclarators | undefined;
  private _expressionList: P9ExpressionList | undefined;

  constructor(private readonly _p: P9) {}

  public push(str: string): void {
    this._modifierList.push(str);
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public set variableDeclarators(obj: P9VariableDeclarators) {
    this._variableDeclarators = obj;
  }

  public set expressionList(obj: P9ExpressionList) {
    this._expressionList = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._expressionList !== undefined) {
      return this._expressionList.toString();
    }

    if (this._variableDeclarators !== undefined) {
      if (this._modifierList.includes("final")) {
        return `const ${this._variableDeclarators.toString()}`;
      } else if (this._type !== undefined) {
        return `let ${this._variableDeclarators.toString()}`;
      } else {
        return `${this._variableDeclarators.toString()}`;
      }
    }

    Utils.error(
      "P9ForInit: toString(): ForInit expects variableDeclarators or expressionList.",
      this._p
    );
    return "";
  }
}

export class P9ForControl implements P9Elements {
  private _forInit: P9ForInit | undefined;
  private _expression: P9Expression | undefined;
  private _expressionList: P9ExpressionList | undefined;
  private _enhancedForControl: P9EnhancedForControl | undefined;

  constructor(private readonly _p: P9) {}

  public set forInit(obj: P9ForInit) {
    this._forInit = obj;
  }

  public set expression(obj: P9Expression) {
    this._expression = obj;
  }

  public set expressionList(obj: P9ExpressionList) {
    this._expressionList = obj;
  }

  public set enhancedForControl(obj: P9EnhancedForControl) {
    this._enhancedForControl = obj;
  }

  public toString(): string {
    if (this._enhancedForControl !== undefined) {
      return this._enhancedForControl.toString();
    } else {
      let str = "";

      if (this._forInit !== undefined) {
        str = str.concat(this._forInit.toString());
      }
      str = str.concat("; ");

      if (this._expression !== undefined) {
        str = str.concat(this._expression.toString());
      }
      str = str.concat("; ");

      if (this._expressionList !== undefined) {
        str = str.concat(this._expressionList.toString());
      }

      return str;
    }
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }
}

export class P9CatchClause implements P9Elements {
  private _modifierList = new Array<string>();
  private _catchType: P9CatchType | undefined;
  private _block: P9Block | undefined;

  constructor(
    private readonly _context: CatchClauseContext,
    private readonly _p: P9
  ) {}

  public push(str: string): void {
    this._modifierList.push(str);
  }

  public set catchType(obj: P9CatchType) {
    this._catchType = obj;
  }

  public set block(obj: P9Block) {
    this._block = obj;
  }

  public getLines(): Array<string> {
    if (this._context._id !== undefined && this._block !== undefined) {
      let lines = new Array<string>(`catch (${this._context._id.text})`);
      lines = Utils.wrap(lines, this._block.getLines());
      return lines;
    }

    Utils.error(
      "P9CatchClause: getLines(): catchClause expects id and block.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9CatchType implements P9Elements {
  private _qualifiedNameList = Array<string>();

  constructor(private readonly _p: P9) {}

  public push(str: string): void {
    this._qualifiedNameList.push(str);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return this._qualifiedNameList.join(" | ");
  }
}

export class P9SwitchLabel implements P9Elements {
  private _expression: P9Expression | undefined;
  private _type: P9Type | undefined;

  constructor(
    private readonly _context: SwitchLabelContext,
    private readonly _p: P9
  ) {}

  public set expression(obj: P9Expression) {
    this._expression = obj;
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context.CASE()) {
      if (this._expression !== undefined) {
        return `case ${this._expression.toString()}:`;
      }

      if (this._context._enumConstantName !== undefined) {
        return `case ${this._context._enumConstantName.text}:`;
      }

      if (this._context._varName !== undefined) {
        return `case let ${this._context._varName.text}:`;
      }
    }

    if (this._context.DEFAULT()) {
      return `default:`;
    }

    Utils.error(
      "P9SwitchLabel: toString(): SwitchLabel expects case or default.",
      this._p
    );
    return "";
  }
}

export class P9SwitchBlockStatementGroup implements P9Elements {
  private _labelList = new Array<P9SwitchLabel>();
  private _blockStatementList = Array<P9BlockStatement>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9SwitchLabel | P9BlockStatement): void {
    if (obj instanceof P9SwitchLabel) {
      this._labelList.push(obj);
    } else {
      this._blockStatementList.push(obj);
    }
  }

  public getLines(): Array<string> {
    let lines = Array<string>();
    lines = lines.concat(
      this._labelList.map(function (e) {
        return e.toString();
      })
    );
    lines = lines.concat(
      this._blockStatementList
        .flatMap(function (e) {
          return e.getLines();
        })
        .map(function (e) {
          return `\t${e.toString()}`;
        })
    );
    return lines;
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

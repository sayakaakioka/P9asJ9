import { ProcessingParserListener } from "../P9Parser/ProcessingParserListener";
import {
  CompilationUnitContext,
  ImportDeclarationContext,
  QualifiedNameContext,
  VarDeclContext,
  ModifierContext,
  VariableDeclaratorsContext,
  VariableDeclaratorContext,
  VariableDeclaratorIdContext,
  VariableInitializerContext,
  ArrayInitializerContext,
  FuncDeclContext,
  TypeOrVoidContext,
  PrimitiveTypeContext,
  ClassTypeContext,
  TypeArgumentsContext,
  FormalParametersContext,
  FormalParameterListContext,
  FormalParameterContext,
  QualifiedNameListContext,
  BlockContext,
  BlockStatementContext,
  ClassDeclContext,
  ClassModifierContext,
  TypeParametersContext,
  TypeParameterContext,
  TypeBoundContext,
  TypeListContext,
  ClassBodyContext,
  ClassBodyDeclarationContext,
  AbstractMethodDeclarationContext,
  MemberDeclarationContext,
  GenericMethodDeclarationContext,
  ConstructorDeclarationContext,
  GenericConstructorDeclarationContext,
  StatementContext,
  ForControlContext,
  ForInitContext,
  ExpressionListContext,
  EnhancedForControlContext,
  CatchClauseContext,
  CatchTypeContext,
  SwitchBlockStatementGroupContext,
  SwitchLabelContext,
  ExpressionContext,
  PrimaryContext,
  LiteralContext,
  NonWildcardTypeArgumentsContext,
  SuperSuffixContext,
  ExplicitGenericInvocationSuffixContext,
  ArgumentsContext,
  FuncCallContext,
  CreatorContext,
  CreatedNameContext,
  TypeArgumentsOrDiamondContext,
  ArrayCreatorRestContext,
  ClassCreatorRestContext,
  TypeContext,
  CreatedNameUnitContext,
} from "../P9Parser/ProcessingParser";

import { P9Elements } from "./P9Elements";
import { P9CompilationUnit } from "./P9CompilationUnit";
import { P9Block, P9BlockStatement } from "./P9Block";
import {
  P9Arguments,
  P9ExplicitGenericInvocationSuffix,
  P9Expression,
  P9ExpressionList,
  P9NonWildcardTypeArguments,
  P9SuperSuffix,
} from "./P9Expression";
import {
  P9FormalParameter,
  P9FormalParameterList,
  P9FormalParameters,
} from "./P9FormalParameter";
import {
  P9CatchClause,
  P9CatchType,
  P9EnhancedForControl,
  P9ForControl,
  P9ForInit,
  P9Statement,
  P9SwitchBlockStatementGroup,
  P9SwitchLabel,
} from "./P9Statement";
import {
  P9VarDecl,
  P9VariableDeclarators,
  P9VariableDeclarator,
  P9VariableInitializer,
  P9ArrayInitializer,
  P9Type,
  P9VariableDeclaratorId,
  P9TypeOrVoid,
} from "./P9Variable";
import { P9FuncDecl, P9FuncCall } from "./P9Function";
import {
  P9AbstractMethodDeclaration,
  P9ClassBody,
  P9ClassBodyDeclaration,
  P9ClassCreatorRest,
  P9ClassDecl,
  P9ClassModifier,
  P9ClassType,
  P9ConstructorDeclaration,
  P9GenericConstructorDeclaration,
  P9GenericMethodDeclaration,
  P9ImportDeclaration,
  P9MemberDeclaration,
  P9QualifiedNameList,
  P9TypeArguments,
  P9TypeBound,
  P9TypeList,
  P9TypeParameter,
  P9TypeParameters,
} from "./P9Class";
import { P9 } from "P9";
import { Utils } from "../Utils";
import {
  P9ArrayCreatorRest,
  P9CreatedName,
  P9TypeArgumentsOrDiamond,
  P9Creator,
  P9CreatedNameUnit,
} from "./P9Creator";
import { P9Primary } from "./P9Primary";

export class P9ParserListener implements ProcessingParserListener {
  private _list = new Array<P9Elements>();
  private _classVarList = new Array<string>();
  private readonly _debugFlag: boolean;
  private readonly _u: Utils;
  private _inClassBody = false;
  private _inFuncDecl = false;

  constructor(private readonly _p9: P9) {
    this._debugFlag = _p9.debug;
    this._u = _p9.utils;
  }

  noop(): void {}

  debug(str: string): void {
    if (this._debugFlag) {
      this._u.log(str);
    }
  }

  enterCompilationUnit(context: CompilationUnitContext): void {
    this._list.push(new P9CompilationUnit(this._p9));
  }
  exitCompilationUnit(context: CompilationUnitContext): void {
    const obj = this._list.pop();
    if (!(obj instanceof P9CompilationUnit)) {
      this._u.error(
        "exitCompilationUnit: Last object is not an instance of P9CompilationUnit."
      );
    } else {
      this._p9.transpiled = obj.toString();
    }
  }

  enterImportDeclaration(context: ImportDeclarationContext): void {
    this._list.push(new P9ImportDeclaration(this._u));
  }
  exitImportDeclaration(context: ImportDeclarationContext): void {
    this._list.pop();
  }

  enterQualifiedName(context: QualifiedNameContext): void {
    this.debug(`QualifiedName: ${context.text}`);
  }
  exitQualifiedName(context: QualifiedNameContext): void {
    const lastIdx = this._list.length - 1;
    if (this._list[lastIdx] instanceof P9QualifiedNameList) {
      const target = this._list[lastIdx] as P9QualifiedNameList;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9CatchType) {
      const target = this._list[lastIdx] as P9CatchType;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9ClassType) {
      const target = this._list[lastIdx] as P9ClassType;
      target.qualifiedName = context.text;
    } else if (this._list[lastIdx] instanceof P9ImportDeclaration) {
      this.noop;
    } else {
      this._u.error(
        `exitQualifiedName: The qualifiedName with no place to go: ${context.text}`
      );
    }
  }

  enterVarDecl(context: VarDeclContext): void {
    this.debug(`VarDecl: ${context.text}`);
    this._list.push(new P9VarDecl(context, this._u));
  }
  exitVarDecl(context: VarDeclContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9VarDecl) {
      if (this._inClassBody) {
        obj.classVarList = this._classVarList;
        obj.inFuncDecl = this._inFuncDecl;
      }

      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CompilationUnit) {
          const target = this._list[lastIdx] as P9CompilationUnit;
          target.push(obj.toString());
        } else if (this._list[lastIdx] instanceof P9BlockStatement) {
          const target = this._list[lastIdx] as P9BlockStatement;
          target.varDecl = obj;
        } else if (this._list[lastIdx] instanceof P9MemberDeclaration) {
          const target = this._list[lastIdx] as P9MemberDeclaration;
          target.varDecl = obj;
        } else {
          this._u.error(
            `exitVarDecl: Stray variable declaration(s): ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitVarDecl: Variable declaration(s) with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitVarDecl: Last element of the list is not P9VarDecl object: ${context.text}`
      );
    }
  }

  enterModifier(context: ModifierContext): void {
    this.debug(`Modifier: ${context.text}`);
  }
  exitModifier(context: ModifierContext): void {
    const lastIdx = this._list.length - 1;
    if (this._list[lastIdx] instanceof P9VarDecl) {
      const target = this._list[lastIdx] as P9VarDecl;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9FuncDecl) {
      const target = this._list[lastIdx] as P9FuncDecl;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9FormalParameter) {
      const target = this._list[lastIdx] as P9FormalParameter;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9ClassModifier) {
      const target = this._list[lastIdx] as P9ClassModifier;
      target.modifier = context.text;
    } else if (this._list[lastIdx] instanceof P9ClassBodyDeclaration) {
      const target = this._list[lastIdx] as P9ClassBodyDeclaration;
      target.modifier = context.text;
    } else if (this._list[lastIdx] instanceof P9AbstractMethodDeclaration) {
      const target = this._list[lastIdx] as P9AbstractMethodDeclaration;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9ForInit) {
      const target = this._list[lastIdx] as P9ForInit;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9EnhancedForControl) {
      const target = this._list[lastIdx] as P9EnhancedForControl;
      target.push(context.text);
    } else if (this._list[lastIdx] instanceof P9CatchClause) {
      const target = this._list[lastIdx] as P9CatchClause;
      target.push(context.text);
    } else {
      this._u.error(
        `enterModifier: The modifier with no place to go: ${context.text}`
      );
    }
  }

  enterVariableDeclarators(context: VariableDeclaratorsContext): void {
    this.debug(`VariableDeclators: ${context.text}`);
    this._list.push(new P9VariableDeclarators(this._u));
  }
  exitVariableDeclarators(context: VariableDeclaratorsContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9VariableDeclarators) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VarDecl) {
          const target = this._list[lastIdx] as P9VarDecl;
          target.variableDeclarators = obj;
        } else if (this._list[lastIdx] instanceof P9ForInit) {
          const target = this._list[lastIdx] as P9ForInit;
          target.variableDeclarators = obj;
        } else {
          this._u.error(
            `exitVariableDeclarators: Stray variable declarators: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitVariableDeclarators: Variable declarators with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitVariableDeclarators: Last element of the list is not P9VariableDeclarators object: ${context.text}`
      );
    }
  }

  enterVariableDeclarator(context: VariableDeclaratorContext): void {
    this.debug(`VariableDeclator: ${context.text}`);
    this._list.push(new P9VariableDeclarator(this._u));
  }
  exitVariableDeclarator(context: VariableDeclaratorContext): void {
    const obj = this._list.pop();

    if (obj instanceof P9VariableDeclarator) {
      if (this._inClassBody && !this._inFuncDecl) {
        this._classVarList.push(obj.getId());
      }

      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VariableDeclarators) {
          const target = this._list[lastIdx] as P9VariableDeclarators;
          target.push(obj);
        } else {
          this._u.error(
            `exitVariableDeclarator: Stray variable declarator: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitVariableDeclarator: Variable declarator with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitVariableDeclarator: Last element of the list is not P9VariableDeclarator object: ${context.text}`
      );
    }
  }

  enterVariableDeclaratorId(context: VariableDeclaratorIdContext): void {
    this.debug(`VariableDeclaratorId: ${context.text}`);
    this._list.push(new P9VariableDeclaratorId(context, this._u));
  }
  exitVariableDeclaratorId(context: VariableDeclaratorIdContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9VariableDeclaratorId) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VariableDeclarator) {
          const target = this._list[lastIdx] as P9VariableDeclarator;
          target.variableDeclaratorId = obj;
        } else if (this._list[lastIdx] instanceof P9FormalParameter) {
          const target = this._list[lastIdx] as P9FormalParameter;
          target.variableDeclaratorId = obj;
        } else if (this._list[lastIdx] instanceof P9EnhancedForControl) {
          const target = this._list[lastIdx] as P9EnhancedForControl;
          target.variableDeclaratorId = obj;
        } else {
          this._u.error(
            `exitVariableDeclaratorId: Stray variableDeclaratorId: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitVariableDeclaratorId: VariabledeclaratorId with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitVariableDeclaratorId: Last element of the list is not P9VariableDeclaratorId object: ${context.text}`
      );
    }
  }

  enterVariableInitializer(context: VariableInitializerContext): void {
    this.debug(`VariableInitializer: ${context.text}`);
    this._list.push(new P9VariableInitializer(this._u));
  }
  exitVariableInitializer(context: VariableInitializerContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9VariableInitializer) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VariableDeclarator) {
          const target = this._list[lastIdx] as P9VariableDeclarator;
          target.variableInitializer = obj;
        } else if (this._list[lastIdx] instanceof P9ArrayInitializer) {
          const target = this._list[lastIdx] as P9ArrayInitializer;
          target.push(obj);
        } else {
          this._u.error(
            `exitVariableInitializer: Stray variable initializer: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitVariableInitializer: Variable initializer with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitVariableInitializer: Last element of the list is not P9VariableInitializer object: ${context.text}`
      );
    }
  }

  enterArrayInitializer(context: ArrayInitializerContext): void {
    this.debug(`ArrayInitializer: ${context.text}`);
    this._list.push(new P9ArrayInitializer(this._u));
  }
  exitArrayInitializer(context: ArrayInitializerContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ArrayInitializer) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VariableInitializer) {
          const target = this._list[lastIdx] as P9VariableInitializer;
          target.initializer = obj;
        } else if (this._list[lastIdx] instanceof P9ArrayCreatorRest) {
          const target = this._list[lastIdx] as P9ArrayCreatorRest;
          target.arrayInitializer = obj;
        } else {
          this._u.error(
            `exitArrayInitializer: Stray array initializer: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitArrayInitializer: Array initializer with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitArrayInitializer: Last element of the list is not P9ArrayInitializer object: ${context.text}`
      );
    }
  }

  enterFuncDecl(context: FuncDeclContext): void {
    this.debug(`FuncDecl: ${context.text}`);
    this._list.push(new P9FuncDecl(context, this._u));
    this._inFuncDecl = true;
  }
  exitFuncDecl(context: FuncDeclContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9FuncDecl) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CompilationUnit) {
          const target = this._list[lastIdx] as P9CompilationUnit;
          target.push(obj.getLines());
        } else if (this._list[lastIdx] instanceof P9MemberDeclaration) {
          const target = this._list[lastIdx] as P9MemberDeclaration;
          target.funcDecl = obj;
        } else if (this._list[lastIdx] instanceof P9GenericMethodDeclaration) {
          const target = this._list[lastIdx] as P9GenericMethodDeclaration;
          target.funcDecl = obj;
        } else {
          this._u.error(
            `exitFuncDecl: Stray function declaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitFuncDecl: Function declaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitFuncDecl: Last element of the list is not P9FuncDecl object: ${context.text}`
      );
    }
    this._inFuncDecl = false;
  }

  enterTypeOrVoid(context: TypeOrVoidContext): void {
    this.debug(`TypeOrVoid: ${context.text}`);
    this._list.push(new P9TypeOrVoid(context, this._u));
  }
  exitTypeOrVoid(context: TypeOrVoidContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9TypeOrVoid) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FuncDecl) {
          const target = this._list[lastIdx] as P9FuncDecl;
          target.typeOrVoid = obj;
        } else if (this._list[lastIdx] instanceof P9AbstractMethodDeclaration) {
          const target = this._list[lastIdx] as P9AbstractMethodDeclaration;
          target.typeOrVoid = obj;
        } else if (this._list[lastIdx] instanceof P9Primary) {
          const target = this._list[lastIdx] as P9Primary;
          target.typeOrVoid = obj;
        } else {
          this._u.error(`exitTypeOrVoid: Stray typeOrVoid: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitTypeOrVoid: TypeOrVoid with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeOrVoid: Last element of the list is not P9TypeOrVoid object: ${context.text}`
      );
    }
  }

  enterType(context: TypeContext): void {
    this.debug(`Type: ${context.text}`);
    this._list.push(new P9Type(context, this._u));
  }
  exitType(context: TypeContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Type) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VarDecl) {
          const target = this._list[lastIdx] as P9VarDecl;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9TypeOrVoid) {
          const target = this._list[lastIdx] as P9TypeOrVoid;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9TypeList) {
          const target = this._list[lastIdx] as P9TypeList;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9TypeArguments) {
          const target = this._list[lastIdx] as P9TypeArguments;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9FormalParameter) {
          const target = this._list[lastIdx] as P9FormalParameter;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9ClassDecl) {
          const target = this._list[lastIdx] as P9ClassDecl;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9TypeBound) {
          const target = this._list[lastIdx] as P9TypeBound;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9ForInit) {
          const target = this._list[lastIdx] as P9ForInit;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9EnhancedForControl) {
          const target = this._list[lastIdx] as P9EnhancedForControl;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9SwitchLabel) {
          const target = this._list[lastIdx] as P9SwitchLabel;
          target.type = obj;
        } else if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.type = obj;
        } else {
          this._u.error(`exitType: Stray type: ${context.text}`);
        }
      } else {
        this._u.error(`exitType: Type with no place to go: ${context.text}`);
      }
    } else {
      this._u.error(
        `exitType: Last element of the list is not P9Type object: ${context.text}`
      );
    }
  }

  enterPrimitiveType(context: PrimitiveTypeContext): void {
    this.debug(`PrimitiveType: ${context.text}`);
  }
  exitPrimitiveType(context: PrimitiveTypeContext): void {
    const lastIdx = this._list.length - 1;
    if (this._list[lastIdx] instanceof P9Type) {
      const target = this._list[lastIdx] as P9Type;
      target.type = context.text;
    } else if (this._list[lastIdx] instanceof P9CreatedName) {
      const target = this._list[lastIdx] as P9CreatedName;
      target.primitiveType = context.text;
    } else {
      this._u.error(
        `exitPrimitiveType: Primitive type with no place to go: ${context.text}`
      );
    }
  }

  enterClassType(context: ClassTypeContext): void {
    this.debug(`ClassType: ${context.text}`);
    this._list.push(new P9ClassType(context, this._u));
  }
  exitClassType(context: ClassTypeContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ClassType) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Type) {
          const target = this._list[lastIdx] as P9Type;
          target.type = obj;
        } else {
          this._u.error(`exitClassType: Stray classType: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitClassType: classType with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitClassType: Last element of the list is not P9ClassType object: ${context.text}`
      );
    }
  }

  enterTypeArguments(context: TypeArgumentsContext): void {
    this.debug(`TypeArgunemnts: ${context.text}`);
    this._list.push(new P9TypeArguments(this._u));
  }
  exitTypeArguments(context: TypeArgumentsContext) {
    const obj = this._list.pop();
    if (obj instanceof P9TypeArguments) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassType) {
          const target = this._list[lastIdx] as P9ClassType;
          target.typeArguments = obj;
        } else if (this._list[lastIdx] instanceof P9SuperSuffix) {
          const target = this._list[lastIdx] as P9SuperSuffix;
          target.typeArguments = obj;
        } else if (this._list[lastIdx] instanceof P9TypeArgumentsOrDiamond) {
          const target = this._list[lastIdx] as P9TypeArgumentsOrDiamond;
          target.typeArguments = obj;
        } else {
          this._u.error(
            `exitTypeArguments: Stray typeArguments: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exittypeArguments: typeArguments with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeArguments: Last element of the list is not P9TypeArguments object: ${context.text}`
      );
    }
  }

  enterFormalParameters(context: FormalParametersContext): void {
    this.debug(`FormalParameters: ${context.text}`);
    this._list.push(new P9FormalParameters(this._u));
  }
  exitFormalParameters(context: FormalParametersContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9FormalParameters) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FuncDecl) {
          const target = this._list[lastIdx] as P9FuncDecl;
          target.formalParameters = obj;
        } else if (this._list[lastIdx] instanceof P9AbstractMethodDeclaration) {
          const target = this._list[lastIdx] as P9AbstractMethodDeclaration;
          target.formalParameters = obj;
        } else if (this._list[lastIdx] instanceof P9ConstructorDeclaration) {
          const target = this._list[lastIdx] as P9ConstructorDeclaration;
          target.formalParameters = obj;
        } else {
          this._u.error(
            `exit FormalParameters: Stray formalParameters: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitFormalParameters: FormalParameters with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitFormalParameters: Last element of the list is not P9FormalParameters: ${context.text}`
      );
    }
  }

  enterFormalParameterList(context: FormalParameterListContext): void {
    this.debug(`FormalParameterList: ${context.text}`);
    this._list.push(new P9FormalParameterList(this._u));
  }
  exitFormalParameterList(context: FormalParameterListContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9FormalParameterList) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FormalParameters) {
          const target = this._list[lastIdx] as P9FormalParameters;
          target.formalParameterList = obj;
        } else {
          this._u.error(
            `exitFormalParameterList: Stray formalParameters: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitFormalParameterList: FormalParameters with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitFormalParameterList: Last element of the list is not P9FormalParameterList object: ${context.text}`
      );
    }
  }

  enterFormalParameter(context: FormalParameterContext): void {
    this.debug(`FormalParameter: ${context.text}`);
    this._list.push(new P9FormalParameter(this._u));
  }
  exitFormalParameter(context: FormalParameterContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9FormalParameter) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FormalParameterList) {
          const target = this._list[lastIdx] as P9FormalParameterList;
          target.push(obj);
        } else {
          this._u.error(
            `exitFormalParameter: Stray formal parameter: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitFormalParameter: Formal parameter with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitFormalParameter: Last element of the list is not P9FormalParameter: ${context.text}`
      );
    }
  }

  enterQualifiedNameList(context: QualifiedNameListContext): void {
    this.debug(`QualifiedNameList: ${context.text}`);
    this._list.push(new P9QualifiedNameList(this._u));
  }
  exitQualifiedNameList(context: QualifiedNameListContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9QualifiedNameList) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FuncDecl) {
          const target = this._list[lastIdx] as P9FuncDecl;
          target.qualifiedNameList = obj;
        } else if (this._list[lastIdx] instanceof P9AbstractMethodDeclaration) {
          const target = this._list[lastIdx] as P9AbstractMethodDeclaration;
          target.qualifiedNameList = obj;
        } else if (this._list[lastIdx] instanceof P9ConstructorDeclaration) {
          const target = this._list[lastIdx] as P9ConstructorDeclaration;
          target.qualifiedNameList = obj;
        } else {
          this._u.error(
            `exitQualifiedNameList: Stray qualifiedNameList: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitQualifiedNameList: QualifiedNameList with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitQualifiedNameList: Last element of the list is not P9QualifiedNameList object: ${context.text}`
      );
    }
  }

  enterBlock(context: BlockContext): void {
    this.debug(`Block: ${context.text}`);
    this._list.push(new P9Block(this._u));
  }
  exitBlock(context: BlockContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Block) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FuncDecl) {
          const target = this._list[lastIdx] as P9FuncDecl;
          target.block = obj;
        } else if (this._list[lastIdx] instanceof P9ClassBodyDeclaration) {
          const target = this._list[lastIdx] as P9ClassBodyDeclaration;
          target.block = obj;
        } else if (this._list[lastIdx] instanceof P9ConstructorDeclaration) {
          const target = this._list[lastIdx] as P9ConstructorDeclaration;
          target.block = obj;
        } else if (this._list[lastIdx] instanceof P9CatchClause) {
          const target = this._list[lastIdx] as P9CatchClause;
          target.block = obj;
        } else if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.block = obj;
        } else {
          this._u.error(`exitBlock: Stray block: ${context.text}`);
        }
      } else {
        this._u.error(`exitBlock: Block with no place to go: ${context.text}`);
      }
    } else {
      this._u.error(
        `exitBlock: Last element of the list is not P9Block object: ${context.text}`
      );
    }
  }

  enterBlockStatement(context: BlockStatementContext): void {
    this.debug(`BlockStatement: ${context.text}`);
    this._list.push(new P9BlockStatement(this._u));
  }
  exitBlockStatement(context: BlockStatementContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9BlockStatement) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Block) {
          const target = this._list[lastIdx] as P9Block;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9SwitchBlockStatementGroup) {
          const target = this._list[lastIdx] as P9SwitchBlockStatementGroup;
          target.push(obj);
        } else {
          this._u.error(
            `exitBlockStatement: Stray blockStatement: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitBlockStatement: BlockStatement with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitBlockStatement: Last element of the list is not P9BlockStatement object: ${context.text}`
      );
    }
  }

  enterClassDecl(context: ClassDeclContext): void {
    this.debug(`ClassDecl: ${context.text}`);
    this._list.push(new P9ClassDecl(context, this._u));
  }
  exitClassDecl(context: ClassDeclContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ClassDecl) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CompilationUnit) {
          const target = this._list[lastIdx] as P9CompilationUnit;
          target.unshift(obj.getLines());
        } else {
          this._u.error(`exitClassDecl: Stray classDecl: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitClassDecl: ClassDecl with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitClassDecl: Last element of the list is not P9ClassDecl object: ${context.text}`
      );
    }
  }

  enterClassModifier(context: ClassModifierContext): void {
    this.debug(`ClassModifier: ${context.text}`);
    this._list.push(new P9ClassModifier(context, this._u));
  }
  exitClassModifier(context: ClassModifierContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ClassModifier) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassDecl) {
          const target = this._list[lastIdx] as P9ClassDecl;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9AbstractMethodDeclaration) {
          const target = this._list[lastIdx] as P9AbstractMethodDeclaration;
          target.push(obj);
        } else {
          this._u.error(
            `exitClassModifier: Stray classModifier: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitClassModifier: ClassModifier with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitClassModifier: Last element of the list is not P9ClassModifier object: ${context.text}`
      );
    }
  }

  enterTypeParameters(context: TypeParametersContext): void {
    this.debug(`TypeParameters: ${context.text}`);
    this._list.push(new P9TypeParameters(this._u));
  }
  exitTypeParameters(context: TypeParametersContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9TypeParameters) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassDecl) {
          const target = this._list[lastIdx] as P9ClassDecl;
          target.typeParameters = obj;
        } else if (this._list[lastIdx] instanceof P9GenericMethodDeclaration) {
          const target = this._list[lastIdx] as P9GenericMethodDeclaration;
          target.typeParameters = obj;
        } else if (
          this._list[lastIdx] instanceof P9GenericConstructorDeclaration
        ) {
          const target = this._list[lastIdx] as P9GenericConstructorDeclaration;
          target.typeParameters = obj;
        } else {
          this._u.error(
            `exitTypeParameters: Stray typeParameters: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitTypeParameters: TypeParameters with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeParameters: Last element of the list is not P9TypeParameters object: ${context.text}`
      );
    }
  }

  enterTypeParameter(context: TypeParameterContext): void {
    this.debug(`TypeParameter: ${context.text}`);
    this._list.push(new P9TypeParameter(context, this._u));
  }
  exitTypeParameter(context: TypeParameterContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9TypeParameter) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9TypeParameters) {
          const target = this._list[lastIdx] as P9TypeParameters;
          target.push(obj);
        } else {
          this._u.error(
            `exitTypeParameter: Stray typeParameter: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitTypeParameter: TypeParameter with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeParameter: Last element of the list is not P9TypeParameter object: ${context.text}`
      );
    }
  }

  enterTypeBound(context: TypeBoundContext): void {
    this.debug(`TypeBound: ${context.text}`);
    this._list.push(new P9TypeBound(this._u));
  }
  exitTypeBound(context: TypeBoundContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9TypeBound) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9TypeParameter) {
          const target = this._list[lastIdx] as P9TypeParameter;
          target.typeBound = obj;
        } else if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.typeBound = obj;
        } else {
          this._u.error(`exitTypeBound: Stray typeBound: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitTypeBound: TypeBound with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeBound: Last element of the list is not P9TypeBound object: ${context.text}`
      );
    }
  }

  enterTypeList(context: TypeListContext): void {
    this.debug(`TypeList: ${context.text}`);
    this._list.push(new P9TypeList(this._u));
  }
  exitTypeList(context: TypeListContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9TypeList) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassDecl) {
          const target = this._list[lastIdx] as P9ClassDecl;
          target.typeList = obj;
        } else if (this._list[lastIdx] instanceof P9NonWildcardTypeArguments) {
          const target = this._list[lastIdx] as P9NonWildcardTypeArguments;
          target.typeList = obj;
        } else {
          this._u.error(`exitTypeList: Stray typeList: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitTypeList: TypeList with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeList: Last element of the list is not P9TypeList object: ${context.text}`
      );
    }
  }

  enterClassBody(context: ClassBodyContext): void {
    this.debug(`ClassBody: ${context.text}`);
    this._list.push(new P9ClassBody(this._u));
    this._inClassBody = true;
    this._classVarList.length = 0;
  }
  exitClassBody(context: ClassBodyContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ClassBody) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassDecl) {
          const target = this._list[lastIdx] as P9ClassDecl;
          target.classBody = obj;
        } else if (this._list[lastIdx] instanceof P9ClassCreatorRest) {
          const target = this._list[lastIdx] as P9ClassCreatorRest;
          target.classBody = obj;
        } else {
          this._u.error(`exitClassBody: Stray classBody: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitClassBody: ClassBody with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitClassBody: Last element of the list is not P9ClassBody object: ${context.text}`
      );
    }
    this._inClassBody = false;
  }

  enterClassBodyDeclaration(context: ClassBodyDeclarationContext): void {
    this.debug(`ClassBodyDeclaration: ${context.text}`);
    this._list.push(new P9ClassBodyDeclaration(context, this._u));
  }
  exitClassBodyDeclaration(context: ClassBodyDeclarationContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ClassBodyDeclaration) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassBody) {
          const target = this._list[lastIdx] as P9ClassBody;
          target.push(obj);
        } else {
          this._u.error(
            `exitClassBodyDeclaration: Stray classBodyDeclaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitClassBodyDeclaration: ClassBodyDeclaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitClassBodyDeclaration: Last element of the list is not P9ClassBodyDeclaration object: ${context.text}`
      );
    }
  }

  enterAbstractMethodDeclaration(
    context: AbstractMethodDeclarationContext
  ): void {
    this.debug(`AbstractMethodDeclaration: ${context.text}`);
    this._list.push(new P9AbstractMethodDeclaration(context, this._u));
  }
  exitAbstractMethodDeclaration(
    context: AbstractMethodDeclarationContext
  ): void {
    const obj = this._list.pop();
    if (obj instanceof P9AbstractMethodDeclaration) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassBodyDeclaration) {
          const target = this._list[lastIdx] as P9ClassBodyDeclaration;
          target.abstractMethodDeclaration = obj;
        } else {
          this._u.error(
            `exitAbstractMethodDeclaration: Stray abstractMethodDeclaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitAbstractMethodDeclaration: abstractMethodDeclaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitAbstractMethodDeclaration: Last element of the list is not P9AbstractMethodDeclaration object: ${context.text}`
      );
    }
  }

  enterMemberDeclaration(context: MemberDeclarationContext): void {
    this.debug(`MemberDeclaration: ${context.text}`);
    this._list.push(new P9MemberDeclaration(this._u));
  }
  exitMemberDeclaration(context: MemberDeclarationContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9MemberDeclaration) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ClassBodyDeclaration) {
          const target = this._list[lastIdx] as P9ClassBodyDeclaration;
          target.memberDeclaration = obj;
        } else {
          this._u.error(
            `exitMemberDeclaration: Stray memberDeclaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitMemberDeclaration: memberDeclaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitMemberDeclaration: Last element of the list is not P9MemberDeclaration object: ${context.text}`
      );
    }
  }

  enterGenericMethodDeclaration(
    context: GenericMethodDeclarationContext
  ): void {
    this.debug(`GenericMethodDeclaration: ${context.text}`);
    this._list.push(new P9GenericMethodDeclaration(this._u));
  }
  exitGenericMethodDeclaration(context: GenericMethodDeclarationContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9GenericMethodDeclaration) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9MemberDeclaration) {
          const target = this._list[lastIdx] as P9MemberDeclaration;
          target.genericMethodDeclaration = obj;
        } else {
          this._u.error(
            `exitGenericMethodDeclaration: Stray genericMethodDeclaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitGenericMethodDeclaration: genericMethodDeclaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitGenericMethodDeclaration: Last element of the list is not P9GenericMethodDeclaration object: ${context.text}`
      );
    }
  }

  enterConstructorDeclaration(context: ConstructorDeclarationContext): void {
    this.debug(`ConstructorDeclaration: ${context.text}`);
    this._list.push(new P9ConstructorDeclaration(context, this._u));
  }
  exitConstructorDeclaration(context: ConstructorDeclarationContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ConstructorDeclaration) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9MemberDeclaration) {
          const target = this._list[lastIdx] as P9MemberDeclaration;
          target.constructorDeclaration = obj;
        } else if (
          this._list[lastIdx] instanceof P9GenericConstructorDeclaration
        ) {
          const target = this._list[lastIdx] as P9GenericConstructorDeclaration;
          target.constructorDeclaration = obj;
        } else {
          this._u.error(
            `exitConstructorDeclaration: Stray constructorDeclaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitConstructorDeclaration: constructorDeclaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitConstructorDeclaration: Last element of the list is not P9ConstructorDeclaration object: ${context.text}`
      );
    }
  }

  enterGenericConstructorDeclaration(
    context: GenericConstructorDeclarationContext
  ): void {
    this.debug(`GenericConstructorDeclaration: ${context.text}`);
    this._list.push(new P9GenericConstructorDeclaration(this._u));
  }
  exitGenericConstructorDeclaration(
    context: GenericConstructorDeclarationContext
  ): void {
    const obj = this._list.pop();
    if (obj instanceof P9GenericConstructorDeclaration) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9MemberDeclaration) {
          const target = this._list[lastIdx] as P9MemberDeclaration;
          target.genericConstructorDeclaration = obj;
        } else {
          this._u.error(
            `exitGenericConstructorDeclaration: Stray genericConstructorDeclaration: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitGenericConstructorDeclaration: genericConstructorDeclaration with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitGenericConstructorDeclaration: Last element of the list is not P9GenericConstructorDeclaration object: ${context.text}`
      );
    }
  }

  enterStatement(context: StatementContext): void {
    this.debug(`Statement: ${context.text}`);
    this._list.push(new P9Statement(context, this._u));
  }
  exitStatement(context: StatementContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Statement) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CompilationUnit) {
          const target = this._list[lastIdx] as P9CompilationUnit;
          target.push(obj.getLines());
        } else if (this._list[lastIdx] instanceof P9BlockStatement) {
          const target = this._list[lastIdx] as P9BlockStatement;
          target.statement = obj;
        } else if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.push(obj);
        } else {
          this._u.error(`exitStatement: Stray statement: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitStatement: Statement with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitStatement: Last element of the list is not P9Statement object: ${context.text}`
      );
    }
  }

  enterForControl(context: ForControlContext): void {
    this.debug(`ForControl: ${context.text}`);
    this._list.push(new P9ForControl(this._u));
  }
  exitForControl(context: ForControlContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ForControl) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.forControl = obj;
        } else {
          this._u.error(`exitForControl: Stray for control: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitForControl: For control with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitForControl: Last element of the list is not P9ForStatement object: ${context.text}`
      );
    }
  }

  enterForInit(context: ForInitContext): void {
    this.debug(`ForInit: ${context.text}`);
    this._list.push(new P9ForInit(this._u));
  }
  exitForInit(context: ForInitContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ForInit) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ForControl) {
          const target = this._list[lastIdx] as P9ForControl;
          target.forInit = obj;
        } else {
          this._u.error(`exitForInit: Stray for init: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitForInit: For init with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitForInit: Last element of the list is not P9ForControl object: ${context.text}`
      );
    }
  }

  enterExpressionList(context: ExpressionListContext): void {
    this.debug(`ExpressionList: ${context.text}`);
    this._list.push(new P9ExpressionList(this._u));
  }
  exitExpressionList(context: ExpressionListContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ExpressionList) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9FuncCall) {
          const target = this._list[lastIdx] as P9FuncCall;
          target.expressionList = obj;
        } else if (this._list[lastIdx] instanceof P9ForControl) {
          const target = this._list[lastIdx] as P9ForControl;
          target.expressionList = obj;
        } else if (this._list[lastIdx] instanceof P9ForInit) {
          const target = this._list[lastIdx] as P9ForInit;
          target.expressionList = obj;
        } else if (this._list[lastIdx] instanceof P9Arguments) {
          const target = this._list[lastIdx] as P9Arguments;
          target.expressionList = obj;
        } else if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.expressionList = obj;
        } else {
          this._u.error(
            `exitExpressionList: Stray expression list: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitExpressionList: Expression list with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitExpressionList: Last element of the list is not P9ExpressionList object: ${context.text}`
      );
    }
  }

  enterEnhancedForControl(context: EnhancedForControlContext): void {
    this.debug(`EnhancedForControl: ${context.text}`);
    this._list.push(new P9EnhancedForControl(this._u));
  }
  exitEnhancedForControl(context: EnhancedForControlContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9EnhancedForControl) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9ForControl) {
          const target = this._list[lastIdx] as P9ForControl;
          target.enhancedForControl = obj;
        } else {
          this._u.error(
            `exitEnhancedForControl: Stray for enhanced for control: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitEnhancedForControl: Enhanced for control with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitEnhancedForControl: Last element of the list is not P9ForControl object: ${context.text}`
      );
    }
  }

  enterCatchClause(context: CatchClauseContext): void {
    this.debug(`CatchClause: ${context.text}`);
    this._list.push(new P9CatchClause(context, this._u));
  }
  exitCatchClause(context: CatchClauseContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9CatchClause) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.push(obj);
        } else {
          this._u.error(`exitCatchClause: Stray catch clause: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitCatchClause: Catch clause with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitCatchClause: Last element of the list is not P9TryStatement object: ${context.text}`
      );
    }
  }

  enterCatchType(context: CatchTypeContext): void {
    this.debug(`CatchType: ${context.text}`);
    this._list.push(new P9CatchType(this._u));
  }
  exitCatchType(context: CatchTypeContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9CatchType) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CatchClause) {
          const target = this._list[lastIdx] as P9CatchClause;
          target.catchType = obj;
        } else {
          this._u.error(`exitCatchClause: Stray catchClause: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitCatchClause: CatchClause with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitCatchClause: Last element of the list is not P9CatchClause object: ${context.text}`
      );
    }
  }

  enterSwitchBlockStatementGroup(
    context: SwitchBlockStatementGroupContext
  ): void {
    this.debug(`SwitchBlockStatementGroup: ${context.text}`);
    this._list.push(new P9SwitchBlockStatementGroup(this._u));
  }
  exitSwitchBlockStatementGroup(
    context: SwitchBlockStatementGroupContext
  ): void {
    const obj = this._list.pop();
    if (obj instanceof P9SwitchBlockStatementGroup) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.push(obj);
        } else {
          this._u.error(
            `exitSwitchBlockStatementGroup: Stray switch block statement group: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitSwitchBlockStatementGroup: Switch block statement group with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitSwitchBlockStatementGroup: Last element of the list is not P9SwitchStatement object: ${context.text}`
      );
    }
  }

  enterSwitchLabel(context: SwitchLabelContext): void {
    this.debug(`SwitchLabel: ${context.text}`);
    this._list.push(new P9SwitchLabel(context, this._u));
  }
  exitSwitchLabel(context: SwitchLabelContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9SwitchLabel) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9SwitchBlockStatementGroup) {
          const target = this._list[lastIdx] as P9SwitchBlockStatementGroup;
          target.push(obj);
        } else {
          this._u.error(`exitSwitchLabel: Stray switch label: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitSwitchLabel: Switch label with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitSwitchLabel: Last element of the list is not P9SwitchLabel object: ${context.text}`
      );
    }
  }

  enterExpression(context: ExpressionContext): void {
    if (context._bop !== undefined) {
      this.debug(`Expression: ${context.text} (bop: ${context._bop.text})`);
    } else {
      this.debug(`Expression: ${context.text}`);
    }

    this._list.push(new P9Expression(context, this._u));
  }
  exitExpression(context: ExpressionContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Expression) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9Primary) {
          const target = this._list[lastIdx] as P9Primary;
          target.expression = obj;
        } else if (this._list[lastIdx] instanceof P9ExpressionList) {
          const target = this._list[lastIdx] as P9ExpressionList;
          target.push(obj);
        } else if (this._list[lastIdx] instanceof P9VariableInitializer) {
          const target = this._list[lastIdx] as P9VariableInitializer;
          target.initializer = obj;
        } else if (this._list[lastIdx] instanceof P9ForControl) {
          const target = this._list[lastIdx] as P9ForControl;
          target.expression = obj;
        } else if (this._list[lastIdx] instanceof P9EnhancedForControl) {
          const target = this._list[lastIdx] as P9EnhancedForControl;
          target.expression = obj;
        } else if (this._list[lastIdx] instanceof P9Statement) {
          const target = this._list[lastIdx] as P9Statement;
          target.expression = obj;
        } else if (this._list[lastIdx] instanceof P9SwitchLabel) {
          const target = this._list[lastIdx] as P9SwitchLabel;
          target.expression = obj;
        } else if (this._list[lastIdx] instanceof P9ArrayCreatorRest) {
          const target = this._list[lastIdx] as P9ArrayCreatorRest;
          target.push(obj);
        } else {
          this._u.error(`exitExpression: Stray expression: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitExpression: Expression with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitExpression: Last element of the list is not P9Expression object: ${context.text}`
      );
    }
  }

  enterPrimary(context: PrimaryContext): void {
    this.debug(`Primary: ${context.text}`);
    this._list.push(new P9Primary(context, this._u));
  }
  exitPrimary(context: PrimaryContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Primary) {
      if (this._inClassBody) {
        obj.classVarList = this._classVarList;
      }

      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.primary = obj;
        } else {
          this._u.error(`exitPrimary: Stray primary: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitPrimary: Primary with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitPrimary: Last element of the list is not P9Primary object: ${context.text}`
      );
    }
  }

  enterLiteral(context: LiteralContext): void {
    this.debug(`Literal: ${context.text}`);
  }
  exitLiteral(context: LiteralContext): void {
    const lastIdx = this._list.length - 1;
    if (this._list[lastIdx] instanceof P9Primary) {
      const target = this._list[lastIdx] as P9Primary;
      target.literal = context.text;
    } else {
      this._u.error(
        `exitLiteral: The literal with no place to go: ${context.text}`
      );
    }
  }

  enterNonWildcardTypeArguments(
    context: NonWildcardTypeArgumentsContext
  ): void {
    this.debug(`NonWildcardTypeArguments: ${context.text}`);
    this._list.push(new P9NonWildcardTypeArguments(this._u));
  }
  exitNonWildcardTypeArguments(context: NonWildcardTypeArgumentsContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9NonWildcardTypeArguments) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Primary) {
          const target = this._list[lastIdx] as P9Primary;
          target.nonWildcardTypeArguments = obj;
        } else if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.nonWildcardTypeArguments = obj;
        } else if (this._list[lastIdx] instanceof P9Creator) {
          const target = this._list[lastIdx] as P9Creator;
          target.nonWildcardTypeArguments = obj;
        } else {
          this._u.error(
            `exitNonWildcardTypeArguments: Stray nonWildcardTypeArguments: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitNonWildcardTypeArguments: NonWildcardTypeArguments with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitNonWildcardTypeArguments: Last element of the list is not P9NonWildcardTypeArguments object: ${context.text}`
      );
    }
  }

  enterSuperSuffix(context: SuperSuffixContext): void {
    this.debug(`SuperSuffix: ${context.text}`);
    this._list.push(new P9SuperSuffix(context, this._u));
  }
  exitSuperSuffix(context: SuperSuffixContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9SuperSuffix) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.superSuffix = obj;
        } else if (
          this._list[lastIdx] instanceof P9ExplicitGenericInvocationSuffix
        ) {
          const target = this._list[
            lastIdx
          ] as P9ExplicitGenericInvocationSuffix;
          target.superSuffix = obj;
        } else {
          this._u.error(`exitSuperSuffix: Stray superSuffix: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitSuperSuffix: SuperSuffix with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitSuperSuffix: Last element of the list is not P9SuperSuffix object: ${context.text}`
      );
    }
  }

  enterExplicitGenericInvocationSuffix(
    context: ExplicitGenericInvocationSuffixContext
  ): void {
    this.debug(`ExplictGenericInvocationSuffix: ${context.text}`);
    this._list.push(new P9ExplicitGenericInvocationSuffix(context, this._u));
  }
  exitExplicitGenericInvocationSuffix(
    context: ExplicitGenericInvocationSuffixContext
  ): void {
    const obj = this._list.pop();
    if (obj instanceof P9ExplicitGenericInvocationSuffix) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.explicitGenericInvocationSuffix = obj;
        } else if (this._list[lastIdx] instanceof P9Primary) {
          const target = this._list[lastIdx] as P9Primary;
          target.explicitGenericInvocationSuffix = obj;
        } else {
          this._u.error(
            `exitExplicitGenericInvocationSuffix: Stray explicitGenericInvocationSuffix: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitExplicitGenericInvocationSuffix: ExplicitGenericInvocationSuffix with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitExplicitGenericInvocationSuffix: Last element of the list is not P9ExplicitGenericInvocationSuffix object: ${context.text}`
      );
    }
  }

  enterArguments(context: ArgumentsContext): void {
    this.debug(`Arguments: ${context.text}`);
    this._list.push(new P9Arguments(this._u));
  }
  exitArguments(context: ArgumentsContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Arguments) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Primary) {
          this.noop;
        } else if (this._list[lastIdx] instanceof P9ClassCreatorRest) {
          const target = this._list[lastIdx] as P9ClassCreatorRest;
          target.arguments = obj;
        } else if (this._list[lastIdx] instanceof P9SuperSuffix) {
          const target = this._list[lastIdx] as P9SuperSuffix;
          target.arguments = obj;
        } else if (
          this._list[lastIdx] instanceof P9ExplicitGenericInvocationSuffix
        ) {
          const target = this._list[
            lastIdx
          ] as P9ExplicitGenericInvocationSuffix;
          target.arguments = obj;
        } else {
          this._u.error(`exitArguments: Stray arguments: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitArguments: Arguments with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitArguments: Last element of the list is not P9Arguments object: ${context.text}`
      );
    }
  }

  enterFuncCall(context: FuncCallContext): void {
    this.debug(`FuncCall: ${context.text}`);
    this._list.push(new P9FuncCall(context, this._u));
  }
  exitFuncCall(context: FuncCallContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9FuncCall) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.funcCall = obj;
        } else {
          this._u.error(`exitFuncCall: Stray function call: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitFuncCall: Function call with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitFuncCall: Last element of the list is not P9FuncCall object: ${context.text}`
      );
    }
  }

  enterCreator(context: CreatorContext): void {
    this.debug(`Creator: ${context.text}`);
    this._list.push(new P9Creator(this._u));
  }
  exitCreator(context: CreatorContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9Creator) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Expression) {
          const target = this._list[lastIdx] as P9Expression;
          target.creator = obj;
        } else {
          this._u.error(`exitCreator: Stray creator: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitCreator: Creator with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitCreator: Last element of the list is not P9Creator object: ${context.text}`
      );
    }
  }

  enterCreatedName(context: CreatedNameContext): void {
    this.debug(`CreatedName: ${context.text}`);
    this._list.push(new P9CreatedName(this._u));
  }
  exitCreatedName(context: CreatedNameContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9CreatedName) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Creator) {
          const target = this._list[lastIdx] as P9Creator;
          target.createdName = obj;
        } else {
          this._u.error(`exitCreatedName: Stray createdName: ${context.text}`);
        }
      } else {
        this._u.error(
          `exitCreatedName: CreatedName with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitCreatedName: Last element of the list is not P9CreatedName object: ${context.text}`
      );
    }
  }

  enterCreatedNameUnit(context: CreatedNameUnitContext): void {
    this.debug(`CreatedNameUnit: ${context.text}`);
    this._list.push(new P9CreatedNameUnit(context, this._u));
  }
  exitCreatedNameUnit(context: CreatedNameUnitContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9CreatedNameUnit) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CreatedName) {
          const target = this._list[lastIdx] as P9CreatedName;
          target.push(obj);
        } else {
          this._u.error(
            `exitCreatedNameUnit: Stray createdNameUnit: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitCreatedNameUnit: CreatedNameUnit with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitCreatedNameUnit: Last element of the list is not P9CreatedNameUnit object: ${context.text}`
      );
    }
  }

  enterTypeArgumentsOrDiamond(context: TypeArgumentsOrDiamondContext): void {
    this.debug(`TypeArgumentsOrDiamond: ${context.text}`);
    this._list.push(new P9TypeArgumentsOrDiamond(context, this._u));
  }
  exitTypeArgumentsOrDiamond(context: TypeArgumentsOrDiamondContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9TypeArgumentsOrDiamond) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9CreatedNameUnit) {
          const target = this._list[lastIdx] as P9CreatedNameUnit;
          target.typeArgumentsOrDiamond = obj;
        } else {
          this._u.error(
            `exitTypeArgumentsOrDiamond: Stray typeArgumentsOrDiamond: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitTypeArgumentsOrDiamond: TypeArgumentsOrDiamond with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitTypeArgumentsOrDiamond: Last element of the list is not P9TypeArgumentsOrDiamond object: ${context.text}`
      );
    }
  }

  enterArrayCreatorRest(context: ArrayCreatorRestContext): void {
    this.debug(`ArrayCreatorRest: ${context.text}`);
    this._list.push(new P9ArrayCreatorRest(this._u));
  }
  exitArrayCreatorRest(context: ArrayCreatorRestContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ArrayCreatorRest) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Creator) {
          const target = this._list[lastIdx] as P9Creator;
          target.arrayCreatorRest = obj;
        } else {
          this._u.error(
            `exitArrayCreatorRest: Stray arrayCreatorrest: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitArrayCreatorRest: ArrayCreatorRest with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitArrayCreatorRest: Last element of the list is not P9ArrayCreatorRest object: ${context.text}`
      );
    }
  }

  enterClassCreatorRest(context: ClassCreatorRestContext): void {
    this.debug(`ClassCreatorRest: ${context.text}`);
    this._list.push(new P9ClassCreatorRest(this._u));
  }
  exitClassCreatorRest(context: ClassCreatorRestContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9ClassCreatorRest) {
      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9Creator) {
          const target = this._list[lastIdx] as P9Creator;
          target.classCreatorRest = obj;
        } else {
          this._u.error(
            `exitClassCreatorRest: Stray classCreatorRest: ${context.text}`
          );
        }
      } else {
        this._u.error(
          `exitClassCreatorRest: ClassCreatorRest with no place to go: ${context.text}`
        );
      }
    } else {
      this._u.error(
        `exitClassCreatorRest: Last element of the list is not P9ClassCreatorRest object: ${context.text}`
      );
    }
  }
}

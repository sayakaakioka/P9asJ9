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
  P9ArrayCreatorRest,
  P9CreatedName,
  P9CreatedNameUnit,
  P9Creator,
  P9ExplicitGenericInvocationSuffix,
  P9Expression,
  P9ExpressionList,
  P9NonWildcardTypeArguments,
  P9Primary,
  P9SuperSuffix,
  P9TypeArgumentsOrDiamond,
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

export class P9ParserListener implements ProcessingParserListener {
  private _list = new Array<P9Elements>();
  private _classVarList = new Array<string>();
  private readonly _debugFlag: boolean;
  private _inClassBody = false;

  constructor(private readonly _p9: P9) {
    this._debugFlag = _p9.debug;
  }

  noop(): void {}

  debug(str: string): void {
    if (this._debugFlag) {
      Utils.log(str, this._p9);
    }
  }

  enterCompilationUnit(context: CompilationUnitContext): void {
    this._list.push(new P9CompilationUnit(this._p9));
  }
  exitCompilationUnit(context: CompilationUnitContext): void {
    const obj = this._list.pop();
    if (!(obj instanceof P9CompilationUnit)) {
      Utils.error(
        "exitCompilationUnit: Last object is not an instance of P9CompilationUnit.",
        this._p9
      );
    } else {
      this._p9.transpiled = obj.toString();
    }
  }

  enterImportDeclaration(context: ImportDeclarationContext): void {
    this._list.push(new P9ImportDeclaration(this._p9));
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
      Utils.error(
        `exitQualifiedName: The qualifiedName with no place to go: ${context.text}`,
        this._p9
      );
    }
  }

  enterVarDecl(context: VarDeclContext): void {
    this.debug(`VarDecl: ${context.text}`);
    this._list.push(new P9VarDecl(context, this._p9));
  }
  exitVarDecl(context: VarDeclContext): void {
    const obj = this._list.pop();
    if (obj instanceof P9VarDecl) {
      if (this._inClassBody) {
        obj.classVarList = this._classVarList;
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
          Utils.error(
            `exitVarDecl: Stray variable declaration(s): ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitVarDecl: Variable declaration(s) with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitVarDecl: Last element of the list is not P9VarDecl object: ${context.text}`,
        this._p9
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
      Utils.error(
        `enterModifier: The modifier with no place to go: ${context.text}`,
        this._p9
      );
    }
  }

  enterVariableDeclarators(context: VariableDeclaratorsContext): void {
    this.debug(`VariableDeclators: ${context.text}`);
    this._list.push(new P9VariableDeclarators(this._p9));
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
          Utils.error(
            `exitVariableDeclarators: Stray variable declarators: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitVariableDeclarators: Variable declarators with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitVariableDeclarators: Last element of the list is not P9VariableDeclarators object: ${context.text}`,
        this._p9
      );
    }
  }

  enterVariableDeclarator(context: VariableDeclaratorContext): void {
    this.debug(`VariableDeclator: ${context.text}`);
    this._list.push(new P9VariableDeclarator(this._p9));
  }
  exitVariableDeclarator(context: VariableDeclaratorContext): void {
    const obj = this._list.pop();

    if (obj instanceof P9VariableDeclarator) {
      if (this._inClassBody) {
        this._classVarList.push(obj.getId());
      }

      const lastIdx = this._list.length - 1;
      if (lastIdx >= 0) {
        if (this._list[lastIdx] instanceof P9VariableDeclarators) {
          const target = this._list[lastIdx] as P9VariableDeclarators;
          target.push(obj);
        } else {
          Utils.error(
            `exitVariableDeclarator: Stray variable declarator: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitVariableDeclarator: Variable declarator with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitVariableDeclarator: Last element of the list is not P9VariableDeclarator object: ${context.text}`,
        this._p9
      );
    }
  }

  enterVariableDeclaratorId(context: VariableDeclaratorIdContext): void {
    this.debug(`VariableDeclaratorId: ${context.text}`);
    this._list.push(new P9VariableDeclaratorId(context, this._p9));
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
          Utils.error(
            `exitVariableDeclaratorId: Stray variableDeclaratorId: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitVariableDeclaratorId: VariabledeclaratorId with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitVariableDeclaratorId: Last element of the list is not P9VariableDeclaratorId object: ${context.text}`,
        this._p9
      );
    }
  }

  enterVariableInitializer(context: VariableInitializerContext): void {
    this.debug(`VariableInitializer: ${context.text}`);
    this._list.push(new P9VariableInitializer(this._p9));
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
          Utils.error(
            `exitVariableInitializer: Stray variable initializer: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitVariableInitializer: Variable initializer with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitVariableInitializer: Last element of the list is not P9VariableInitializer object: ${context.text}`,
        this._p9
      );
    }
  }

  enterArrayInitializer(context: ArrayInitializerContext): void {
    this.debug(`ArrayInitializer: ${context.text}`);
    this._list.push(new P9ArrayInitializer(this._p9));
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
          Utils.error(
            `exitArrayInitializer: Stray array initializer: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitArrayInitializer: Array initializer with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitArrayInitializer: Last element of the list is not P9ArrayInitializer object: ${context.text}`,
        this._p9
      );
    }
  }

  enterFuncDecl(context: FuncDeclContext): void {
    this.debug(`FuncDecl: ${context.text}`);
    this._list.push(new P9FuncDecl(context, this._p9));
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
          Utils.error(
            `exitFuncDecl: Stray function declaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitFuncDecl: Function declaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitFuncDecl: Last element of the list is not P9FuncDecl object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeOrVoid(context: TypeOrVoidContext): void {
    this.debug(`TypeOrVoid: ${context.text}`);
    this._list.push(new P9TypeOrVoid(context, this._p9));
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
          Utils.error(
            `exitTypeOrVoid: Stray typeOrVoid: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitTypeOrVoid: TypeOrVoid with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeOrVoid: Last element of the list is not P9TypeOrVoid object: ${context.text}`,
        this._p9
      );
    }
  }

  enterType(context: TypeContext): void {
    this.debug(`Type: ${context.text}`);
    this._list.push(new P9Type(context, this._p9));
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
          Utils.error(`exitType: Stray type: ${context.text}`, this._p9);
        }
      } else {
        Utils.error(
          `exitType: Type with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitType: Last element of the list is not P9Type object: ${context.text}`,
        this._p9
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
      Utils.error(
        `exitPrimitiveType: Primitive type with no place to go: ${context.text}`,
        this._p9
      );
    }
  }

  enterClassType(context: ClassTypeContext): void {
    this.debug(`ClassType: ${context.text}`);
    this._list.push(new P9ClassType(context, this._p9));
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
          Utils.error(
            `exitClassType: Stray classType: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitClassType: classType with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitClassType: Last element of the list is not P9ClassType object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeArguments(context: TypeArgumentsContext): void {
    this.debug(`TypeArgunemnts: ${context.text}`);
    this._list.push(new P9TypeArguments(this._p9));
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
          Utils.error(
            `exitTypeArguments: Stray typeArguments: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exittypeArguments: typeArguments with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeArguments: Last element of the list is not P9TypeArguments object: ${context.text}`,
        this._p9
      );
    }
  }

  enterFormalParameters(context: FormalParametersContext): void {
    this.debug(`FormalParameters: ${context.text}`);
    this._list.push(new P9FormalParameters(this._p9));
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
          Utils.error(
            `exit FormalParameters: Stray formalParameters: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitFormalParameters: FormalParameters with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitFormalParameters: Last element of the list is not P9FormalParameters: ${context.text}`,
        this._p9
      );
    }
  }

  enterFormalParameterList(context: FormalParameterListContext): void {
    this.debug(`FormalParameterList: ${context.text}`);
    this._list.push(new P9FormalParameterList(this._p9));
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
          Utils.error(
            `exitFormalParameterList: Stray formalParameters: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitFormalParameterList: FormalParameters with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitFormalParameterList: Last element of the list is not P9FormalParameterList object: ${context.text}`,
        this._p9
      );
    }
  }

  enterFormalParameter(context: FormalParameterContext): void {
    this.debug(`FormalParameter: ${context.text}`);
    this._list.push(new P9FormalParameter(this._p9));
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
          Utils.error(
            `exitFormalParameter: Stray formal parameter: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitFormalParameter: Formal parameter with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitFormalParameter: Last element of the list is not P9FormalParameter: ${context.text}`,
        this._p9
      );
    }
  }

  enterQualifiedNameList(context: QualifiedNameListContext): void {
    this.debug(`QualifiedNameList: ${context.text}`);
    this._list.push(new P9QualifiedNameList(this._p9));
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
          Utils.error(
            `exitQualifiedNameList: Stray qualifiedNameList: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitQualifiedNameList: QualifiedNameList with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitQualifiedNameList: Last element of the list is not P9QualifiedNameList object: ${context.text}`,
        this._p9
      );
    }
  }

  enterBlock(context: BlockContext): void {
    this.debug(`Block: ${context.text}`);
    this._list.push(new P9Block(this._p9));
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
          Utils.error(`exitBlock: Stray block: ${context.text}`, this._p9);
        }
      } else {
        Utils.error(
          `exitBlock: Block with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitBlock: Last element of the list is not P9Block object: ${context.text}`,
        this._p9
      );
    }
  }

  enterBlockStatement(context: BlockStatementContext): void {
    this.debug(`BlockStatement: ${context.text}`);
    this._list.push(new P9BlockStatement(this._p9));
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
          Utils.error(
            `exitBlockStatement: Stray blockStatement: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitBlockStatement: BlockStatement with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitBlockStatement: Last element of the list is not P9BlockStatement object: ${context.text}`,
        this._p9
      );
    }
  }

  enterClassDecl(context: ClassDeclContext): void {
    this.debug(`ClassDecl: ${context.text}`);
    this._list.push(new P9ClassDecl(context, this._p9));
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
          Utils.error(
            `exitClassDecl: Stray classDecl: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitClassDecl: ClassDecl with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitClassDecl: Last element of the list is not P9ClassDecl object: ${context.text}`,
        this._p9
      );
    }
  }

  enterClassModifier(context: ClassModifierContext): void {
    this.debug(`ClassModifier: ${context.text}`);
    this._list.push(new P9ClassModifier(context, this._p9));
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
          Utils.error(
            `exitClassModifier: Stray classModifier: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitClassModifier: ClassModifier with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitClassModifier: Last element of the list is not P9ClassModifier object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeParameters(context: TypeParametersContext): void {
    this.debug(`TypeParameters: ${context.text}`);
    this._list.push(new P9TypeParameters(this._p9));
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
          Utils.error(
            `exitTypeParameters: Stray typeParameters: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitTypeParameters: TypeParameters with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeParameters: Last element of the list is not P9TypeParameters object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeParameter(context: TypeParameterContext): void {
    this.debug(`TypeParameter: ${context.text}`);
    this._list.push(new P9TypeParameter(context, this._p9));
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
          Utils.error(
            `exitTypeParameter: Stray typeParameter: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitTypeParameter: TypeParameter with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeParameter: Last element of the list is not P9TypeParameter object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeBound(context: TypeBoundContext): void {
    this.debug(`TypeBound: ${context.text}`);
    this._list.push(new P9TypeBound(this._p9));
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
          Utils.error(
            `exitTypeBound: Stray typeBound: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitTypeBound: TypeBound with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeBound: Last element of the list is not P9TypeBound object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeList(context: TypeListContext): void {
    this.debug(`TypeList: ${context.text}`);
    this._list.push(new P9TypeList(this._p9));
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
          Utils.error(
            `exitTypeList: Stray typeList: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitTypeList: TypeList with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeList: Last element of the list is not P9TypeList object: ${context.text}`,
        this._p9
      );
    }
  }

  enterClassBody(context: ClassBodyContext): void {
    this.debug(`ClassBody: ${context.text}`);
    this._list.push(new P9ClassBody(this._p9));
    this._inClassBody = true;
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
          Utils.error(
            `exitClassBody: Stray classBody: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitClassBody: ClassBody with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitClassBody: Last element of the list is not P9ClassBody object: ${context.text}`,
        this._p9
      );
    }
    this._inClassBody = false;
    this._classVarList.length = 0;
  }

  enterClassBodyDeclaration(context: ClassBodyDeclarationContext): void {
    this.debug(`ClassBodyDeclaration: ${context.text}`);
    this._list.push(new P9ClassBodyDeclaration(context, this._p9));
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
          Utils.error(
            `exitClassBodyDeclaration: Stray classBodyDeclaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitClassBodyDeclaration: ClassBodyDeclaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitClassBodyDeclaration: Last element of the list is not P9ClassBodyDeclaration object: ${context.text}`,
        this._p9
      );
    }
  }

  enterAbstractMethodDeclaration(
    context: AbstractMethodDeclarationContext
  ): void {
    this.debug(`AbstractMethodDeclaration: ${context.text}`);
    this._list.push(new P9AbstractMethodDeclaration(context, this._p9));
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
          Utils.error(
            `exitAbstractMethodDeclaration: Stray abstractMethodDeclaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitAbstractMethodDeclaration: abstractMethodDeclaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitAbstractMethodDeclaration: Last element of the list is not P9AbstractMethodDeclaration object: ${context.text}`,
        this._p9
      );
    }
  }

  enterMemberDeclaration(context: MemberDeclarationContext): void {
    this.debug(`MemberDeclaration: ${context.text}`);
    this._list.push(new P9MemberDeclaration(this._p9));
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
          Utils.error(
            `exitMemberDeclaration: Stray memberDeclaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitMemberDeclaration: memberDeclaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitMemberDeclaration: Last element of the list is not P9MemberDeclaration object: ${context.text}`,
        this._p9
      );
    }
  }

  enterGenericMethodDeclaration(
    context: GenericMethodDeclarationContext
  ): void {
    this.debug(`GenericMethodDeclaration: ${context.text}`);
    this._list.push(new P9GenericMethodDeclaration(this._p9));
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
          Utils.error(
            `exitGenericMethodDeclaration: Stray genericMethodDeclaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitGenericMethodDeclaration: genericMethodDeclaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitGenericMethodDeclaration: Last element of the list is not P9GenericMethodDeclaration object: ${context.text}`,
        this._p9
      );
    }
  }

  enterConstructorDeclaration(context: ConstructorDeclarationContext): void {
    this.debug(`ConstructorDeclaration: ${context.text}`);
    this._list.push(new P9ConstructorDeclaration(context, this._p9));
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
          Utils.error(
            `exitConstructorDeclaration: Stray constructorDeclaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitConstructorDeclaration: constructorDeclaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitConstructorDeclaration: Last element of the list is not P9ConstructorDeclaration object: ${context.text}`,
        this._p9
      );
    }
  }

  enterGenericConstructorDeclaration(
    context: GenericConstructorDeclarationContext
  ): void {
    this.debug(`GenericConstructorDeclaration: ${context.text}`);
    this._list.push(new P9GenericConstructorDeclaration(this._p9));
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
          Utils.error(
            `exitGenericConstructorDeclaration: Stray genericConstructorDeclaration: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitGenericConstructorDeclaration: genericConstructorDeclaration with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitGenericConstructorDeclaration: Last element of the list is not P9GenericConstructorDeclaration object: ${context.text}`,
        this._p9
      );
    }
  }

  enterStatement(context: StatementContext): void {
    this.debug(`Statement: ${context.text}`);
    this._list.push(new P9Statement(context, this._p9));
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
          Utils.error(
            `exitStatement: Stray statement: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitStatement: Statement with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitStatement: Last element of the list is not P9Statement object: ${context.text}`,
        this._p9
      );
    }
  }

  enterForControl(context: ForControlContext): void {
    this.debug(`ForControl: ${context.text}`);
    this._list.push(new P9ForControl(this._p9));
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
          Utils.error(
            `exitForControl: Stray for control: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitForControl: For control with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitForControl: Last element of the list is not P9ForStatement object: ${context.text}`,
        this._p9
      );
    }
  }

  enterForInit(context: ForInitContext): void {
    this.debug(`ForInit: ${context.text}`);
    this._list.push(new P9ForInit(this._p9));
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
          Utils.error(`exitForInit: Stray for init: ${context.text}`, this._p9);
        }
      } else {
        Utils.error(
          `exitForInit: For init with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitForInit: Last element of the list is not P9ForControl object: ${context.text}`,
        this._p9
      );
    }
  }

  enterExpressionList(context: ExpressionListContext): void {
    this.debug(`ExpressionList: ${context.text}`);
    this._list.push(new P9ExpressionList(this._p9));
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
          Utils.error(
            `exitExpressionList: Stray expression list: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitExpressionList: Expression list with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitExpressionList: Last element of the list is not P9ExpressionList object: ${context.text}`,
        this._p9
      );
    }
  }

  enterEnhancedForControl(context: EnhancedForControlContext): void {
    this.debug(`EnhancedForControl: ${context.text}`);
    this._list.push(new P9EnhancedForControl(this._p9));
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
          Utils.error(
            `exitEnhancedForControl: Stray for enhanced for control: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitEnhancedForControl: Enhanced for control with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitEnhancedForControl: Last element of the list is not P9ForControl object: ${context.text}`,
        this._p9
      );
    }
  }

  enterCatchClause(context: CatchClauseContext): void {
    this.debug(`CatchClause: ${context.text}`);
    this._list.push(new P9CatchClause(context, this._p9));
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
          Utils.error(
            `exitCatchClause: Stray catch clause: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitCatchClause: Catch clause with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitCatchClause: Last element of the list is not P9TryStatement object: ${context.text}`,
        this._p9
      );
    }
  }

  enterCatchType(context: CatchTypeContext): void {
    this.debug(`CatchType: ${context.text}`);
    this._list.push(new P9CatchType(this._p9));
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
          Utils.error(
            `exitCatchClause: Stray catchClause: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitCatchClause: CatchClause with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitCatchClause: Last element of the list is not P9CatchClause object: ${context.text}`,
        this._p9
      );
    }
  }

  enterSwitchBlockStatementGroup(
    context: SwitchBlockStatementGroupContext
  ): void {
    this.debug(`SwitchBlockStatementGroup: ${context.text}`);
    this._list.push(new P9SwitchBlockStatementGroup(this._p9));
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
          Utils.error(
            `exitSwitchBlockStatementGroup: Stray switch block statement group: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitSwitchBlockStatementGroup: Switch block statement group with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitSwitchBlockStatementGroup: Last element of the list is not P9SwitchStatement object: ${context.text}`,
        this._p9
      );
    }
  }

  enterSwitchLabel(context: SwitchLabelContext): void {
    this.debug(`SwitchLabel: ${context.text}`);
    this._list.push(new P9SwitchLabel(context, this._p9));
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
          Utils.error(
            `exitSwitchLabel: Stray switch label: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitSwitchLabel: Switch label with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitSwitchLabel: Last element of the list is not P9SwitchLabel object: ${context.text}`,
        this._p9
      );
    }
  }

  enterExpression(context: ExpressionContext): void {
    if (context._bop !== undefined) {
      this.debug(`Expression: ${context.text} (bop: ${context._bop.text})`);
    } else {
      this.debug(`Expression: ${context.text}`);
    }

    this._list.push(new P9Expression(context, this._p9));
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
          Utils.error(
            `exitExpression: Stray expression: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitExpression: Expression with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitExpression: Last element of the list is not P9Expression object: ${context.text}`,
        this._p9
      );
    }
  }

  enterPrimary(context: PrimaryContext): void {
    this.debug(`Primary: ${context.text}`);
    this._list.push(new P9Primary(context, this._p9));
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
          Utils.error(`exitPrimary: Stray primary: ${context.text}`, this._p9);
        }
      } else {
        Utils.error(
          `exitPrimary: Primary with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitPrimary: Last element of the list is not P9Primary object: ${context.text}`,
        this._p9
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
      Utils.error(
        `exitLiteral: The literal with no place to go: ${context.text}`,
        this._p9
      );
    }
  }

  enterNonWildcardTypeArguments(
    context: NonWildcardTypeArgumentsContext
  ): void {
    this.debug(`NonWildcardTypeArguments: ${context.text}`);
    this._list.push(new P9NonWildcardTypeArguments(this._p9));
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
          Utils.error(
            `exitNonWildcardTypeArguments: Stray nonWildcardTypeArguments: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitNonWildcardTypeArguments: NonWildcardTypeArguments with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitNonWildcardTypeArguments: Last element of the list is not P9NonWildcardTypeArguments object: ${context.text}`,
        this._p9
      );
    }
  }

  enterSuperSuffix(context: SuperSuffixContext): void {
    this.debug(`SuperSuffix: ${context.text}`);
    this._list.push(new P9SuperSuffix(context, this._p9));
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
          Utils.error(
            `exitSuperSuffix: Stray superSuffix: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitSuperSuffix: SuperSuffix with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitSuperSuffix: Last element of the list is not P9SuperSuffix object: ${context.text}`,
        this._p9
      );
    }
  }

  enterExplicitGenericInvocationSuffix(
    context: ExplicitGenericInvocationSuffixContext
  ): void {
    this.debug(`ExplictGenericInvocationSuffix: ${context.text}`);
    this._list.push(new P9ExplicitGenericInvocationSuffix(context, this._p9));
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
          Utils.error(
            `exitExplicitGenericInvocationSuffix: Stray explicitGenericInvocationSuffix: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitExplicitGenericInvocationSuffix: ExplicitGenericInvocationSuffix with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitExplicitGenericInvocationSuffix: Last element of the list is not P9ExplicitGenericInvocationSuffix object: ${context.text}`,
        this._p9
      );
    }
  }

  enterArguments(context: ArgumentsContext): void {
    this.debug(`Arguments: ${context.text}`);
    this._list.push(new P9Arguments(this._p9));
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
          Utils.error(
            `exitArguments: Stray arguments: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitArguments: Arguments with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitArguments: Last element of the list is not P9Arguments object: ${context.text}`,
        this._p9
      );
    }
  }

  enterFuncCall(context: FuncCallContext): void {
    this.debug(`FuncCall: ${context.text}`);
    this._list.push(new P9FuncCall(context, this._p9));
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
          Utils.error(
            `exitFuncCall: Stray function call: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitFuncCall: Function call with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitFuncCall: Last element of the list is not P9FuncCall object: ${context.text}`,
        this._p9
      );
    }
  }

  enterCreator(context: CreatorContext): void {
    this.debug(`Creator: ${context.text}`);
    this._list.push(new P9Creator(this._p9));
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
          Utils.error(`exitCreator: Stray creator: ${context.text}`, this._p9);
        }
      } else {
        Utils.error(
          `exitCreator: Creator with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitCreator: Last element of the list is not P9Creator object: ${context.text}`,
        this._p9
      );
    }
  }

  enterCreatedName(context: CreatedNameContext): void {
    this.debug(`CreatedName: ${context.text}`);
    this._list.push(new P9CreatedName(this._p9));
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
          Utils.error(
            `exitCreatedName: Stray createdName: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitCreatedName: CreatedName with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitCreatedName: Last element of the list is not P9CreatedName object: ${context.text}`,
        this._p9
      );
    }
  }

  enterCreatedNameUnit(context: CreatedNameUnitContext): void {
    this.debug(`CreatedNameUnit: ${context.text}`);
    this._list.push(new P9CreatedNameUnit(context, this._p9));
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
          Utils.error(
            `exitCreatedNameUnit: Stray createdNameUnit: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitCreatedNameUnit: CreatedNameUnit with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitCreatedNameUnit: Last element of the list is not P9CreatedNameUnit object: ${context.text}`,
        this._p9
      );
    }
  }

  enterTypeArgumentsOrDiamond(context: TypeArgumentsOrDiamondContext): void {
    this.debug(`TypeArgumentsOrDiamond: ${context.text}`);
    this._list.push(new P9TypeArgumentsOrDiamond(context, this._p9));
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
          Utils.error(
            `exitTypeArgumentsOrDiamond: Stray typeArgumentsOrDiamond: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitTypeArgumentsOrDiamond: TypeArgumentsOrDiamond with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitTypeArgumentsOrDiamond: Last element of the list is not P9TypeArgumentsOrDiamond object: ${context.text}`,
        this._p9
      );
    }
  }

  enterArrayCreatorRest(context: ArrayCreatorRestContext): void {
    this.debug(`ArrayCreatorRest: ${context.text}`);
    this._list.push(new P9ArrayCreatorRest(this._p9));
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
          Utils.error(
            `exitArrayCreatorRest: Stray arrayCreatorrest: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitArrayCreatorRest: ArrayCreatorRest with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitArrayCreatorRest: Last element of the list is not P9ArrayCreatorRest object: ${context.text}`,
        this._p9
      );
    }
  }

  enterClassCreatorRest(context: ClassCreatorRestContext): void {
    this.debug(`ClassCreatorRest: ${context.text}`);
    this._list.push(new P9ClassCreatorRest(this._p9));
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
          Utils.error(
            `exitClassCreatorRest: Stray classCreatorRest: ${context.text}`,
            this._p9
          );
        }
      } else {
        Utils.error(
          `exitClassCreatorRest: ClassCreatorRest with no place to go: ${context.text}`,
          this._p9
        );
      }
    } else {
      Utils.error(
        `exitClassCreatorRest: Last element of the list is not P9ClassCreatorRest object: ${context.text}`,
        this._p9
      );
    }
  }
}

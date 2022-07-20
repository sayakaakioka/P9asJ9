import { P9 } from "P9";
import {
  AbstractMethodDeclarationContext,
  ClassBodyDeclarationContext,
  ClassDeclContext,
  ClassModifierContext,
  ClassTypeContext,
  ConstructorDeclarationContext,
  TypeParameterContext,
} from "P9Parser/ProcessingParser";
import { Utils } from "../Utils";
import { P9Block } from "./P9Block";
import { P9Elements } from "./P9Elements";
import { P9Arguments } from "./P9Expression";
import { P9FormalParameters } from "./P9FormalParameter";
import { P9FuncDecl } from "./P9Function";
import { P9Type, P9TypeOrVoid, P9VarDecl } from "./P9Variable";

export class P9ImportDeclaration implements P9Elements {
  constructor(private readonly _p: P9) {}

  public getLines(): Array<string> {
    return new Array<string>();
  }

  public toString(): string {
    return "";
  }
}

export class P9QualifiedNameList implements P9Elements {
  private _qualifiedNameList = new Array<string>();

  constructor(private readonly _p: P9) {}

  public push(str: string): void {
    this._qualifiedNameList.push(str);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return this._qualifiedNameList.join(", ");
  }
}

export class P9ClassType implements P9Elements {
  private _typeArguments: P9TypeArguments | undefined;
  private _qualifiedName: string | undefined;

  constructor(
    private readonly _context: ClassTypeContext,
    private readonly _p: P9
  ) {}

  public set typeArguments(obj: P9TypeArguments) {
    this._typeArguments = obj;
  }

  public set qualifiedName(str: string) {
    this._qualifiedName = str;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context._id !== undefined) {
      if (this._typeArguments !== undefined) {
        return `${this._context._id.text} ${this._typeArguments.toString()}`;
      } else {
        return `${this._context._id.text}`;
      }
    }

    if (this._qualifiedName !== undefined) {
      return `${this._qualifiedName}`;
    }

    Utils.error(
      "P9TypeArguments: toString(): typeArguments expects id.",
      this._p
    );
    return "";
  }
}

export class P9TypeArguments implements P9Elements {
  private _typeList = new Array<P9Type>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9Type): void {
    this._typeList.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return `<${this._typeList
      .map(function (e) {
        return e.toString();
      })
      .join(", ")}>`;
  }
}

export class P9ClassDecl implements P9Elements {
  private _classModifierList = new Array<P9ClassModifier>();
  private _typeParameters: P9TypeParameters | undefined;
  private _type: P9Type | undefined;
  private _typeList: P9TypeList | undefined;
  private _classBody: P9ClassBody | undefined;

  constructor(
    private readonly _context: ClassDeclContext,
    private readonly _p: P9
  ) {}

  public push(obj: P9ClassModifier): void {
    this._classModifierList.push(obj);
  }

  public set typeParameters(obj: P9TypeParameters) {
    this._typeParameters = obj;
  }

  public set type(obj: P9Type) {
    this._type = obj;
  }

  public set typeList(obj: P9TypeList) {
    this._typeList = obj;
  }

  public set classBody(obj: P9ClassBody) {
    this._classBody = obj;
  }

  public getLines(): Array<string> {
    const id = this._context._id.text;

    if (id !== undefined && this._classBody !== undefined) {
      let lines;
      if (this._typeParameters !== undefined) {
        lines = new Array<string>(
          `class ${id} ${this._typeParameters.toString()}`
        );
      } else {
        lines = new Array<string>(`class ${id}`);
      }

      if (this._context.EXTENDS()) {
        if (this._type !== undefined) {
          lines.push(`extends ${this._type.toString()}`);
        } else {
          Utils.error(
            "P9ClassDecl: getLines(): classDecl expects type.",
            this._p
          );
        }
      }

      if (this._context.IMPLEMENTS()) {
        if (this._typeList !== undefined) {
          lines.push(`implements ${this._typeList.toString()}`);
        } else {
          Utils.error(
            "P9ClassDecl: getLines(): classDecl expects typeList.",
            this._p
          );
        }
      }

      lines = Utils.wrap(lines, this._classBody.getLines());
      return lines;
    }

    Utils.error(
      "P9ClassDecl: getLines(): classDecl expects id and classBody.",
      this._p
    );
    return new Array<string>("");
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9ClassModifier implements P9Elements {
  private _modifier: string | undefined;

  constructor(
    private readonly _context: ClassModifierContext,
    private readonly _p: P9
  ) {}

  public set modifier(str: string) {
    this._modifier = str;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    if (this._context.ABSTRACT()) {
      return "abstract";
    } else {
      return "";
    }
  }
}

export class P9TypeParameters implements P9Elements {
  private _list = new Array<P9TypeParameter>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9TypeParameter): void {
    this._list.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return `<${this._list
      .map(function (e) {
        return e.toString();
      })
      .join(", ")}>`;
  }
}

export class P9TypeParameter implements P9Elements {
  private _typeBound: P9TypeBound | undefined;

  constructor(
    private readonly _context: TypeParameterContext,
    private readonly _p: P9
  ) {}

  public set typeBound(obj: P9TypeBound) {
    this._typeBound = obj;
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    const id = this._context._id.text;

    if (id !== undefined) {
      if (this._context.EXTENDS()) {
        if (this._typeBound !== undefined) {
          return `${id} extends ${this._typeBound.toString()}`;
        } else {
          Utils.error(
            "P9TypeParameter: getLines(): typeParameter expects typeBound.",
            this._p
          );
        }
      }
      return id;
    }

    Utils.error(
      "P9TypeParameter: getLines(): typeParameter expects id.",
      this._p
    );
    return "";
  }
}

export class P9TypeBound implements P9Elements {
  private _typeList = Array<P9Type>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9Type): void {
    this._typeList.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return this._typeList
      .map(function (e) {
        return e.toString();
      })
      .join(" & ");
  }
}

export class P9TypeList implements P9Elements {
  private _typeList = Array<P9Type>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9Type): void {
    this._typeList.push(obj);
  }

  public getLines(): Array<string> {
    return new Array<string>(this.toString());
  }

  public toString(): string {
    return this._typeList
      .map(function (e) {
        return e.toString();
      })
      .join(", ");
  }
}

export class P9ClassBody implements P9Elements {
  private _classBodyDeclarationList = new Array<P9ClassBodyDeclaration>();

  constructor(private readonly _p: P9) {}

  public push(obj: P9ClassBodyDeclaration): void {
    this._classBodyDeclarationList.push(obj);
  }

  public getLines(): Array<string> {
    let lines = this._classBodyDeclarationList
      .flatMap(function (e) {
        return e.getLines();
      })
      .map(function (e) {
        return `\t${e.toString()}`;
      });
    return lines;
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9ClassBodyDeclaration implements P9Elements {
  private _block: P9Block | undefined;
  private _modifier: string | undefined;
  private _memberDeclaration: P9MemberDeclaration | undefined;
  private _abstractMethodDeclaration: P9AbstractMethodDeclaration | undefined;

  constructor(
    private readonly _context: ClassBodyDeclarationContext,
    private readonly _p: P9
  ) {}

  public set block(obj: P9Block) {
    this._block = obj;
  }

  public set modifier(str: string) {
    this._modifier = str;
  }

  public set memberDeclaration(obj: P9MemberDeclaration) {
    this._memberDeclaration = obj;
  }

  public set abstractMethodDeclaration(obj: P9AbstractMethodDeclaration) {
    this._abstractMethodDeclaration = obj;
  }

  public getLines(): Array<string> {
    if (this._context.SEMI()) {
      return new Array<string>(";");
    }

    if (this._block !== undefined) {
      if (this._context.STATIC()) {
        let lines = new Array<string>("static");
        lines = Utils.wrap(lines, this._block.getLines());
        return lines;
      } else {
        return Utils.wrap(undefined, this._block.getLines());
      }
    }

    if (this._memberDeclaration !== undefined) {
      let ret = this._memberDeclaration.getLines();
      ret[0] = `static ${ret[0]}`;
      return ret;
    }

    if (this._abstractMethodDeclaration !== undefined) {
      return this._abstractMethodDeclaration.getLines();
    }

    Utils.error(
      "P9ClassBodyDeclaration: getLines(): classBodyDeclaration expects block, memberDeclaration, or abstractMethodDeclaration.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9AbstractMethodDeclaration implements P9Elements {
  private _classModifilerList = Array<P9ClassModifier>();
  private _modifierList = Array<string>();
  private _typeOrVoid: P9TypeOrVoid | undefined;
  private _formalParameters: P9FormalParameters | undefined;
  private _qualifiedNameList: P9QualifiedNameList | undefined;

  constructor(
    private readonly _context: AbstractMethodDeclarationContext,
    private readonly _p: P9
  ) {}

  public push(obj: P9ClassModifier | string): void {
    if (obj instanceof P9ClassModifier) {
      this._classModifilerList.push(obj);
    } else {
      this._modifierList.push(obj);
    }
  }

  public set typeOrVoid(obj: P9TypeOrVoid) {
    this._typeOrVoid = obj;
  }

  public set formalParameters(obj: P9FormalParameters) {
    this._formalParameters = obj;
  }

  public set qualifiedNameList(obj: P9QualifiedNameList) {
    this._qualifiedNameList = obj;
  }

  public getLines(): Array<string> {
    const id = this._context._id.text;
    if (this._formalParameters !== undefined && id !== undefined) {
      let lines = new Array<string>(
        `${this._classModifilerList
          .map(function (e) {
            return e.toString();
          })
          .join(" ")} ${this._modifierList.join(
          " "
        )} ${id} ${this._formalParameters.toString()}`
      );

      if (this._context.THROWS()) {
        if (this._qualifiedNameList !== undefined) {
          lines.push(`throws ${this._qualifiedNameList.getLines()}`);
          return lines;
        }

        Utils.error(
          "P9AbstractMethodDeclaration: getLines(): abstractMethodDeclaration expects qualifiedNameList.",
          this._p
        );
        return new Array<string>();
      }
    }

    Utils.error(
      "P9AbstractMethodDeclaration: getLines(): abstractMethodDeclaration expects id and formalParameters.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9MemberDeclaration implements P9Elements {
  private _funcDecl: P9FuncDecl | undefined;
  private _genericMethodDeclaration: P9GenericMethodDeclaration | undefined;
  private _varDecl: P9VarDecl | undefined;
  private _constructorDeclaration: P9ConstructorDeclaration | undefined;
  private _genericConstructorDeclaration:
    | P9GenericConstructorDeclaration
    | undefined;

  constructor(private readonly _p: P9) {}

  public set funcDecl(obj: P9FuncDecl) {
    this._funcDecl = obj;
  }

  public set genericMethodDeclaration(obj: P9GenericMethodDeclaration) {
    this._genericMethodDeclaration = obj;
  }

  public set varDecl(obj: P9VarDecl) {
    this._varDecl = obj;
  }

  public set constructorDeclaration(obj: P9ConstructorDeclaration) {
    this._constructorDeclaration = obj;
  }

  public set genericConstructorDeclaration(
    obj: P9GenericConstructorDeclaration
  ) {
    this._genericConstructorDeclaration = obj;
  }

  public getLines(): Array<string> {
    if (this._funcDecl !== undefined) {
      return this._funcDecl.getLines();
    }

    if (this._genericMethodDeclaration !== undefined) {
      return this._genericMethodDeclaration.getLines();
    }

    if (this._varDecl !== undefined) {
      return this._varDecl.getLines();
    }

    if (this._constructorDeclaration !== undefined) {
      return this._constructorDeclaration.getLines();
    }

    if (this._genericConstructorDeclaration !== undefined) {
      return this._genericConstructorDeclaration.getLines();
    }

    Utils.error(
      "P9MemberDeclaration: getLines(): memberDeclaration expects funcDecl, genericMethodDeclaration, fieldDeclaration, constructorDeclaration, or genericConstructorDeclaration.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9GenericMethodDeclaration implements P9Elements {
  private _typeParameters: P9TypeParameters | undefined;
  private _funcDecl: P9FuncDecl | undefined;

  constructor(private readonly _p: P9) {}

  public set typeParameters(obj: P9TypeParameters) {
    this._typeParameters = obj;
  }

  public set funcDecl(obj: P9FuncDecl) {
    this._funcDecl = obj;
  }

  public getLines(): Array<string> {
    if (this._typeParameters !== undefined && this._funcDecl !== undefined) {
      let lines = this._typeParameters.getLines();
      lines = lines.concat(this._funcDecl.getLines());
      return lines;
    }

    Utils.error(
      "P9GenericMethodDeclaration: getLines(): genericMethodDeclaration expects typeParameters and funcDecl.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9ConstructorDeclaration implements P9Elements {
  private _formalParameters: P9FormalParameters | undefined;
  private _qualifiedNameList: P9QualifiedNameList | undefined;
  private _block: P9Block | undefined;

  constructor(
    private readonly _context: ConstructorDeclarationContext,
    private readonly _p: P9
  ) {}

  public set formalParameters(obj: P9FormalParameters) {
    this._formalParameters = obj;
  }

  public set qualifiedNameList(obj: P9QualifiedNameList) {
    this._qualifiedNameList = obj;
  }

  public set block(obj: P9Block) {
    this._block = obj;
  }

  public getLines(): Array<string> {
    if (this._formalParameters !== undefined && this._block != undefined) {
      let lines = new Array<string>(
        `constructor ${this._formalParameters.toString()}`
      );

      if (this._context.THROWS()) {
        if (this._qualifiedNameList !== undefined) {
          lines.push(`throws ${this._qualifiedNameList.toString()}`);
        } else {
          Utils.error(
            "P9ConstructorDeclaration: getLines(): constructorDeclaration expects qualifiedNameList.",
            this._p
          );
        }
      }

      lines = Utils.wrap(lines, this._block.getLines());
      return lines;
    }

    Utils.error(
      "P9ConstructorDeclaration: getLines(): constructorDeclaration expects id, formalParameters, and block.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9GenericConstructorDeclaration implements P9Elements {
  private _typeParameters: P9TypeParameters | undefined;
  private _constructorDeclaration: P9ConstructorDeclaration | undefined;

  constructor(private readonly _p: P9) {}

  public set typeParameters(obj: P9TypeParameters) {
    this._typeParameters = obj;
  }

  public set constructorDeclaration(obj: P9ConstructorDeclaration) {
    this._constructorDeclaration = obj;
  }

  public getLines(): Array<string> {
    if (
      this._typeParameters !== undefined &&
      this._constructorDeclaration !== undefined
    ) {
      let lines = this._typeParameters.getLines();
      return lines.concat(this._constructorDeclaration.getLines());
    }

    Utils.error(
      "P9GenericConstructorDeclaration: getLines(): genericConstructorDeclaration expects typeParameters and constructorDeclaration.",
      this._p
    );
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

export class P9ClassCreatorRest implements P9Elements {
  private _arguments: P9Arguments | undefined;
  private _classBody: P9ClassBody | undefined;

  constructor(private readonly _p: P9) {}

  public set arguments(obj: P9Arguments) {
    this._arguments = obj;
  }

  public set classBody(obj: P9ClassBody) {
    this._classBody = obj;
  }

  public getLines(): Array<string> {
    if (this._arguments !== undefined) {
      let lines = this._arguments.getLines();

      if (this._classBody !== undefined) {
        lines = Utils.wrap(lines, this._classBody.getLines());
      }
      return lines;
    }

    Utils.error("P9Class: getLines(): class expects arguments.", this._p);
    return new Array<string>();
  }

  public toString(): string {
    return this.getLines().join("\n");
  }
}

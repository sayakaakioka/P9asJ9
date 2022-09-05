// Generated from ./src/P9Parser/ProcessingParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ProcessingParserListener } from "./ProcessingParserListener";

export class ProcessingParser extends Parser {
	public static readonly LBRACK = 1;
	public static readonly RBRACK = 2;
	public static readonly ASSIGN = 3;
	public static readonly CATCH = 4;
	public static readonly CLASS = 5;
	public static readonly COMMA = 6;
	public static readonly COMMENT = 7;
	public static readonly LBRACE = 8;
	public static readonly RBRACE = 9;
	public static readonly DOC_COMMENT = 10;
	public static readonly DOT = 11;
	public static readonly EXTENDS = 12;
	public static readonly FINAL = 13;
	public static readonly IMPLEMENTS = 14;
	public static readonly IMPORT = 15;
	public static readonly BLOCK_COMMENT = 16;
	public static readonly NEW = 17;
	public static readonly LPAREN = 18;
	public static readonly RPAREN = 19;
	public static readonly PRIVATE = 20;
	public static readonly PUBLIC = 21;
	public static readonly RETURN = 22;
	public static readonly SEMI = 23;
	public static readonly STATIC = 24;
	public static readonly SUPER = 25;
	public static readonly THIS = 26;
	public static readonly TRY = 27;
	public static readonly VOID = 28;
	public static readonly BOOLEAN = 29;
	public static readonly BYTE = 30;
	public static readonly CHAR = 31;
	public static readonly COLOR = 32;
	public static readonly DOUBLE = 33;
	public static readonly FLOAT = 34;
	public static readonly INT = 35;
	public static readonly LONG = 36;
	public static readonly EQUALS = 37;
	public static readonly EQUAL = 38;
	public static readonly GT = 39;
	public static readonly GE = 40;
	public static readonly NOTEQUAL = 41;
	public static readonly LT = 42;
	public static readonly LE = 43;
	public static readonly FOR = 44;
	public static readonly WHILE = 45;
	public static readonly DO = 46;
	public static readonly BREAK = 47;
	public static readonly CASE = 48;
	public static readonly QUESTION = 49;
	public static readonly COLON = 50;
	public static readonly CONTINUE = 51;
	public static readonly DEFAULT = 52;
	public static readonly ELSE = 53;
	public static readonly IF = 54;
	public static readonly SWITCH = 55;
	public static readonly AND = 56;
	public static readonly BANG = 57;
	public static readonly OR = 58;
	public static readonly ADD_ASSIGN = 59;
	public static readonly ADD = 60;
	public static readonly DEC = 61;
	public static readonly DIV = 62;
	public static readonly DIV_ASSIGN = 63;
	public static readonly INC = 64;
	public static readonly SUB = 65;
	public static readonly MOD = 66;
	public static readonly MUL = 67;
	public static readonly MUL_ASSIGN = 68;
	public static readonly SUB_ASSIGN = 69;
	public static readonly BITAND = 70;
	public static readonly BITOR = 71;
	public static readonly L_SHIFT = 72;
	public static readonly R_SHIFT = 73;
	public static readonly THROWS = 74;
	public static readonly THROW = 75;
	public static readonly INSTANCEOF = 76;
	public static readonly ABSTRACT = 77;
	public static readonly DECIMAL_LITERAL = 78;
	public static readonly HEX_LITERAL = 79;
	public static readonly FLOAT_LITERAL = 80;
	public static readonly COLOR_LITERAL = 81;
	public static readonly BOOL_LITERAL = 82;
	public static readonly CHAR_LITERAL = 83;
	public static readonly STRING_LITERAL = 84;
	public static readonly NULL_LITERAL = 85;
	public static readonly IDENTIFIER = 86;
	public static readonly WS = 87;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_importDeclaration = 1;
	public static readonly RULE_qualifiedName = 2;
	public static readonly RULE_varDecl = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_variableDeclarators = 5;
	public static readonly RULE_variableDeclarator = 6;
	public static readonly RULE_variableDeclaratorId = 7;
	public static readonly RULE_variableInitializer = 8;
	public static readonly RULE_arrayInitializer = 9;
	public static readonly RULE_funcDecl = 10;
	public static readonly RULE_typeOrVoid = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_primitiveType = 13;
	public static readonly RULE_classType = 14;
	public static readonly RULE_typeArguments = 15;
	public static readonly RULE_formalParameters = 16;
	public static readonly RULE_formalParameterList = 17;
	public static readonly RULE_formalParameter = 18;
	public static readonly RULE_qualifiedNameList = 19;
	public static readonly RULE_block = 20;
	public static readonly RULE_blockStatement = 21;
	public static readonly RULE_classDecl = 22;
	public static readonly RULE_classModifier = 23;
	public static readonly RULE_typeParameters = 24;
	public static readonly RULE_typeParameter = 25;
	public static readonly RULE_typeBound = 26;
	public static readonly RULE_typeList = 27;
	public static readonly RULE_classBody = 28;
	public static readonly RULE_classBodyDeclaration = 29;
	public static readonly RULE_abstractMethodDeclaration = 30;
	public static readonly RULE_memberDeclaration = 31;
	public static readonly RULE_genericMethodDeclaration = 32;
	public static readonly RULE_constructorDeclaration = 33;
	public static readonly RULE_genericConstructorDeclaration = 34;
	public static readonly RULE_statement = 35;
	public static readonly RULE_forControl = 36;
	public static readonly RULE_forInit = 37;
	public static readonly RULE_expressionList = 38;
	public static readonly RULE_enhancedForControl = 39;
	public static readonly RULE_catchClause = 40;
	public static readonly RULE_catchType = 41;
	public static readonly RULE_switchBlockStatementGroup = 42;
	public static readonly RULE_switchLabel = 43;
	public static readonly RULE_expression = 44;
	public static readonly RULE_primary = 45;
	public static readonly RULE_literal = 46;
	public static readonly RULE_nonWildcardTypeArguments = 47;
	public static readonly RULE_superSuffix = 48;
	public static readonly RULE_explicitGenericInvocationSuffix = 49;
	public static readonly RULE_arguments = 50;
	public static readonly RULE_funcCall = 51;
	public static readonly RULE_creator = 52;
	public static readonly RULE_createdName = 53;
	public static readonly RULE_createdNameUnit = 54;
	public static readonly RULE_typeArgumentsOrDiamond = 55;
	public static readonly RULE_arrayCreatorRest = 56;
	public static readonly RULE_classCreatorRest = 57;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "importDeclaration", "qualifiedName", "varDecl", "modifier", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "funcDecl", "typeOrVoid", "type", "primitiveType", 
		"classType", "typeArguments", "formalParameters", "formalParameterList", 
		"formalParameter", "qualifiedNameList", "block", "blockStatement", "classDecl", 
		"classModifier", "typeParameters", "typeParameter", "typeBound", "typeList", 
		"classBody", "classBodyDeclaration", "abstractMethodDeclaration", "memberDeclaration", 
		"genericMethodDeclaration", "constructorDeclaration", "genericConstructorDeclaration", 
		"statement", "forControl", "forInit", "expressionList", "enhancedForControl", 
		"catchClause", "catchType", "switchBlockStatementGroup", "switchLabel", 
		"expression", "primary", "literal", "nonWildcardTypeArguments", "superSuffix", 
		"explicitGenericInvocationSuffix", "arguments", "funcCall", "creator", 
		"createdName", "createdNameUnit", "typeArgumentsOrDiamond", "arrayCreatorRest", 
		"classCreatorRest",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'='", "'catch'", "'class'", "','", undefined, 
		"'{'", "'}'", undefined, "'.'", "'extends'", "'final'", "'implements'", 
		"'import'", undefined, "'new'", "'('", "')'", "'private'", "'public'", 
		"'return'", "';'", "'static'", "'super'", "'this'", "'try'", "'void'", 
		"'boolean'", "'byte'", "'char'", "'color'", "'double'", "'float'", "'int'", 
		"'long'", "'equals'", "'=='", "'>'", "'>='", "'!='", "'<'", "'<='", "'for'", 
		"'while'", "'do'", "'break'", "'case'", "'?'", "':'", "'continue'", "'default'", 
		"'else'", "'if'", "'switch'", "'&&'", "'!'", "'||'", "'+='", "'+'", "'--'", 
		"'/'", "'/='", "'++'", "'-'", "'%'", "'*'", "'*='", "'-='", "'&'", "'|'", 
		"'<<'", "'>>'", "'throws'", "'throw'", "'instanceof'", "'abstract'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LBRACK", "RBRACK", "ASSIGN", "CATCH", "CLASS", "COMMA", "COMMENT", 
		"LBRACE", "RBRACE", "DOC_COMMENT", "DOT", "EXTENDS", "FINAL", "IMPLEMENTS", 
		"IMPORT", "BLOCK_COMMENT", "NEW", "LPAREN", "RPAREN", "PRIVATE", "PUBLIC", 
		"RETURN", "SEMI", "STATIC", "SUPER", "THIS", "TRY", "VOID", "BOOLEAN", 
		"BYTE", "CHAR", "COLOR", "DOUBLE", "FLOAT", "INT", "LONG", "EQUALS", "EQUAL", 
		"GT", "GE", "NOTEQUAL", "LT", "LE", "FOR", "WHILE", "DO", "BREAK", "CASE", 
		"QUESTION", "COLON", "CONTINUE", "DEFAULT", "ELSE", "IF", "SWITCH", "AND", 
		"BANG", "OR", "ADD_ASSIGN", "ADD", "DEC", "DIV", "DIV_ASSIGN", "INC", 
		"SUB", "MOD", "MUL", "MUL_ASSIGN", "SUB_ASSIGN", "BITAND", "BITOR", "L_SHIFT", 
		"R_SHIFT", "THROWS", "THROW", "INSTANCEOF", "ABSTRACT", "DECIMAL_LITERAL", 
		"HEX_LITERAL", "FLOAT_LITERAL", "COLOR_LITERAL", "BOOL_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "NULL_LITERAL", "IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ProcessingParser._LITERAL_NAMES, ProcessingParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ProcessingParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ProcessingParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ProcessingParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ProcessingParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ProcessingParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ProcessingParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.IMPORT) {
				{
				{
				this.state = 116;
				this.importDeclaration();
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 122;
					this.varDecl();
					}
					break;

				case 2:
					{
					this.state = 123;
					this.funcDecl();
					}
					break;

				case 3:
					{
					this.state = 124;
					this.statement();
					}
					break;

				case 4:
					{
					this.state = 125;
					this.classDecl();
					}
					break;
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.CLASS) | (1 << ProcessingParser.LBRACE) | (1 << ProcessingParser.FINAL) | (1 << ProcessingParser.NEW) | (1 << ProcessingParser.LPAREN) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.RETURN) | (1 << ProcessingParser.SEMI) | (1 << ProcessingParser.STATIC) | (1 << ProcessingParser.SUPER) | (1 << ProcessingParser.THIS) | (1 << ProcessingParser.TRY) | (1 << ProcessingParser.VOID) | (1 << ProcessingParser.BOOLEAN) | (1 << ProcessingParser.BYTE) | (1 << ProcessingParser.CHAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProcessingParser.COLOR - 32)) | (1 << (ProcessingParser.DOUBLE - 32)) | (1 << (ProcessingParser.FLOAT - 32)) | (1 << (ProcessingParser.INT - 32)) | (1 << (ProcessingParser.LONG - 32)) | (1 << (ProcessingParser.LT - 32)) | (1 << (ProcessingParser.FOR - 32)) | (1 << (ProcessingParser.WHILE - 32)) | (1 << (ProcessingParser.DO - 32)) | (1 << (ProcessingParser.BREAK - 32)) | (1 << (ProcessingParser.CONTINUE - 32)) | (1 << (ProcessingParser.IF - 32)) | (1 << (ProcessingParser.SWITCH - 32)) | (1 << (ProcessingParser.BANG - 32)) | (1 << (ProcessingParser.ADD - 32)) | (1 << (ProcessingParser.DEC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ProcessingParser.INC - 64)) | (1 << (ProcessingParser.SUB - 64)) | (1 << (ProcessingParser.THROW - 64)) | (1 << (ProcessingParser.ABSTRACT - 64)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 64)) | (1 << (ProcessingParser.HEX_LITERAL - 64)) | (1 << (ProcessingParser.FLOAT_LITERAL - 64)) | (1 << (ProcessingParser.COLOR_LITERAL - 64)) | (1 << (ProcessingParser.BOOL_LITERAL - 64)) | (1 << (ProcessingParser.CHAR_LITERAL - 64)) | (1 << (ProcessingParser.STRING_LITERAL - 64)) | (1 << (ProcessingParser.NULL_LITERAL - 64)) | (1 << (ProcessingParser.IDENTIFIER - 64)))) !== 0));
			this.state = 130;
			this.match(ProcessingParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ProcessingParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(ProcessingParser.IMPORT);
			this.state = 133;
			this.qualifiedName();
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.DOT) {
				{
				this.state = 134;
				this.match(ProcessingParser.DOT);
				this.state = 135;
				this.match(ProcessingParser.MUL);
				}
			}

			this.state = 138;
			this.match(ProcessingParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ProcessingParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(ProcessingParser.IDENTIFIER);
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 141;
					this.match(ProcessingParser.DOT);
					this.state = 142;
					this.match(ProcessingParser.IDENTIFIER);
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ProcessingParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
				{
				{
				this.state = 148;
				this.modifier();
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
			this.type();
			this.state = 155;
			this.variableDeclarators();
			this.state = 156;
			this.match(ProcessingParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ProcessingParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ProcessingParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.variableDeclarator();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 161;
				this.match(ProcessingParser.COMMA);
				this.state = 162;
				this.variableDeclarator();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ProcessingParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.variableDeclaratorId();
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.ASSIGN) {
				{
				this.state = 169;
				this.match(ProcessingParser.ASSIGN);
				this.state = 170;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ProcessingParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.LBRACK) {
				{
				{
				this.state = 174;
				this.match(ProcessingParser.LBRACK);
				this.state = 175;
				this.match(ProcessingParser.RBRACK);
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ProcessingParser.RULE_variableInitializer);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 181;
				this.arrayInitializer();
				}
				break;
			case ProcessingParser.NEW:
			case ProcessingParser.LPAREN:
			case ProcessingParser.SUPER:
			case ProcessingParser.THIS:
			case ProcessingParser.VOID:
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.DOUBLE:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
			case ProcessingParser.LONG:
			case ProcessingParser.LT:
			case ProcessingParser.BANG:
			case ProcessingParser.ADD:
			case ProcessingParser.DEC:
			case ProcessingParser.INC:
			case ProcessingParser.SUB:
			case ProcessingParser.DECIMAL_LITERAL:
			case ProcessingParser.HEX_LITERAL:
			case ProcessingParser.FLOAT_LITERAL:
			case ProcessingParser.COLOR_LITERAL:
			case ProcessingParser.BOOL_LITERAL:
			case ProcessingParser.CHAR_LITERAL:
			case ProcessingParser.STRING_LITERAL:
			case ProcessingParser.NULL_LITERAL:
			case ProcessingParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ProcessingParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(ProcessingParser.LBRACE);
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.LBRACE) | (1 << ProcessingParser.NEW) | (1 << ProcessingParser.LPAREN) | (1 << ProcessingParser.SUPER) | (1 << ProcessingParser.THIS) | (1 << ProcessingParser.VOID) | (1 << ProcessingParser.BOOLEAN) | (1 << ProcessingParser.BYTE) | (1 << ProcessingParser.CHAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProcessingParser.COLOR - 32)) | (1 << (ProcessingParser.DOUBLE - 32)) | (1 << (ProcessingParser.FLOAT - 32)) | (1 << (ProcessingParser.INT - 32)) | (1 << (ProcessingParser.LONG - 32)) | (1 << (ProcessingParser.LT - 32)) | (1 << (ProcessingParser.BANG - 32)) | (1 << (ProcessingParser.ADD - 32)) | (1 << (ProcessingParser.DEC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ProcessingParser.INC - 64)) | (1 << (ProcessingParser.SUB - 64)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 64)) | (1 << (ProcessingParser.HEX_LITERAL - 64)) | (1 << (ProcessingParser.FLOAT_LITERAL - 64)) | (1 << (ProcessingParser.COLOR_LITERAL - 64)) | (1 << (ProcessingParser.BOOL_LITERAL - 64)) | (1 << (ProcessingParser.CHAR_LITERAL - 64)) | (1 << (ProcessingParser.STRING_LITERAL - 64)) | (1 << (ProcessingParser.NULL_LITERAL - 64)) | (1 << (ProcessingParser.IDENTIFIER - 64)))) !== 0)) {
				{
				this.state = 186;
				this.variableInitializer();
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 187;
						this.match(ProcessingParser.COMMA);
						this.state = 188;
						this.variableInitializer();
						}
						}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessingParser.COMMA) {
					{
					this.state = 194;
					this.match(ProcessingParser.COMMA);
					}
				}

				}
			}

			this.state = 199;
			this.match(ProcessingParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDecl(): FuncDeclContext {
		let _localctx: FuncDeclContext = new FuncDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ProcessingParser.RULE_funcDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
				{
				{
				this.state = 201;
				this.modifier();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.typeOrVoid();
			this.state = 208;
			_localctx._funcId = this.match(ProcessingParser.IDENTIFIER);
			this.state = 209;
			this.formalParameters();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.THROWS) {
				{
				this.state = 210;
				this.match(ProcessingParser.THROWS);
				this.state = 211;
				this.qualifiedNameList();
				}
			}

			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.LBRACE:
				{
				this.state = 214;
				this.block();
				}
				break;
			case ProcessingParser.SEMI:
				{
				this.state = 215;
				this.match(ProcessingParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeOrVoid(): TypeOrVoidContext {
		let _localctx: TypeOrVoidContext = new TypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ProcessingParser.RULE_typeOrVoid);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.DOUBLE:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
			case ProcessingParser.LONG:
			case ProcessingParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.type();
				}
				break;
			case ProcessingParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.match(ProcessingParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ProcessingParser.RULE_type);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.IDENTIFIER:
				{
				this.state = 222;
				this.classType();
				}
				break;
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.DOUBLE:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
			case ProcessingParser.LONG:
				{
				this.state = 223;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 226;
					this.match(ProcessingParser.LBRACK);
					this.state = 227;
					this.match(ProcessingParser.RBRACK);
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ProcessingParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (ProcessingParser.BOOLEAN - 29)) | (1 << (ProcessingParser.BYTE - 29)) | (1 << (ProcessingParser.CHAR - 29)) | (1 << (ProcessingParser.COLOR - 29)) | (1 << (ProcessingParser.DOUBLE - 29)) | (1 << (ProcessingParser.FLOAT - 29)) | (1 << (ProcessingParser.INT - 29)) | (1 << (ProcessingParser.LONG - 29)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ProcessingParser.RULE_classType);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				_localctx._id = this.match(ProcessingParser.IDENTIFIER);
				this.state = 237;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 236;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ProcessingParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(ProcessingParser.LT);
			this.state = 243;
			this.type();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 244;
				this.match(ProcessingParser.COMMA);
				this.state = 245;
				this.type();
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 251;
			this.match(ProcessingParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ProcessingParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(ProcessingParser.LPAREN);
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (ProcessingParser.FINAL - 13)) | (1 << (ProcessingParser.PRIVATE - 13)) | (1 << (ProcessingParser.PUBLIC - 13)) | (1 << (ProcessingParser.STATIC - 13)) | (1 << (ProcessingParser.BOOLEAN - 13)) | (1 << (ProcessingParser.BYTE - 13)) | (1 << (ProcessingParser.CHAR - 13)) | (1 << (ProcessingParser.COLOR - 13)) | (1 << (ProcessingParser.DOUBLE - 13)) | (1 << (ProcessingParser.FLOAT - 13)) | (1 << (ProcessingParser.INT - 13)) | (1 << (ProcessingParser.LONG - 13)))) !== 0) || _la === ProcessingParser.IDENTIFIER) {
				{
				this.state = 254;
				this.formalParameterList();
				}
			}

			this.state = 257;
			this.match(ProcessingParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ProcessingParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.formalParameter();
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 260;
				this.match(ProcessingParser.COMMA);
				this.state = 261;
				this.formalParameter();
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ProcessingParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
				{
				{
				this.state = 267;
				this.modifier();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 273;
			this.type();
			this.state = 274;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ProcessingParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.qualifiedName();
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 277;
				this.match(ProcessingParser.COMMA);
				this.state = 278;
				this.qualifiedName();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ProcessingParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(ProcessingParser.LBRACE);
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.LBRACE) | (1 << ProcessingParser.FINAL) | (1 << ProcessingParser.NEW) | (1 << ProcessingParser.LPAREN) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.RETURN) | (1 << ProcessingParser.SEMI) | (1 << ProcessingParser.STATIC) | (1 << ProcessingParser.SUPER) | (1 << ProcessingParser.THIS) | (1 << ProcessingParser.TRY) | (1 << ProcessingParser.VOID) | (1 << ProcessingParser.BOOLEAN) | (1 << ProcessingParser.BYTE) | (1 << ProcessingParser.CHAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProcessingParser.COLOR - 32)) | (1 << (ProcessingParser.DOUBLE - 32)) | (1 << (ProcessingParser.FLOAT - 32)) | (1 << (ProcessingParser.INT - 32)) | (1 << (ProcessingParser.LONG - 32)) | (1 << (ProcessingParser.LT - 32)) | (1 << (ProcessingParser.FOR - 32)) | (1 << (ProcessingParser.WHILE - 32)) | (1 << (ProcessingParser.DO - 32)) | (1 << (ProcessingParser.BREAK - 32)) | (1 << (ProcessingParser.CONTINUE - 32)) | (1 << (ProcessingParser.IF - 32)) | (1 << (ProcessingParser.SWITCH - 32)) | (1 << (ProcessingParser.BANG - 32)) | (1 << (ProcessingParser.ADD - 32)) | (1 << (ProcessingParser.DEC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ProcessingParser.INC - 64)) | (1 << (ProcessingParser.SUB - 64)) | (1 << (ProcessingParser.THROW - 64)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 64)) | (1 << (ProcessingParser.HEX_LITERAL - 64)) | (1 << (ProcessingParser.FLOAT_LITERAL - 64)) | (1 << (ProcessingParser.COLOR_LITERAL - 64)) | (1 << (ProcessingParser.BOOL_LITERAL - 64)) | (1 << (ProcessingParser.CHAR_LITERAL - 64)) | (1 << (ProcessingParser.STRING_LITERAL - 64)) | (1 << (ProcessingParser.NULL_LITERAL - 64)) | (1 << (ProcessingParser.IDENTIFIER - 64)))) !== 0)) {
				{
				{
				this.state = 285;
				this.blockStatement();
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 291;
			this.match(ProcessingParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ProcessingParser.RULE_blockStatement);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				this.varDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 294;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDecl(): ClassDeclContext {
		let _localctx: ClassDeclContext = new ClassDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ProcessingParser.RULE_classDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0) || _la === ProcessingParser.ABSTRACT) {
				{
				{
				this.state = 297;
				this.classModifier();
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 303;
			this.match(ProcessingParser.CLASS);
			this.state = 304;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.LT) {
				{
				this.state = 305;
				this.typeParameters();
				}
			}

			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.EXTENDS) {
				{
				this.state = 308;
				this.match(ProcessingParser.EXTENDS);
				this.state = 309;
				this.type();
				}
			}

			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.IMPLEMENTS) {
				{
				this.state = 312;
				this.match(ProcessingParser.IMPLEMENTS);
				this.state = 313;
				this.typeList();
				}
			}

			this.state = 316;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ProcessingParser.RULE_classModifier);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.FINAL:
			case ProcessingParser.PRIVATE:
			case ProcessingParser.PUBLIC:
			case ProcessingParser.STATIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.modifier();
				}
				break;
			case ProcessingParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 319;
				this.match(ProcessingParser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ProcessingParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(ProcessingParser.LT);
			this.state = 323;
			this.typeParameter();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 324;
				this.match(ProcessingParser.COMMA);
				this.state = 325;
				this.typeParameter();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 331;
			this.match(ProcessingParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ProcessingParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.EXTENDS) {
				{
				this.state = 334;
				this.match(ProcessingParser.EXTENDS);
				this.state = 335;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ProcessingParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.type();
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.BITAND) {
				{
				{
				this.state = 339;
				this.match(ProcessingParser.BITAND);
				this.state = 340;
				this.type();
				}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ProcessingParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.type();
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 347;
				this.match(ProcessingParser.COMMA);
				this.state = 348;
				this.type();
				}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ProcessingParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(ProcessingParser.LBRACE);
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.LBRACE) | (1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.SEMI) | (1 << ProcessingParser.STATIC) | (1 << ProcessingParser.VOID) | (1 << ProcessingParser.BOOLEAN) | (1 << ProcessingParser.BYTE) | (1 << ProcessingParser.CHAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProcessingParser.COLOR - 32)) | (1 << (ProcessingParser.DOUBLE - 32)) | (1 << (ProcessingParser.FLOAT - 32)) | (1 << (ProcessingParser.INT - 32)) | (1 << (ProcessingParser.LONG - 32)) | (1 << (ProcessingParser.LT - 32)))) !== 0) || _la === ProcessingParser.ABSTRACT || _la === ProcessingParser.IDENTIFIER) {
				{
				{
				this.state = 355;
				this.classBodyDeclaration();
				}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 361;
			this.match(ProcessingParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ProcessingParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 363;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessingParser.STATIC) {
					{
					this.state = 364;
					this.match(ProcessingParser.STATIC);
					}
				}

				this.state = 367;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 368;
						this.modifier();
						}
						}
					}
					this.state = 373;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 374;
				this.memberDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 375;
				this.abstractMethodDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractMethodDeclaration(): AbstractMethodDeclarationContext {
		let _localctx: AbstractMethodDeclarationContext = new AbstractMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ProcessingParser.RULE_abstractMethodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 378;
					this.classModifier();
					}
					}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
				{
				{
				this.state = 384;
				this.modifier();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 390;
			this.typeOrVoid();
			this.state = 391;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 392;
			this.formalParameters();
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.THROWS) {
				{
				this.state = 393;
				this.match(ProcessingParser.THROWS);
				this.state = 394;
				this.qualifiedNameList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ProcessingParser.RULE_memberDeclaration);
		try {
			this.state = 402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 397;
				this.funcDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 398;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 399;
				this.varDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 400;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 401;
				this.genericConstructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ProcessingParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.typeParameters();
			this.state = 405;
			this.funcDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ProcessingParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 408;
			this.formalParameters();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.THROWS) {
				{
				this.state = 409;
				this.match(ProcessingParser.THROWS);
				this.state = 410;
				this.qualifiedNameList();
				}
			}

			this.state = 413;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ProcessingParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.typeParameters();
			this.state = 416;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ProcessingParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 494;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 419;
				this.match(ProcessingParser.IF);
				this.state = 420;
				this.match(ProcessingParser.LPAREN);
				this.state = 421;
				this.expression(0);
				this.state = 422;
				this.match(ProcessingParser.RPAREN);
				this.state = 423;
				this.statement();
				this.state = 426;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 424;
					this.match(ProcessingParser.ELSE);
					this.state = 425;
					this.statement();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
				this.match(ProcessingParser.FOR);
				this.state = 429;
				this.match(ProcessingParser.LPAREN);
				this.state = 430;
				this.forControl();
				this.state = 431;
				this.match(ProcessingParser.RPAREN);
				this.state = 432;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 434;
				this.match(ProcessingParser.WHILE);
				this.state = 435;
				this.match(ProcessingParser.LPAREN);
				this.state = 436;
				this.expression(0);
				this.state = 437;
				this.match(ProcessingParser.RPAREN);
				this.state = 438;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 440;
				this.match(ProcessingParser.DO);
				this.state = 441;
				this.statement();
				this.state = 442;
				this.match(ProcessingParser.WHILE);
				this.state = 443;
				this.match(ProcessingParser.LPAREN);
				this.state = 444;
				this.expression(0);
				this.state = 445;
				this.match(ProcessingParser.RPAREN);
				this.state = 446;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 448;
				this.match(ProcessingParser.TRY);
				this.state = 449;
				this.block();
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 450;
					this.catchClause();
					}
					}
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ProcessingParser.CATCH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 455;
				this.match(ProcessingParser.SWITCH);
				this.state = 456;
				this.match(ProcessingParser.LPAREN);
				this.state = 457;
				this.expression(0);
				this.state = 458;
				this.match(ProcessingParser.RPAREN);
				this.state = 459;
				this.match(ProcessingParser.LBRACE);
				this.state = 463;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 460;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 465;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ProcessingParser.CASE || _la === ProcessingParser.DEFAULT) {
					{
					{
					this.state = 466;
					this.switchLabel();
					}
					}
					this.state = 471;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 472;
				this.match(ProcessingParser.RBRACE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 474;
				this.match(ProcessingParser.RETURN);
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 475;
					this.expression(0);
					}
				}

				this.state = 478;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 479;
				this.match(ProcessingParser.THROW);
				this.state = 480;
				this.expression(0);
				this.state = 481;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 483;
				this.match(ProcessingParser.BREAK);
				this.state = 484;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 485;
				this.match(ProcessingParser.CONTINUE);
				this.state = 486;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 487;
					this.expression(0);
					}
				}

				this.state = 490;
				this.match(ProcessingParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 491;
				_localctx._identifierLabel = this.match(ProcessingParser.IDENTIFIER);
				this.state = 492;
				this.match(ProcessingParser.COLON);
				this.state = 493;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ProcessingParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (ProcessingParser.FINAL - 13)) | (1 << (ProcessingParser.NEW - 13)) | (1 << (ProcessingParser.LPAREN - 13)) | (1 << (ProcessingParser.PRIVATE - 13)) | (1 << (ProcessingParser.PUBLIC - 13)) | (1 << (ProcessingParser.STATIC - 13)) | (1 << (ProcessingParser.SUPER - 13)) | (1 << (ProcessingParser.THIS - 13)) | (1 << (ProcessingParser.VOID - 13)) | (1 << (ProcessingParser.BOOLEAN - 13)) | (1 << (ProcessingParser.BYTE - 13)) | (1 << (ProcessingParser.CHAR - 13)) | (1 << (ProcessingParser.COLOR - 13)) | (1 << (ProcessingParser.DOUBLE - 13)) | (1 << (ProcessingParser.FLOAT - 13)) | (1 << (ProcessingParser.INT - 13)) | (1 << (ProcessingParser.LONG - 13)) | (1 << (ProcessingParser.LT - 13)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 496;
					this.forInit();
					}
				}

				this.state = 499;
				this.match(ProcessingParser.SEMI);
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 500;
					this.expression(0);
					}
				}

				this.state = 503;
				this.match(ProcessingParser.SEMI);
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 504;
					this.expressionList();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.enhancedForControl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ProcessingParser.RULE_forInit);
		let _la: number;
		try {
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
					{
					{
					this.state = 510;
					this.modifier();
					}
					}
					this.state = 515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 516;
				this.type();
				this.state = 517;
				this.variableDeclarators();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ProcessingParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.expression(0);
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.COMMA) {
				{
				{
				this.state = 523;
				this.match(ProcessingParser.COMMA);
				this.state = 524;
				this.expression(0);
				}
				}
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ProcessingParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
				{
				{
				this.state = 530;
				this.modifier();
				}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 536;
			this.type();
			this.state = 537;
			this.variableDeclaratorId();
			this.state = 538;
			this.match(ProcessingParser.COLON);
			this.state = 539;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ProcessingParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(ProcessingParser.CATCH);
			this.state = 542;
			this.match(ProcessingParser.LPAREN);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.FINAL) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.STATIC))) !== 0)) {
				{
				{
				this.state = 543;
				this.modifier();
				}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 549;
			this.catchType();
			this.state = 550;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 551;
			this.match(ProcessingParser.RPAREN);
			this.state = 552;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ProcessingParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.qualifiedName();
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProcessingParser.BITOR) {
				{
				{
				this.state = 555;
				this.match(ProcessingParser.BITOR);
				this.state = 556;
				this.qualifiedName();
				}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ProcessingParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 562;
				this.switchLabel();
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ProcessingParser.CASE || _la === ProcessingParser.DEFAULT);
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 567;
				this.blockStatement();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProcessingParser.LBRACE) | (1 << ProcessingParser.FINAL) | (1 << ProcessingParser.NEW) | (1 << ProcessingParser.LPAREN) | (1 << ProcessingParser.PRIVATE) | (1 << ProcessingParser.PUBLIC) | (1 << ProcessingParser.RETURN) | (1 << ProcessingParser.SEMI) | (1 << ProcessingParser.STATIC) | (1 << ProcessingParser.SUPER) | (1 << ProcessingParser.THIS) | (1 << ProcessingParser.TRY) | (1 << ProcessingParser.VOID) | (1 << ProcessingParser.BOOLEAN) | (1 << ProcessingParser.BYTE) | (1 << ProcessingParser.CHAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProcessingParser.COLOR - 32)) | (1 << (ProcessingParser.DOUBLE - 32)) | (1 << (ProcessingParser.FLOAT - 32)) | (1 << (ProcessingParser.INT - 32)) | (1 << (ProcessingParser.LONG - 32)) | (1 << (ProcessingParser.LT - 32)) | (1 << (ProcessingParser.FOR - 32)) | (1 << (ProcessingParser.WHILE - 32)) | (1 << (ProcessingParser.DO - 32)) | (1 << (ProcessingParser.BREAK - 32)) | (1 << (ProcessingParser.CONTINUE - 32)) | (1 << (ProcessingParser.IF - 32)) | (1 << (ProcessingParser.SWITCH - 32)) | (1 << (ProcessingParser.BANG - 32)) | (1 << (ProcessingParser.ADD - 32)) | (1 << (ProcessingParser.DEC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ProcessingParser.INC - 64)) | (1 << (ProcessingParser.SUB - 64)) | (1 << (ProcessingParser.THROW - 64)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 64)) | (1 << (ProcessingParser.HEX_LITERAL - 64)) | (1 << (ProcessingParser.FLOAT_LITERAL - 64)) | (1 << (ProcessingParser.COLOR_LITERAL - 64)) | (1 << (ProcessingParser.BOOL_LITERAL - 64)) | (1 << (ProcessingParser.CHAR_LITERAL - 64)) | (1 << (ProcessingParser.STRING_LITERAL - 64)) | (1 << (ProcessingParser.NULL_LITERAL - 64)) | (1 << (ProcessingParser.IDENTIFIER - 64)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ProcessingParser.RULE_switchLabel);
		try {
			this.state = 583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this.match(ProcessingParser.CASE);
				this.state = 578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 573;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 574;
					_localctx._enumConstantName = this.match(ProcessingParser.IDENTIFIER);
					}
					break;

				case 3:
					{
					this.state = 575;
					this.type();
					this.state = 576;
					_localctx._varName = this.match(ProcessingParser.IDENTIFIER);
					}
					break;
				}
				this.state = 580;
				this.match(ProcessingParser.COLON);
				}
				break;
			case ProcessingParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(ProcessingParser.DEFAULT);
				this.state = 582;
				this.match(ProcessingParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, ProcessingParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 586;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 587;
				this.match(ProcessingParser.LPAREN);
				this.state = 588;
				this.typeBound();
				this.state = 589;
				this.match(ProcessingParser.RPAREN);
				this.state = 590;
				this.expression(19);
				}
				break;

			case 3:
				{
				this.state = 592;
				this.funcCall();
				}
				break;

			case 4:
				{
				this.state = 593;
				this.match(ProcessingParser.NEW);
				this.state = 594;
				this.creator();
				}
				break;

			case 5:
				{
				this.state = 595;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 596;
				this.expression(13);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 665;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 663;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 599;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 600;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (ProcessingParser.DIV - 62)) | (1 << (ProcessingParser.MOD - 62)) | (1 << (ProcessingParser.MUL - 62)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 601;
						this.expression(13);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 602;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 603;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ProcessingParser.ADD || _la === ProcessingParser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 604;
						this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 605;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 606;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ProcessingParser.L_SHIFT || _la === ProcessingParser.R_SHIFT)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 607;
						this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 608;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 609;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (ProcessingParser.GT - 39)) | (1 << (ProcessingParser.GE - 39)) | (1 << (ProcessingParser.LT - 39)) | (1 << (ProcessingParser.LE - 39)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 610;
						this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 611;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 612;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ProcessingParser.EQUAL || _la === ProcessingParser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 613;
						this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 614;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 615;
						_localctx._bop = this.match(ProcessingParser.BITAND);
						this.state = 616;
						this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 617;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 618;
						_localctx._bop = this.match(ProcessingParser.BITOR);
						this.state = 619;
						this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 620;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 621;
						_localctx._bop = this.match(ProcessingParser.AND);
						this.state = 622;
						this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 623;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 624;
						_localctx._bop = this.match(ProcessingParser.OR);
						this.state = 625;
						this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 626;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 627;
						_localctx._bop = this.match(ProcessingParser.QUESTION);
						this.state = 628;
						this.expression(0);
						this.state = 629;
						this.match(ProcessingParser.COLON);
						this.state = 630;
						this.expression(2);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 632;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 633;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ProcessingParser.ASSIGN || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (ProcessingParser.ADD_ASSIGN - 59)) | (1 << (ProcessingParser.DIV_ASSIGN - 59)) | (1 << (ProcessingParser.MUL_ASSIGN - 59)) | (1 << (ProcessingParser.SUB_ASSIGN - 59)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 634;
						this.expression(1);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 635;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 636;
						this.match(ProcessingParser.LBRACK);
						this.state = 637;
						this.expression(0);
						this.state = 638;
						this.match(ProcessingParser.RBRACK);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 640;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 641;
						_localctx._bop = this.match(ProcessingParser.DOT);
						this.state = 656;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
						case 1:
							{
							this.state = 642;
							_localctx._id = this.match(ProcessingParser.IDENTIFIER);
							}
							break;

						case 2:
							{
							this.state = 643;
							this.funcCall();
							}
							break;

						case 3:
							{
							this.state = 644;
							this.match(ProcessingParser.THIS);
							}
							break;

						case 4:
							{
							this.state = 645;
							this.match(ProcessingParser.SUPER);
							this.state = 646;
							this.superSuffix();
							}
							break;

						case 5:
							{
							this.state = 647;
							this.match(ProcessingParser.EQUALS);
							this.state = 648;
							this.match(ProcessingParser.LPAREN);
							this.state = 650;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
								{
								this.state = 649;
								this.expressionList();
								}
							}

							this.state = 652;
							this.match(ProcessingParser.RPAREN);
							}
							break;

						case 6:
							{
							this.state = 653;
							this.nonWildcardTypeArguments();
							this.state = 654;
							this.explicitGenericInvocationSuffix();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 658;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 659;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ProcessingParser.DEC || _la === ProcessingParser.INC)) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProcessingParser.RULE_expression);
						this.state = 660;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 661;
						_localctx._bop = this.match(ProcessingParser.INSTANCEOF);
						this.state = 662;
						this.type();
						}
						break;
					}
					}
				}
				this.state = 667;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ProcessingParser.RULE_primary);
		try {
			this.state = 683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 668;
				this.match(ProcessingParser.LPAREN);
				this.state = 669;
				this.expression(0);
				this.state = 670;
				this.match(ProcessingParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 672;
				this.match(ProcessingParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
				this.match(ProcessingParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 674;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 675;
				_localctx._id = this.match(ProcessingParser.IDENTIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 676;
				this.typeOrVoid();
				this.state = 677;
				this.match(ProcessingParser.DOT);
				this.state = 678;
				this.match(ProcessingParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 680;
				this.nonWildcardTypeArguments();
				this.state = 681;
				this.explicitGenericInvocationSuffix();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ProcessingParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			_la = this._input.LA(1);
			if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ProcessingParser.DECIMAL_LITERAL - 78)) | (1 << (ProcessingParser.HEX_LITERAL - 78)) | (1 << (ProcessingParser.FLOAT_LITERAL - 78)) | (1 << (ProcessingParser.COLOR_LITERAL - 78)) | (1 << (ProcessingParser.BOOL_LITERAL - 78)) | (1 << (ProcessingParser.CHAR_LITERAL - 78)) | (1 << (ProcessingParser.STRING_LITERAL - 78)) | (1 << (ProcessingParser.NULL_LITERAL - 78)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ProcessingParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(ProcessingParser.LT);
			this.state = 688;
			this.typeList();
			this.state = 689;
			this.match(ProcessingParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ProcessingParser.RULE_superSuffix);
		let _la: number;
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 691;
				this.arguments();
				}
				break;
			case ProcessingParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 692;
				this.match(ProcessingParser.DOT);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessingParser.LT) {
					{
					this.state = 693;
					this.typeArguments();
					}
				}

				this.state = 696;
				_localctx._id = this.match(ProcessingParser.IDENTIFIER);
				this.state = 698;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 697;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ProcessingParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.match(ProcessingParser.SUPER);
				this.state = 703;
				this.superSuffix();
				}
				break;
			case ProcessingParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				_localctx._id = this.match(ProcessingParser.IDENTIFIER);
				this.state = 705;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ProcessingParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(ProcessingParser.LPAREN);
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
				{
				this.state = 709;
				this.expressionList();
				}
			}

			this.state = 712;
			this.match(ProcessingParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcCall(): FuncCallContext {
		let _localctx: FuncCallContext = new FuncCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ProcessingParser.RULE_funcCall);
		let _la: number;
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 714;
				_localctx._id = this.match(ProcessingParser.IDENTIFIER);
				this.state = 715;
				this.match(ProcessingParser.LPAREN);
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 716;
					this.expressionList();
					}
				}

				this.state = 719;
				this.match(ProcessingParser.RPAREN);
				}
				break;
			case ProcessingParser.SUPER:
			case ProcessingParser.THIS:
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 720;
				_la = this._input.LA(1);
				if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (ProcessingParser.SUPER - 25)) | (1 << (ProcessingParser.THIS - 25)) | (1 << (ProcessingParser.BOOLEAN - 25)) | (1 << (ProcessingParser.BYTE - 25)) | (1 << (ProcessingParser.CHAR - 25)) | (1 << (ProcessingParser.COLOR - 25)) | (1 << (ProcessingParser.FLOAT - 25)) | (1 << (ProcessingParser.INT - 25)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 721;
				this.match(ProcessingParser.LPAREN);
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ProcessingParser.NEW - 17)) | (1 << (ProcessingParser.LPAREN - 17)) | (1 << (ProcessingParser.SUPER - 17)) | (1 << (ProcessingParser.THIS - 17)) | (1 << (ProcessingParser.VOID - 17)) | (1 << (ProcessingParser.BOOLEAN - 17)) | (1 << (ProcessingParser.BYTE - 17)) | (1 << (ProcessingParser.CHAR - 17)) | (1 << (ProcessingParser.COLOR - 17)) | (1 << (ProcessingParser.DOUBLE - 17)) | (1 << (ProcessingParser.FLOAT - 17)) | (1 << (ProcessingParser.INT - 17)) | (1 << (ProcessingParser.LONG - 17)) | (1 << (ProcessingParser.LT - 17)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ProcessingParser.BANG - 57)) | (1 << (ProcessingParser.ADD - 57)) | (1 << (ProcessingParser.DEC - 57)) | (1 << (ProcessingParser.INC - 57)) | (1 << (ProcessingParser.SUB - 57)) | (1 << (ProcessingParser.DECIMAL_LITERAL - 57)) | (1 << (ProcessingParser.HEX_LITERAL - 57)) | (1 << (ProcessingParser.FLOAT_LITERAL - 57)) | (1 << (ProcessingParser.COLOR_LITERAL - 57)) | (1 << (ProcessingParser.BOOL_LITERAL - 57)) | (1 << (ProcessingParser.CHAR_LITERAL - 57)) | (1 << (ProcessingParser.STRING_LITERAL - 57)) | (1 << (ProcessingParser.NULL_LITERAL - 57)) | (1 << (ProcessingParser.IDENTIFIER - 57)))) !== 0)) {
					{
					this.state = 722;
					this.expressionList();
					}
				}

				this.state = 725;
				this.match(ProcessingParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ProcessingParser.RULE_creator);
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 728;
				this.nonWildcardTypeArguments();
				this.state = 729;
				this.createdName();
				this.state = 730;
				this.classCreatorRest();
				}
				break;
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.DOUBLE:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
			case ProcessingParser.LONG:
			case ProcessingParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 732;
				this.createdName();
				this.state = 735;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ProcessingParser.LBRACK:
					{
					this.state = 733;
					this.arrayCreatorRest();
					}
					break;
				case ProcessingParser.LPAREN:
					{
					this.state = 734;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ProcessingParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 739;
				this.createdNameUnit();
				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ProcessingParser.DOT) {
					{
					{
					this.state = 740;
					this.match(ProcessingParser.DOT);
					this.state = 741;
					this.createdNameUnit();
					}
					}
					this.state = 746;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.DOUBLE:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
			case ProcessingParser.LONG:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdNameUnit(): CreatedNameUnitContext {
		let _localctx: CreatedNameUnitContext = new CreatedNameUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ProcessingParser.RULE_createdNameUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			_localctx._id = this.match(ProcessingParser.IDENTIFIER);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessingParser.LT) {
				{
				this.state = 751;
				this.typeArgumentsOrDiamond();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ProcessingParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				this.match(ProcessingParser.LT);
				this.state = 755;
				this.match(ProcessingParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ProcessingParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(ProcessingParser.LBRACK);
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProcessingParser.RBRACK:
				{
				this.state = 760;
				this.match(ProcessingParser.RBRACK);
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ProcessingParser.LBRACK) {
					{
					{
					this.state = 761;
					this.match(ProcessingParser.LBRACK);
					this.state = 762;
					this.match(ProcessingParser.RBRACK);
					}
					}
					this.state = 767;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 768;
				this.arrayInitializer();
				}
				break;
			case ProcessingParser.NEW:
			case ProcessingParser.LPAREN:
			case ProcessingParser.SUPER:
			case ProcessingParser.THIS:
			case ProcessingParser.VOID:
			case ProcessingParser.BOOLEAN:
			case ProcessingParser.BYTE:
			case ProcessingParser.CHAR:
			case ProcessingParser.COLOR:
			case ProcessingParser.DOUBLE:
			case ProcessingParser.FLOAT:
			case ProcessingParser.INT:
			case ProcessingParser.LONG:
			case ProcessingParser.LT:
			case ProcessingParser.BANG:
			case ProcessingParser.ADD:
			case ProcessingParser.DEC:
			case ProcessingParser.INC:
			case ProcessingParser.SUB:
			case ProcessingParser.DECIMAL_LITERAL:
			case ProcessingParser.HEX_LITERAL:
			case ProcessingParser.FLOAT_LITERAL:
			case ProcessingParser.COLOR_LITERAL:
			case ProcessingParser.BOOL_LITERAL:
			case ProcessingParser.CHAR_LITERAL:
			case ProcessingParser.STRING_LITERAL:
			case ProcessingParser.NULL_LITERAL:
			case ProcessingParser.IDENTIFIER:
				{
				this.state = 769;
				this.expression(0);
				this.state = 770;
				this.match(ProcessingParser.RBRACK);
				this.state = 777;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 771;
						this.match(ProcessingParser.LBRACK);
						this.state = 772;
						this.expression(0);
						this.state = 773;
						this.match(ProcessingParser.RBRACK);
						}
						}
					}
					this.state = 779;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				}
				this.state = 784;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 780;
						this.match(ProcessingParser.LBRACK);
						this.state = 781;
						this.match(ProcessingParser.RBRACK);
						}
						}
					}
					this.state = 786;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ProcessingParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.arguments();
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 790;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 44:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 4);

		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);

		case 11:
			return this.precpred(this._ctx, 18);

		case 12:
			return this.precpred(this._ctx, 17);

		case 13:
			return this.precpred(this._ctx, 14);

		case 14:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\u031C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x03\x02\x07" +
		"\x02x\n\x02\f\x02\x0E\x02{\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02" +
		"\x81\n\x02\r\x02\x0E\x02\x82\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\x8B\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\x92\n\x04\f\x04\x0E\x04\x95\v\x04\x03\x05\x07\x05\x98\n\x05\f\x05\x0E" +
		"\x05\x9B\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x07\x07\xA6\n\x07\f\x07\x0E\x07\xA9\v\x07\x03\b\x03\b" +
		"\x03\b\x05\b\xAE\n\b\x03\t\x03\t\x03\t\x07\t\xB3\n\t\f\t\x0E\t\xB6\v\t" +
		"\x03\n\x03\n\x05\n\xBA\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\xC0\n\v\f\v\x0E" +
		"\v\xC3\v\v\x03\v\x05\v\xC6\n\v\x05\v\xC8\n\v\x03\v\x03\v\x03\f\x07\f\xCD" +
		"\n\f\f\f\x0E\f\xD0\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xD7\n\f\x03" +
		"\f\x03\f\x05\f\xDB\n\f\x03\r\x03\r\x05\r\xDF\n\r\x03\x0E\x03\x0E\x05\x0E" +
		"\xE3\n\x0E\x03\x0E\x03\x0E\x07\x0E\xE7\n\x0E\f\x0E\x0E\x0E\xEA\v\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xF0\n\x10\x03\x10\x05\x10\xF3\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xF9\n\x11\f\x11\x0E\x11\xFC\v" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0102\n\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x07\x13\u0109\n\x13\f\x13\x0E\x13\u010C\v\x13" +
		"\x03\x14\x07\x14\u010F\n\x14\f\x14\x0E\x14\u0112\v\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u011A\n\x15\f\x15\x0E\x15\u011D" +
		"\v\x15\x03\x16\x03\x16\x07\x16\u0121\n\x16\f\x16\x0E\x16\u0124\v\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x05\x17\u012A\n\x17\x03\x18\x07\x18\u012D" +
		"\n\x18\f\x18\x0E\x18\u0130\v\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0135" +
		"\n\x18\x03\x18\x03\x18\x05\x18\u0139\n\x18\x03\x18\x03\x18\x05\x18\u013D" +
		"\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0143\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u0149\n\x1A\f\x1A\x0E\x1A\u014C\v\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0153\n\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x07\x1C\u0158\n\x1C\f\x1C\x0E\x1C\u015B\v\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u0160\n\x1D\f\x1D\x0E\x1D\u0163\v\x1D\x03\x1E\x03\x1E" +
		"\x07\x1E\u0167\n\x1E\f\x1E\x0E\x1E\u016A\v\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x05\x1F\u0170\n\x1F\x03\x1F\x03\x1F\x07\x1F\u0174\n\x1F\f\x1F" +
		"\x0E\x1F\u0177\v\x1F\x03\x1F\x03\x1F\x05\x1F\u017B\n\x1F\x03 \x07 \u017E" +
		"\n \f \x0E \u0181\v \x03 \x07 \u0184\n \f \x0E \u0187\v \x03 \x03 \x03" +
		" \x03 \x03 \x05 \u018E\n \x03!\x03!\x03!\x03!\x03!\x05!\u0195\n!\x03\"" +
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x05#\u019E\n#\x03#\x03#\x03$\x03$\x03" +
		"$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01AD\n%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x06%\u01C6\n%\r%\x0E%\u01C7\x03%\x03%" +
		"\x03%\x03%\x03%\x03%\x07%\u01D0\n%\f%\x0E%\u01D3\v%\x03%\x07%\u01D6\n" +
		"%\f%\x0E%\u01D9\v%\x03%\x03%\x03%\x03%\x05%\u01DF\n%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01EB\n%\x03%\x03%\x03%\x03%\x05" +
		"%\u01F1\n%\x03&\x05&\u01F4\n&\x03&\x03&\x05&\u01F8\n&\x03&\x03&\x05&\u01FC" +
		"\n&\x03&\x05&\u01FF\n&\x03\'\x07\'\u0202\n\'\f\'\x0E\'\u0205\v\'\x03\'" +
		"\x03\'\x03\'\x03\'\x05\'\u020B\n\'\x03(\x03(\x03(\x07(\u0210\n(\f(\x0E" +
		"(\u0213\v(\x03)\x07)\u0216\n)\f)\x0E)\u0219\v)\x03)\x03)\x03)\x03)\x03" +
		")\x03*\x03*\x03*\x07*\u0223\n*\f*\x0E*\u0226\v*\x03*\x03*\x03*\x03*\x03" +
		"*\x03+\x03+\x03+\x07+\u0230\n+\f+\x0E+\u0233\v+\x03,\x06,\u0236\n,\r," +
		"\x0E,\u0237\x03,\x06,\u023B\n,\r,\x0E,\u023C\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x05-\u0245\n-\x03-\x03-\x03-\x05-\u024A\n-\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0258\n.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x05.\u028D\n.\x03.\x03.\x03.\x03.\x05.\u0293" +
		"\n.\x03.\x03.\x03.\x03.\x03.\x07.\u029A\n.\f.\x0E.\u029D\v.\x03/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
		"/\u02AE\n/\x030\x030\x031\x031\x031\x031\x032\x032\x032\x052\u02B9\n2" +
		"\x032\x032\x052\u02BD\n2\x052\u02BF\n2\x033\x033\x033\x033\x053\u02C5" +
		"\n3\x034\x034\x054\u02C9\n4\x034\x034\x035\x035\x035\x055\u02D0\n5\x03" +
		"5\x035\x035\x035\x055\u02D6\n5\x035\x055\u02D9\n5\x036\x036\x036\x036" +
		"\x036\x036\x036\x056\u02E2\n6\x056\u02E4\n6\x037\x037\x037\x077\u02E9" +
		"\n7\f7\x0E7\u02EC\v7\x037\x057\u02EF\n7\x038\x038\x058\u02F3\n8\x039\x03" +
		"9\x039\x059\u02F8\n9\x03:\x03:\x03:\x03:\x07:\u02FE\n:\f:\x0E:\u0301\v" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u030A\n:\f:\x0E:\u030D\v:\x03" +
		":\x03:\x07:\u0311\n:\f:\x0E:\u0314\v:\x05:\u0316\n:\x03;\x03;\x05;\u031A" +
		"\n;\x03;\x02\x02\x03Z<\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"\x02\x0E\x05\x02\x0F\x0F\x16\x17\x1A\x1A\x03\x02\x1F&\x05\x02;;>?BC\x04" +
		"\x02@@DE\x04\x02>>CC\x03\x02JK\x04\x02)*,-\x04\x02((++\x06\x02\x05\x05" +
		"==AAFG\x04\x02??BB\x03\x02PW\x05\x02\x1B\x1C\x1F\"$%\x02\u0369\x02y\x03" +
		"\x02\x02\x02\x04\x86\x03\x02\x02\x02\x06\x8E\x03\x02\x02\x02\b\x99\x03" +
		"\x02\x02\x02\n\xA0\x03\x02\x02\x02\f\xA2\x03\x02\x02\x02\x0E\xAA\x03\x02" +
		"\x02\x02\x10\xAF\x03\x02\x02\x02\x12\xB9\x03\x02\x02\x02\x14\xBB\x03\x02" +
		"\x02\x02\x16\xCE\x03\x02\x02\x02\x18\xDE\x03\x02\x02\x02\x1A\xE2\x03\x02" +
		"\x02\x02\x1C\xEB\x03\x02\x02\x02\x1E\xF2\x03\x02\x02\x02 \xF4\x03\x02" +
		"\x02\x02\"\xFF\x03\x02\x02\x02$\u0105\x03\x02\x02\x02&\u0110\x03\x02\x02" +
		"\x02(\u0116\x03\x02\x02\x02*\u011E\x03\x02\x02\x02,\u0129\x03\x02\x02" +
		"\x02.\u012E\x03\x02\x02\x020\u0142\x03\x02\x02\x022\u0144\x03\x02\x02" +
		"\x024\u014F\x03\x02\x02\x026\u0154\x03\x02\x02\x028\u015C\x03\x02\x02" +
		"\x02:\u0164\x03\x02\x02\x02<\u017A\x03\x02\x02\x02>\u017F\x03\x02\x02" +
		"\x02@\u0194\x03\x02\x02\x02B\u0196\x03\x02\x02\x02D\u0199\x03\x02\x02" +
		"\x02F\u01A1\x03\x02\x02\x02H\u01F0\x03\x02\x02\x02J\u01FE\x03\x02\x02" +
		"\x02L\u020A\x03\x02\x02\x02N\u020C\x03\x02\x02\x02P\u0217\x03\x02\x02" +
		"\x02R\u021F\x03\x02\x02\x02T\u022C\x03\x02\x02\x02V\u0235\x03\x02\x02" +
		"\x02X\u0249\x03\x02\x02\x02Z\u0257\x03\x02\x02\x02\\\u02AD\x03\x02\x02" +
		"\x02^\u02AF\x03\x02\x02\x02`\u02B1\x03\x02\x02\x02b\u02BE\x03\x02\x02" +
		"\x02d\u02C4\x03\x02\x02\x02f\u02C6\x03\x02\x02\x02h\u02D8\x03\x02\x02" +
		"\x02j\u02E3\x03\x02\x02\x02l\u02EE\x03\x02\x02\x02n\u02F0\x03\x02\x02" +
		"\x02p\u02F7\x03\x02\x02\x02r\u02F9\x03\x02\x02\x02t\u0317\x03\x02\x02" +
		"\x02vx\x05\x04\x03\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02" +
		"\x02yz\x03\x02\x02\x02z\x80\x03\x02\x02\x02{y\x03\x02\x02\x02|\x81\x05" +
		"\b\x05\x02}\x81\x05\x16\f\x02~\x81\x05H%\x02\x7F\x81\x05.\x18\x02\x80" +
		"|\x03\x02\x02\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x07\x02\x02\x03\x85\x03\x03" +
		"\x02\x02\x02\x86\x87\x07\x11\x02\x02\x87\x8A\x05\x06\x04\x02\x88\x89\x07" +
		"\r\x02\x02\x89\x8B\x07E\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02" +
		"\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x07\x19\x02\x02\x8D\x05\x03\x02" +
		"\x02\x02\x8E\x93\x07X\x02\x02\x8F\x90\x07\r\x02\x02\x90\x92\x07X\x02\x02" +
		"\x91\x8F\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02" +
		"\x93\x94\x03\x02\x02\x02\x94\x07\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02" +
		"\x96\x98\x05\n\x06\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02" +
		"\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02" +
		"\x9B\x99\x03\x02\x02\x02\x9C\x9D\x05\x1A\x0E\x02\x9D\x9E\x05\f\x07\x02" +
		"\x9E\x9F\x07\x19\x02\x02\x9F\t\x03\x02\x02\x02\xA0\xA1\t\x02\x02\x02\xA1" +
		"\v\x03\x02\x02\x02\xA2\xA7\x05\x0E\b\x02\xA3\xA4\x07\b\x02\x02\xA4\xA6" +
		"\x05\x0E\b\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5" +
		"\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\r\x03\x02\x02\x02\xA9\xA7" +
		"\x03\x02\x02\x02\xAA\xAD\x05\x10\t\x02\xAB\xAC\x07\x05\x02\x02\xAC\xAE" +
		"\x05\x12\n\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\x0F" +
		"\x03\x02\x02\x02\xAF\xB4\x07X\x02\x02\xB0\xB1\x07\x03\x02\x02\xB1\xB3" +
		"\x07\x04\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2" +
		"\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x11\x03\x02\x02\x02\xB6\xB4" +
		"\x03\x02\x02\x02\xB7\xBA\x05\x14\v\x02\xB8\xBA\x05Z.\x02\xB9\xB7\x03\x02" +
		"\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\x13\x03\x02\x02\x02\xBB\xC7\x07\n" +
		"\x02\x02\xBC\xC1\x05\x12\n\x02\xBD\xBE\x07\b\x02\x02\xBE\xC0\x05\x12\n" +
		"\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02" +
		"\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02" +
		"\x02\xC4\xC6\x07\b\x02\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02" +
		"\x02\xC6\xC8\x03\x02\x02\x02\xC7\xBC\x03\x02\x02\x02\xC7\xC8\x03\x02\x02" +
		"\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x07\v\x02\x02\xCA\x15\x03\x02\x02" +
		"\x02\xCB\xCD\x05\n\x06\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03\x02\x02" +
		"\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02" +
		"\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x05\x18\r\x02\xD2\xD3\x07X\x02\x02" +
		"\xD3\xD6\x05\"\x12\x02\xD4\xD5\x07L\x02\x02\xD5\xD7\x05(\x15\x02\xD6\xD4" +
		"\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xDB" +
		"\x05*\x16\x02\xD9\xDB\x07\x19\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9" +
		"\x03\x02\x02\x02\xDB\x17\x03\x02\x02\x02\xDC\xDF\x05\x1A\x0E\x02\xDD\xDF" +
		"\x07\x1E\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\x19" +
		"\x03\x02\x02\x02\xE0\xE3\x05\x1E\x10\x02\xE1\xE3\x05\x1C\x0F\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE8\x03\x02\x02\x02\xE4\xE5" +
		"\x07\x03\x02\x02\xE5\xE7\x07\x04\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA" +
		"\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\x1B" +
		"\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEC\t\x03\x02\x02\xEC\x1D" +
		"\x03\x02\x02\x02\xED\xEF\x07X\x02\x02\xEE\xF0\x05 \x11\x02\xEF\xEE\x03" +
		"\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xF3\x05" +
		"\x06\x04\x02\xF2\xED\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3\x1F\x03" +
		"\x02\x02\x02\xF4\xF5\x07,\x02\x02\xF5\xFA\x05\x1A\x0E\x02\xF6\xF7\x07" +
		"\b\x02\x02\xF7\xF9\x05\x1A\x0E\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFC\x03" +
		"\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFD\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\xFE\x07)\x02\x02\xFE!\x03\x02" +
		"\x02\x02\xFF\u0101\x07\x14\x02\x02\u0100\u0102\x05$\x13\x02\u0101\u0100" +
		"\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02" +
		"\u0103\u0104\x07\x15\x02\x02\u0104#\x03\x02\x02\x02\u0105\u010A\x05&\x14" +
		"\x02\u0106\u0107\x07\b\x02\x02\u0107\u0109\x05&\x14\x02\u0108\u0106\x03" +
		"\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A" +
		"\u010B\x03\x02\x02\x02\u010B%\x03\x02\x02\x02\u010C\u010A\x03\x02\x02" +
		"\x02\u010D\u010F\x05\n\x06\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0112" +
		"\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02" +
		"\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0114\x05" +
		"\x1A\x0E\x02\u0114\u0115\x05\x10\t\x02\u0115\'\x03\x02\x02\x02\u0116\u011B" +
		"\x05\x06\x04\x02\u0117\u0118\x07\b\x02\x02\u0118\u011A\x05\x06\x04\x02" +
		"\u0119\u0117\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03" +
		"\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C)\x03\x02\x02\x02\u011D" +
		"\u011B\x03\x02\x02\x02\u011E\u0122\x07\n\x02\x02\u011F\u0121\x05,\x17" +
		"\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02" +
		"\u0124\u0122\x03\x02\x02\x02\u0125\u0126\x07\v\x02\x02\u0126+\x03\x02" +
		"\x02\x02\u0127\u012A\x05\b\x05\x02\u0128\u012A\x05H%\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A-\x03\x02\x02\x02\u012B" +
		"\u012D\x050\x19\x02\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02" +
		"\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131" +
		"\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0132\x07\x07\x02\x02" +
		"\u0132\u0134\x07X\x02\x02\u0133\u0135\x052\x1A\x02\u0134\u0133\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136" +
		"\u0137\x07\x0E\x02\x02\u0137\u0139\x05\x1A\x0E\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A" +
		"\u013B\x07\x10\x02\x02\u013B\u013D\x058\x1D\x02\u013C\u013A\x03\x02\x02" +
		"\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F" +
		"\x05:\x1E\x02\u013F/\x03\x02\x02\x02\u0140\u0143\x05\n\x06\x02\u0141\u0143" +
		"\x07O\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02" +
		"\u01431\x03\x02\x02\x02\u0144\u0145\x07,\x02\x02\u0145\u014A\x054\x1B" +
		"\x02\u0146\u0147\x07\b\x02\x02\u0147\u0149\x054\x1B\x02\u0148\u0146\x03" +
		"\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A" +
		"\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014D\u014E\x07)\x02\x02\u014E3\x03\x02\x02\x02\u014F\u0152\x07" +
		"X\x02\x02\u0150\u0151\x07\x0E\x02\x02\u0151\u0153\x056\x1C\x02\u0152\u0150" +
		"\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u01535\x03\x02\x02\x02\u0154" +
		"\u0159\x05\x1A\x0E\x02\u0155\u0156\x07H\x02\x02\u0156\u0158\x05\x1A\x0E" +
		"\x02\u0157\u0155\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157" +
		"\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A7\x03\x02\x02\x02\u015B" +
		"\u0159\x03\x02\x02\x02\u015C\u0161\x05\x1A\x0E\x02\u015D\u015E\x07\b\x02" +
		"\x02\u015E\u0160\x05\x1A\x0E\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0163" +
		"\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02" +
		"\u01629\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0168\x07\n" +
		"\x02\x02\u0165\u0167\x05<\x1F\x02\u0166\u0165\x03\x02\x02\x02\u0167\u016A" +
		"\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
		"\u0169\u016B\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016C\x07" +
		"\v\x02\x02\u016C;\x03\x02\x02\x02\u016D\u017B\x07\x19\x02\x02\u016E\u0170" +
		"\x07\x1A\x02\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170\u0171\x03\x02\x02\x02\u0171\u017B\x05*\x16\x02\u0172\u0174\x05" +
		"\n\x06\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175" +
		"\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0178\x03\x02" +
		"\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u017B\x05@!\x02\u0179\u017B" +
		"\x05> \x02\u017A\u016D\x03\x02\x02\x02\u017A\u016F\x03\x02\x02\x02\u017A" +
		"\u0175\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B=\x03\x02\x02" +
		"\x02\u017C\u017E\x050\x19\x02\u017D\u017C\x03\x02\x02\x02\u017E\u0181" +
		"\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0185\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0184\x05" +
		"\n\x06\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x05\x18\r\x02\u0189\u018A" +
		"\x07X\x02\x02\u018A\u018D\x05\"\x12\x02\u018B\u018C\x07L\x02\x02\u018C" +
		"\u018E\x05(\x15\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02" +
		"\x02\u018E?\x03\x02\x02\x02\u018F\u0195\x05\x16\f\x02\u0190\u0195\x05" +
		"B\"\x02\u0191\u0195\x05\b\x05\x02\u0192\u0195\x05D#\x02\u0193\u0195\x05" +
		"F$\x02\u0194\u018F\x03\x02\x02\x02\u0194\u0190\x03\x02\x02\x02\u0194\u0191" +
		"\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0193\x03\x02\x02\x02" +
		"\u0195A\x03\x02\x02\x02\u0196\u0197\x052\x1A\x02\u0197\u0198\x05\x16\f" +
		"\x02\u0198C\x03\x02\x02\x02\u0199\u019A\x07X\x02\x02\u019A\u019D\x05\"" +
		"\x12\x02\u019B\u019C\x07L\x02\x02\u019C\u019E\x05(\x15\x02\u019D\u019B" +
		"\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
		"\u019F\u01A0\x05*\x16\x02\u01A0E\x03\x02\x02\x02\u01A1\u01A2\x052\x1A" +
		"\x02\u01A2\u01A3\x05D#\x02\u01A3G\x03\x02\x02\x02\u01A4\u01F1\x05*\x16" +
		"\x02\u01A5\u01A6\x078\x02\x02\u01A6\u01A7\x07\x14\x02\x02\u01A7\u01A8" +
		"\x05Z.\x02\u01A8\u01A9\x07\x15\x02\x02\u01A9\u01AC\x05H%\x02\u01AA\u01AB" +
		"\x077\x02\x02\u01AB\u01AD\x05H%\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC" +
		"\u01AD\x03\x02\x02\x02\u01AD\u01F1\x03\x02\x02\x02\u01AE\u01AF\x07.\x02" +
		"\x02\u01AF\u01B0\x07\x14\x02\x02\u01B0\u01B1\x05J&\x02\u01B1\u01B2\x07" +
		"\x15\x02\x02\u01B2\u01B3\x05H%\x02\u01B3\u01F1\x03\x02\x02\x02\u01B4\u01B5" +
		"\x07/\x02\x02\u01B5\u01B6\x07\x14\x02\x02\u01B6\u01B7\x05Z.\x02\u01B7" +
		"\u01B8\x07\x15\x02\x02\u01B8\u01B9\x05H%\x02\u01B9\u01F1\x03\x02\x02\x02" +
		"\u01BA\u01BB\x070\x02\x02\u01BB\u01BC\x05H%\x02\u01BC\u01BD\x07/\x02\x02" +
		"\u01BD\u01BE\x07\x14\x02\x02\u01BE\u01BF\x05Z.\x02\u01BF\u01C0\x07\x15" +
		"\x02\x02\u01C0\u01C1\x07\x19\x02\x02\u01C1\u01F1\x03\x02\x02\x02\u01C2" +
		"\u01C3\x07\x1D\x02\x02\u01C3\u01C5\x05*\x16\x02\u01C4\u01C6\x05R*\x02" +
		"\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C5\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01F1\x03\x02\x02\x02\u01C9" +
		"\u01CA\x079\x02\x02\u01CA\u01CB\x07\x14\x02\x02\u01CB\u01CC\x05Z.\x02" +
		"\u01CC\u01CD\x07\x15\x02\x02\u01CD\u01D1\x07\n\x02\x02\u01CE\u01D0\x05" +
		"V,\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF" +
		"\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D7\x03\x02\x02\x02" +
		"\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D6\x05X-\x02\u01D5\u01D4\x03\x02" +
		"\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03\x02" +
		"\x02\x02\u01DA\u01DB\x07\v\x02\x02\u01DB\u01F1\x03\x02\x02\x02\u01DC\u01DE" +
		"\x07\x18\x02\x02\u01DD\u01DF\x05Z.\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE" +
		"\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01F1\x07\x19" +
		"\x02\x02\u01E1\u01E2\x07M\x02\x02\u01E2\u01E3\x05Z.\x02\u01E3\u01E4\x07" +
		"\x19\x02\x02\u01E4\u01F1\x03\x02\x02\x02\u01E5\u01E6\x071\x02\x02\u01E6" +
		"\u01F1\x07\x19\x02\x02\u01E7\u01E8\x075\x02\x02\u01E8\u01F1\x07\x19\x02" +
		"\x02\u01E9\u01EB\x05Z.\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03" +
		"\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01F1\x07\x19\x02\x02\u01ED" +
		"\u01EE\x07X\x02\x02\u01EE\u01EF\x074\x02\x02\u01EF\u01F1\x05H%\x02\u01F0" +
		"\u01A4\x03\x02\x02\x02\u01F0\u01A5\x03\x02\x02\x02\u01F0\u01AE\x03\x02" +
		"\x02\x02\u01F0\u01B4\x03\x02\x02\x02\u01F0\u01BA\x03\x02\x02\x02\u01F0" +
		"\u01C2\x03\x02\x02\x02\u01F0\u01C9\x03\x02\x02\x02\u01F0\u01DC\x03\x02" +
		"\x02\x02\u01F0\u01E1\x03\x02\x02\x02\u01F0\u01E5\x03\x02\x02\x02\u01F0" +
		"\u01E7\x03\x02\x02\x02\u01F0\u01EA\x03\x02\x02\x02\u01F0\u01ED\x03\x02" +
		"\x02\x02\u01F1I\x03\x02\x02\x02\u01F2\u01F4\x05L\'\x02\u01F3\u01F2\x03" +
		"\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x07\x19\x02\x02\u01F6\u01F8\x05" +
		"Z.\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9" +
		"\x03\x02\x02\x02\u01F9\u01FB\x07\x19\x02\x02\u01FA\u01FC\x05N(\x02\u01FB" +
		"\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FF\x03\x02" +
		"\x02\x02\u01FD\u01FF\x05P)\x02\u01FE\u01F3\x03\x02\x02\x02\u01FE\u01FD" +
		"\x03\x02\x02\x02\u01FFK\x03\x02\x02\x02\u0200\u0202\x05\n\x06\x02\u0201" +
		"\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02" +
		"\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205" +
		"\u0203\x03\x02\x02\x02\u0206\u0207\x05\x1A\x0E\x02\u0207\u0208\x05\f\x07" +
		"\x02\u0208\u020B\x03\x02\x02\x02\u0209\u020B\x05N(\x02\u020A\u0203\x03" +
		"\x02\x02\x02\u020A\u0209\x03\x02\x02\x02\u020BM\x03\x02\x02\x02\u020C" +
		"\u0211\x05Z.\x02\u020D\u020E\x07\b\x02\x02\u020E\u0210\x05Z.\x02\u020F" +
		"\u020D\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02" +
		"\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212O\x03\x02\x02\x02\u0213\u0211" +
		"\x03\x02\x02\x02\u0214\u0216\x05\n\x06\x02\u0215\u0214\x03\x02\x02\x02" +
		"\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03" +
		"\x02\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
		"\u021B\x05\x1A\x0E\x02\u021B\u021C\x05\x10\t\x02\u021C\u021D\x074\x02" +
		"\x02\u021D\u021E\x05Z.\x02\u021EQ\x03\x02\x02\x02\u021F\u0220\x07\x06" +
		"\x02\x02\u0220\u0224\x07\x14\x02\x02\u0221\u0223\x05\n\x06\x02\u0222\u0221" +
		"\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02" +
		"\u0224\u0225\x03\x02\x02\x02\u0225\u0227\x03\x02\x02\x02\u0226\u0224\x03" +
		"\x02\x02\x02\u0227\u0228\x05T+\x02\u0228\u0229\x07X\x02\x02\u0229\u022A" +
		"\x07\x15\x02\x02\u022A\u022B\x05*\x16\x02\u022BS\x03\x02\x02\x02\u022C" +
		"\u0231\x05\x06\x04\x02\u022D\u022E\x07I\x02\x02\u022E\u0230\x05\x06\x04" +
		"\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F" +
		"\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232U\x03\x02\x02\x02\u0233" +
		"\u0231\x03\x02\x02\x02\u0234\u0236\x05X-\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0236\u0237\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03" +
		"\x02\x02\x02\u0238\u023A\x03\x02\x02\x02\u0239\u023B\x05,\x17\x02\u023A" +
		"\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023A\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023DW\x03\x02\x02\x02\u023E\u0244" +
		"\x072\x02\x02\u023F\u0245\x05Z.\x02\u0240\u0245\x07X\x02\x02\u0241\u0242" +
		"\x05\x1A\x0E\x02\u0242\u0243\x07X\x02\x02\u0243\u0245\x03\x02\x02\x02" +
		"\u0244\u023F\x03\x02\x02\x02\u0244\u0240\x03\x02\x02\x02\u0244\u0241\x03" +
		"\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u024A\x074\x02\x02\u0247" +
		"\u0248\x076\x02\x02\u0248\u024A\x074\x02\x02\u0249\u023E\x03\x02\x02\x02" +
		"\u0249\u0247\x03\x02\x02\x02\u024AY\x03\x02\x02\x02\u024B\u024C\b.\x01" +
		"\x02\u024C\u0258\x05\\/\x02\u024D\u024E\x07\x14\x02\x02\u024E\u024F\x05" +
		"6\x1C\x02\u024F\u0250\x07\x15\x02\x02\u0250\u0251\x05Z.\x15\u0251\u0258" +
		"\x03\x02\x02\x02\u0252\u0258\x05h5\x02\u0253\u0254\x07\x13\x02\x02\u0254" +
		"\u0258\x05j6\x02\u0255\u0256\t\x04\x02\x02\u0256\u0258\x05Z.\x0F\u0257" +
		"\u024B\x03\x02\x02\x02\u0257\u024D\x03\x02\x02\x02\u0257\u0252\x03\x02" +
		"\x02\x02\u0257\u0253\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258" +
		"\u029B\x03\x02\x02\x02\u0259\u025A\f\x0E\x02\x02\u025A\u025B\t\x05\x02" +
		"\x02\u025B\u029A\x05Z.\x0F\u025C\u025D\f\r\x02\x02\u025D\u025E\t\x06\x02" +
		"\x02\u025E\u029A\x05Z.\x0E\u025F\u0260\f\f\x02\x02\u0260\u0261\t\x07\x02" +
		"\x02\u0261\u029A\x05Z.\r\u0262\u0263\f\v\x02\x02\u0263\u0264\t\b\x02\x02" +
		"\u0264\u029A\x05Z.\f\u0265\u0266\f\t\x02\x02\u0266\u0267\t\t\x02\x02\u0267" +
		"\u029A\x05Z.\n\u0268\u0269\f\b\x02\x02\u0269\u026A\x07H\x02\x02\u026A" +
		"\u029A\x05Z.\t\u026B\u026C\f\x07\x02\x02\u026C\u026D\x07I\x02\x02\u026D" +
		"\u029A\x05Z.\b\u026E\u026F\f\x06\x02\x02\u026F\u0270\x07:\x02\x02\u0270" +
		"\u029A\x05Z.\x07\u0271\u0272\f\x05\x02\x02\u0272\u0273\x07<\x02\x02\u0273" +
		"\u029A\x05Z.\x06\u0274\u0275\f\x04\x02\x02\u0275\u0276\x073\x02\x02\u0276" +
		"\u0277\x05Z.\x02\u0277\u0278\x074\x02\x02\u0278\u0279\x05Z.\x04\u0279" +
		"\u029A\x03\x02\x02\x02\u027A\u027B\f\x03\x02\x02\u027B\u027C\t\n\x02\x02" +
		"\u027C\u029A\x05Z.\x03\u027D\u027E\f\x14\x02\x02\u027E\u027F\x07\x03\x02" +
		"\x02\u027F\u0280\x05Z.\x02\u0280\u0281\x07\x04\x02\x02\u0281\u029A\x03" +
		"\x02\x02\x02\u0282\u0283\f\x13\x02\x02\u0283\u0292\x07\r\x02\x02\u0284" +
		"\u0293\x07X\x02\x02\u0285\u0293\x05h5\x02\u0286\u0293\x07\x1C\x02\x02" +
		"\u0287\u0288\x07\x1B\x02\x02\u0288\u0293\x05b2\x02\u0289\u028A\x07\'\x02" +
		"\x02\u028A\u028C\x07\x14\x02\x02\u028B\u028D\x05N(\x02\u028C\u028B\x03" +
		"\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E" +
		"\u0293\x07\x15\x02\x02\u028F\u0290\x05`1\x02\u0290\u0291\x05d3\x02\u0291" +
		"\u0293\x03\x02\x02\x02\u0292\u0284\x03\x02\x02\x02\u0292\u0285\x03\x02" +
		"\x02\x02\u0292\u0286\x03\x02\x02\x02\u0292\u0287\x03\x02\x02\x02\u0292" +
		"\u0289\x03\x02\x02\x02\u0292\u028F\x03\x02\x02\x02\u0293\u029A\x03\x02" +
		"\x02\x02\u0294\u0295\f\x10\x02\x02\u0295\u029A\t\v\x02\x02\u0296\u0297" +
		"\f\n\x02\x02\u0297\u0298\x07N\x02\x02\u0298\u029A\x05\x1A\x0E\x02\u0299" +
		"\u0259\x03\x02\x02\x02\u0299\u025C\x03\x02\x02\x02\u0299\u025F\x03\x02" +
		"\x02\x02\u0299\u0262\x03\x02\x02\x02\u0299\u0265\x03\x02\x02\x02\u0299" +
		"\u0268\x03\x02\x02\x02\u0299\u026B\x03\x02\x02\x02\u0299\u026E\x03\x02" +
		"\x02\x02\u0299\u0271\x03\x02\x02\x02\u0299\u0274\x03\x02\x02\x02\u0299" +
		"\u027A\x03\x02\x02\x02\u0299\u027D\x03\x02\x02\x02\u0299\u0282\x03\x02" +
		"\x02\x02\u0299\u0294\x03\x02\x02\x02\u0299\u0296\x03\x02\x02\x02\u029A" +
		"\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02" +
		"\x02\x02\u029C[\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E\u029F" +
		"\x07\x14\x02\x02\u029F\u02A0\x05Z.\x02\u02A0\u02A1\x07\x15\x02\x02\u02A1" +
		"\u02AE\x03\x02\x02\x02\u02A2\u02AE\x07\x1C\x02\x02\u02A3\u02AE\x07\x1B" +
		"\x02\x02\u02A4\u02AE\x05^0\x02\u02A5\u02AE\x07X\x02\x02\u02A6\u02A7\x05" +
		"\x18\r\x02\u02A7\u02A8\x07\r\x02\x02\u02A8\u02A9\x07\x07\x02\x02\u02A9" +
		"\u02AE\x03\x02\x02\x02\u02AA\u02AB\x05`1\x02\u02AB\u02AC\x05d3\x02\u02AC" +
		"\u02AE\x03\x02\x02\x02\u02AD\u029E\x03\x02\x02\x02\u02AD\u02A2\x03\x02" +
		"\x02\x02\u02AD\u02A3\x03\x02\x02\x02\u02AD\u02A4\x03\x02\x02\x02\u02AD" +
		"\u02A5\x03\x02\x02\x02\u02AD\u02A6\x03\x02\x02\x02\u02AD\u02AA\x03\x02" +
		"\x02\x02\u02AE]\x03\x02\x02\x02\u02AF\u02B0\t\f\x02\x02\u02B0_\x03\x02" +
		"\x02\x02\u02B1\u02B2\x07,\x02\x02\u02B2\u02B3\x058\x1D\x02\u02B3\u02B4" +
		"\x07)\x02\x02\u02B4a\x03\x02\x02\x02\u02B5\u02BF\x05f4\x02\u02B6\u02B8" +
		"\x07\r\x02\x02\u02B7\u02B9\x05 \x11\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8" +
		"\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x07X\x02" +
		"\x02\u02BB\u02BD\x05f4\x02\u02BC\u02BB\x03\x02\x02\x02\u02BC\u02BD\x03" +
		"\x02\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02B5\x03\x02\x02\x02\u02BE" +
		"\u02B6\x03\x02\x02\x02\u02BFc\x03\x02\x02\x02\u02C0\u02C1\x07\x1B\x02" +
		"\x02\u02C1\u02C5\x05b2\x02\u02C2\u02C3\x07X\x02\x02\u02C3\u02C5\x05f4" +
		"\x02\u02C4\u02C0\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C5e\x03" +
		"\x02\x02\x02\u02C6\u02C8\x07\x14\x02\x02\u02C7\u02C9\x05N(\x02\u02C8\u02C7" +
		"\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CA\u02CB\x07\x15\x02\x02\u02CBg\x03\x02\x02\x02\u02CC\u02CD\x07X\x02" +
		"\x02\u02CD\u02CF\x07\x14\x02\x02\u02CE\u02D0\x05N(\x02\u02CF\u02CE\x03" +
		"\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
		"\u02D9\x07\x15\x02\x02\u02D2\u02D3\t\r\x02\x02\u02D3\u02D5\x07\x14\x02" +
		"\x02\u02D4\u02D6\x05N(\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03" +
		"\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x07\x15\x02\x02\u02D8" +
		"\u02CC\x03\x02\x02\x02\u02D8\u02D2\x03\x02\x02\x02\u02D9i\x03\x02\x02" +
		"\x02\u02DA\u02DB\x05`1\x02\u02DB\u02DC\x05l7\x02\u02DC\u02DD\x05t;\x02" +
		"\u02DD\u02E4\x03\x02\x02\x02\u02DE\u02E1\x05l7\x02\u02DF\u02E2\x05r:\x02" +
		"\u02E0\u02E2\x05t;\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E0\x03\x02" +
		"\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02DA\x03\x02\x02\x02\u02E3" +
		"\u02DE\x03\x02\x02\x02\u02E4k\x03\x02\x02\x02\u02E5\u02EA\x05n8\x02\u02E6" +
		"\u02E7\x07\r\x02\x02\u02E7\u02E9\x05n8\x02\u02E8\u02E6\x03\x02\x02\x02" +
		"\u02E9\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03" +
		"\x02\x02\x02\u02EB\u02EF\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED" +
		"\u02EF\x05\x1C\x0F\x02\u02EE\u02E5\x03\x02\x02\x02\u02EE\u02ED\x03\x02" +
		"\x02\x02\u02EFm\x03\x02\x02\x02\u02F0\u02F2\x07X\x02\x02\u02F1\u02F3\x05" +
		"p9\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3o" +
		"\x03\x02\x02\x02\u02F4\u02F5\x07,\x02\x02\u02F5\u02F8\x07)\x02\x02\u02F6" +
		"\u02F8\x05 \x11\x02\u02F7\u02F4\x03\x02\x02\x02\u02F7\u02F6\x03\x02\x02" +
		"\x02\u02F8q\x03\x02\x02\x02\u02F9\u0315\x07\x03\x02\x02\u02FA\u02FF\x07" +
		"\x04\x02\x02\u02FB\u02FC\x07\x03\x02\x02\u02FC\u02FE\x07\x04\x02\x02\u02FD" +
		"\u02FB\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0302\x03\x02\x02\x02\u0301" +
		"\u02FF\x03\x02\x02\x02\u0302\u0316\x05\x14\v\x02\u0303\u0304\x05Z.\x02" +
		"\u0304\u030B\x07\x04\x02\x02\u0305\u0306\x07\x03\x02\x02\u0306\u0307\x05" +
		"Z.\x02\u0307\u0308\x07\x04\x02\x02\u0308\u030A\x03\x02\x02\x02\u0309\u0305" +
		"\x03\x02\x02\x02\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02" +
		"\u030B\u030C\x03\x02\x02\x02\u030C\u0312\x03\x02\x02\x02\u030D\u030B\x03" +
		"\x02\x02\x02\u030E\u030F\x07\x03\x02\x02\u030F\u0311\x07\x04\x02\x02\u0310" +
		"\u030E\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310\x03\x02" +
		"\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314" +
		"\u0312\x03\x02\x02\x02\u0315\u02FA\x03\x02\x02\x02\u0315\u0303\x03\x02" +
		"\x02\x02\u0316s\x03\x02\x02\x02\u0317\u0319\x05f4\x02\u0318\u031A\x05" +
		":\x1E\x02\u0319\u0318\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A" +
		"u\x03\x02\x02\x02^y\x80\x82\x8A\x93\x99\xA7\xAD\xB4\xB9\xC1\xC5\xC7\xCE" +
		"\xD6\xDA\xDE\xE2\xE8\xEF\xF2\xFA\u0101\u010A\u0110\u011B\u0122\u0129\u012E" +
		"\u0134\u0138\u013C\u0142\u014A\u0152\u0159\u0161\u0168\u016F\u0175\u017A" +
		"\u017F\u0185\u018D\u0194\u019D\u01AC\u01C7\u01D1\u01D7\u01DE\u01EA\u01F0" +
		"\u01F3\u01F7\u01FB\u01FE\u0203\u020A\u0211\u0217\u0224\u0231\u0237\u023C" +
		"\u0244\u0249\u0257\u028C\u0292\u0299\u029B\u02AD\u02B8\u02BC\u02BE\u02C4" +
		"\u02C8\u02CF\u02D5\u02D8\u02E1\u02E3\u02EA\u02EE\u02F2\u02F7\u02FF\u030B" +
		"\u0312\u0315\u0319";
	public static readonly _serializedATN: string = Utils.join(
		[
			ProcessingParser._serializedATNSegment0,
			ProcessingParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProcessingParser.__ATN) {
			ProcessingParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ProcessingParser._serializedATN));
		}

		return ProcessingParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ProcessingParser.EOF, 0); }
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public varDecl(): VarDeclContext[];
	public varDecl(i: number): VarDeclContext;
	public varDecl(i?: number): VarDeclContext | VarDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDeclContext);
		} else {
			return this.getRuleContext(i, VarDeclContext);
		}
	}
	public funcDecl(): FuncDeclContext[];
	public funcDecl(i: number): FuncDeclContext;
	public funcDecl(i?: number): FuncDeclContext | FuncDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncDeclContext);
		} else {
			return this.getRuleContext(i, FuncDeclContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public classDecl(): ClassDeclContext[];
	public classDecl(i: number): ClassDeclContext;
	public classDecl(i?: number): ClassDeclContext | ClassDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassDeclContext);
		} else {
			return this.getRuleContext(i, ClassDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(ProcessingParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ProcessingParser.SEMI, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.IDENTIFIER);
		} else {
			return this.getToken(ProcessingParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.DOT);
		} else {
			return this.getToken(ProcessingParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ProcessingParser.SEMI, 0); }
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.PUBLIC, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.PRIVATE, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.FINAL, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.STATIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_modifier; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public _id!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.LBRACK);
		} else {
			return this.getToken(ProcessingParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.RBRACK);
		} else {
			return this.getToken(ProcessingParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ProcessingParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ProcessingParser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
}


export class FuncDeclContext extends ParserRuleContext {
	public _funcId!: Token;
	public typeOrVoid(): TypeOrVoidContext {
		return this.getRuleContext(0, TypeOrVoidContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SEMI, 0); }
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_funcDecl; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterFuncDecl) {
			listener.enterFuncDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitFuncDecl) {
			listener.exitFuncDecl(this);
		}
	}
}


export class TypeOrVoidContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeOrVoid; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeOrVoid) {
			listener.enterTypeOrVoid(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeOrVoid) {
			listener.exitTypeOrVoid(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.LBRACK);
		} else {
			return this.getToken(ProcessingParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.RBRACK);
		} else {
			return this.getToken(ProcessingParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_type; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BOOLEAN, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BYTE, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.CHAR, 0); }
	public COLOR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.COLOR, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.FLOAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LONG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public _id!: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_classType; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(ProcessingParser.LT, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(ProcessingParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ProcessingParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ProcessingParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitQualifiedNameList) {
			listener.exitQualifiedNameList(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ProcessingParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ProcessingParser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_block; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class ClassDeclContext extends ParserRuleContext {
	public _id!: Token;
	public CLASS(): TerminalNode { return this.getToken(ProcessingParser.CLASS, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.EXTENDS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_classDecl; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterClassDecl) {
			listener.enterClassDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitClassDecl) {
			listener.exitClassDecl(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_classModifier; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterClassModifier) {
			listener.enterClassModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitClassModifier) {
			listener.exitClassModifier(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(ProcessingParser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(ProcessingParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public _id!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.BITAND);
		} else {
			return this.getToken(ProcessingParser.BITAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeList; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ProcessingParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ProcessingParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_classBody; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public abstractMethodDeclaration(): AbstractMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AbstractMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
}


export class AbstractMethodDeclarationContext extends ParserRuleContext {
	public _id!: Token;
	public typeOrVoid(): TypeOrVoidContext {
		return this.getRuleContext(0, TypeOrVoidContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_abstractMethodDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterAbstractMethodDeclaration) {
			listener.enterAbstractMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitAbstractMethodDeclaration) {
			listener.exitAbstractMethodDeclaration(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public funcDecl(): FuncDeclContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public funcDecl(): FuncDeclContext {
		return this.getRuleContext(0, FuncDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_genericMethodDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterGenericMethodDeclaration) {
			listener.enterGenericMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitGenericMethodDeclaration) {
			listener.exitGenericMethodDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _id!: Token;
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_genericConstructorDeclaration; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterGenericConstructorDeclaration) {
			listener.enterGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitGenericConstructorDeclaration) {
			listener.exitGenericConstructorDeclaration(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _identifierLabel!: Token;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IF, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.FOR, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DO, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SEMI, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.TRY, 0); }
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BREAK, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.CONTINUE, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_statement; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.SEMI);
		} else {
			return this.getToken(ProcessingParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_forControl; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorsContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_forInit; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.COMMA);
		} else {
			return this.getToken(ProcessingParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(ProcessingParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public _id!: Token;
	public CATCH(): TerminalNode { return this.getToken(ProcessingParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ProcessingParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ProcessingParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.BITOR);
		} else {
			return this.getToken(ProcessingParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_catchType; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _enumConstantName!: Token;
	public _varName!: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(ProcessingParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix!: Token;
	public _bop!: Token;
	public _id!: Token;
	public _postfix!: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LPAREN, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.RPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.RBRACK, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DOT, 0); }
	public funcCall(): FuncCallContext | undefined {
		return this.tryGetRuleContext(0, FuncCallContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.EQUALS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.NEW, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SUB, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.MOD, 0); }
	public L_SHIFT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.L_SHIFT, 0); }
	public R_SHIFT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.R_SHIFT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LT, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.INSTANCEOF, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.NOTEQUAL, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BITAND, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.QUESTION, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DIV_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_expression; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public _id!: Token;
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	public typeOrVoid(): TypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeOrVoidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_primary; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DECIMAL_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.FLOAT_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.HEX_LITERAL, 0); }
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BOOL_LITERAL, 0); }
	public COLOR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.COLOR_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_literal; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(ProcessingParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(ProcessingParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	public _id!: Token;
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_superSuffix; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterSuperSuffix) {
			listener.enterSuperSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitSuperSuffix) {
			listener.exitSuperSuffix(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public _id!: Token;
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterExplicitGenericInvocationSuffix) {
			listener.enterExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitExplicitGenericInvocationSuffix) {
			listener.exitExplicitGenericInvocationSuffix(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ProcessingParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ProcessingParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class FuncCallContext extends ParserRuleContext {
	public _id!: Token;
	public LPAREN(): TerminalNode { return this.getToken(ProcessingParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ProcessingParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.IDENTIFIER, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.SUPER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BOOLEAN, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.BYTE, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.CHAR, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.FLOAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.INT, 0); }
	public COLOR(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.COLOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_funcCall; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterFuncCall) {
			listener.enterFuncCall(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitFuncCall) {
			listener.exitFuncCall(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_creator; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public createdNameUnit(): CreatedNameUnitContext[];
	public createdNameUnit(i: number): CreatedNameUnitContext;
	public createdNameUnit(i?: number): CreatedNameUnitContext | CreatedNameUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreatedNameUnitContext);
		} else {
			return this.getRuleContext(i, CreatedNameUnitContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.DOT);
		} else {
			return this.getToken(ProcessingParser.DOT, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_createdName; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
}


export class CreatedNameUnitContext extends ParserRuleContext {
	public _id!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(ProcessingParser.IDENTIFIER, 0); }
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_createdNameUnit; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterCreatedNameUnit) {
			listener.enterCreatedNameUnit(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitCreatedNameUnit) {
			listener.exitCreatedNameUnit(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ProcessingParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.LBRACK);
		} else {
			return this.getToken(ProcessingParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProcessingParser.RBRACK);
		} else {
			return this.getToken(ProcessingParser.RBRACK, i);
		}
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessingParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: ProcessingParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessingParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
}



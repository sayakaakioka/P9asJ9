// Generated from /Users/akioka/Dropbox/dev/src/P9asJ9/src/P9Parser/ProcessingLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ProcessingLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LBRACK=1, RBRACK=2, ASSIGN=3, CATCH=4, CLASS=5, COMMA=6, COMMENT=7, LBRACE=8, 
		RBRACE=9, DOC_COMMENT=10, DOT=11, EXTENDS=12, FINAL=13, IMPLEMENTS=14, 
		IMPORT=15, BLOCK_COMMENT=16, NEW=17, LPAREN=18, RPAREN=19, PRIVATE=20, 
		PUBLIC=21, RETURN=22, SEMI=23, STATIC=24, SUPER=25, THIS=26, TRY=27, VOID=28, 
		BOOLEAN=29, BYTE=30, CHAR=31, COLOR=32, DOUBLE=33, FLOAT=34, INT=35, LONG=36, 
		EQUAL=37, GT=38, GE=39, NOTEQUAL=40, LT=41, LE=42, FOR=43, WHILE=44, DO=45, 
		BREAK=46, CASE=47, QUESTION=48, COLON=49, CONTINUE=50, DEFAULT=51, ELSE=52, 
		IF=53, SWITCH=54, AND=55, BANG=56, OR=57, ADD_ASSIGN=58, ADD=59, DEC=60, 
		DIV=61, DIV_ASSIGN=62, INC=63, SUB=64, MOD=65, MUL=66, MUL_ASSIGN=67, 
		SUB_ASSIGN=68, BITAND=69, BITOR=70, THROWS=71, THROW=72, INSTANCEOF=73, 
		ABSTRACT=74, DECIMAL_LITERAL=75, HEX_LITERAL=76, FLOAT_LITERAL=77, COLOR_LITERAL=78, 
		BOOL_LITERAL=79, CHAR_LITERAL=80, STRING_LITERAL=81, NULL_LITERAL=82, 
		IDENTIFIER=83, WS=84;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LBRACK", "RBRACK", "ASSIGN", "CATCH", "CLASS", "COMMA", "COMMENT", "LBRACE", 
			"RBRACE", "DOC_COMMENT", "DOT", "EXTENDS", "FINAL", "IMPLEMENTS", "IMPORT", 
			"BLOCK_COMMENT", "NEW", "LPAREN", "RPAREN", "PRIVATE", "PUBLIC", "RETURN", 
			"SEMI", "STATIC", "SUPER", "THIS", "TRY", "VOID", "BOOLEAN", "BYTE", 
			"CHAR", "COLOR", "DOUBLE", "FLOAT", "INT", "LONG", "EQUAL", "GT", "GE", 
			"NOTEQUAL", "LT", "LE", "FOR", "WHILE", "DO", "BREAK", "CASE", "QUESTION", 
			"COLON", "CONTINUE", "DEFAULT", "ELSE", "IF", "SWITCH", "AND", "BANG", 
			"OR", "ADD_ASSIGN", "ADD", "DEC", "DIV", "DIV_ASSIGN", "INC", "SUB", 
			"MOD", "MUL", "MUL_ASSIGN", "SUB_ASSIGN", "BITAND", "BITOR", "THROWS", 
			"THROW", "INSTANCEOF", "ABSTRACT", "DECIMAL_LITERAL", "HEX_LITERAL", 
			"FLOAT_LITERAL", "COLOR_LITERAL", "BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
			"NULL_LITERAL", "IDENTIFIER", "ExponentPart", "EscapeSequence", "HexDigits", 
			"HexDigit", "Digits", "LetterOrDigit", "Letter", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "']'", "'='", "'catch'", "'class'", "','", null, "'{'", 
			"'}'", null, "'.'", "'extends'", "'final'", "'implements'", "'import'", 
			null, "'new'", "'('", "')'", "'private'", "'public'", "'return'", "';'", 
			"'static'", "'super'", "'this'", "'try'", "'void'", "'boolean'", "'byte'", 
			"'char'", "'color'", "'double'", "'float'", "'int'", "'long'", "'=='", 
			"'>'", "'>='", "'!='", "'<'", "'<='", "'for'", "'while'", "'do'", "'break'", 
			"'case'", "'?'", "':'", "'continue'", "'default'", "'else'", "'if'", 
			"'switch'", "'&&'", "'!'", "'||'", "'+='", "'+'", "'--'", "'/'", "'/='", 
			"'++'", "'-'", "'%'", "'*'", "'*='", "'-='", "'&'", "'|'", "'throws'", 
			"'throw'", "'instanceof'", "'abstract'", null, null, null, null, null, 
			null, null, "'null'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LBRACK", "RBRACK", "ASSIGN", "CATCH", "CLASS", "COMMA", "COMMENT", 
			"LBRACE", "RBRACE", "DOC_COMMENT", "DOT", "EXTENDS", "FINAL", "IMPLEMENTS", 
			"IMPORT", "BLOCK_COMMENT", "NEW", "LPAREN", "RPAREN", "PRIVATE", "PUBLIC", 
			"RETURN", "SEMI", "STATIC", "SUPER", "THIS", "TRY", "VOID", "BOOLEAN", 
			"BYTE", "CHAR", "COLOR", "DOUBLE", "FLOAT", "INT", "LONG", "EQUAL", "GT", 
			"GE", "NOTEQUAL", "LT", "LE", "FOR", "WHILE", "DO", "BREAK", "CASE", 
			"QUESTION", "COLON", "CONTINUE", "DEFAULT", "ELSE", "IF", "SWITCH", "AND", 
			"BANG", "OR", "ADD_ASSIGN", "ADD", "DEC", "DIV", "DIV_ASSIGN", "INC", 
			"SUB", "MOD", "MUL", "MUL_ASSIGN", "SUB_ASSIGN", "BITAND", "BITOR", "THROWS", 
			"THROW", "INSTANCEOF", "ABSTRACT", "DECIMAL_LITERAL", "HEX_LITERAL", 
			"FLOAT_LITERAL", "COLOR_LITERAL", "BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
			"NULL_LITERAL", "IDENTIFIER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ProcessingLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ProcessingLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2V\u02c2\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\3\2\3\2\3\3\3\3\3\4"+
		"\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3"+
		"\b\3\b\7\b\u00d2\n\b\f\b\16\b\u00d5\13\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\3\13\7\13\u00e2\n\13\f\13\16\13\u00e5\13\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\7\21\u0112\n\21"+
		"\f\21\16\21\u0115\13\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3"+
		"\23\3\23\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3"+
		"\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3"+
		"\31\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3"+
		"\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3"+
		"\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3"+
		" \3 \3!\3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3"+
		"$\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3+"+
		"\3+\3+\3,\3,\3,\3,\3-\3-\3-\3-\3-\3-\3.\3.\3.\3/\3/\3/\3/\3/\3/\3\60\3"+
		"\60\3\60\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\63\3"+
		"\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3"+
		"\65\3\65\3\66\3\66\3\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\38\38\38\3"+
		"9\39\3:\3:\3:\3;\3;\3;\3<\3<\3=\3=\3=\3>\3>\3?\3?\3?\3@\3@\3@\3A\3A\3"+
		"B\3B\3C\3C\3D\3D\3D\3E\3E\3E\3F\3F\3G\3G\3H\3H\3H\3H\3H\3H\3H\3I\3I\3"+
		"I\3I\3I\3I\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3K\3K\3K\3K\3K\3K\3K\3K\3"+
		"K\3L\3L\3L\5L\u021d\nL\3L\6L\u0220\nL\rL\16L\u0221\3L\5L\u0225\nL\5L\u0227"+
		"\nL\3L\5L\u022a\nL\3M\3M\3M\3M\3M\7M\u0231\nM\fM\16M\u0234\13M\3M\5M\u0237"+
		"\nM\3N\3N\3N\5N\u023c\nN\3N\3N\5N\u0240\nN\3N\5N\u0243\nN\3N\5N\u0246"+
		"\nN\3N\3N\3N\5N\u024b\nN\3N\5N\u024e\nN\5N\u0250\nN\3O\3O\7O\u0254\nO"+
		"\fO\16O\u0257\13O\3O\5O\u025a\nO\3P\3P\3P\3P\3P\3P\3P\3P\3P\5P\u0265\n"+
		"P\3Q\3Q\3Q\5Q\u026a\nQ\3Q\3Q\3R\3R\3R\7R\u0271\nR\fR\16R\u0274\13R\3R"+
		"\3R\3S\3S\3S\3S\3S\3T\3T\7T\u027f\nT\fT\16T\u0282\13T\3U\3U\5U\u0286\n"+
		"U\3U\3U\3V\3V\3V\3V\5V\u028e\nV\3V\5V\u0291\nV\3V\3V\3V\6V\u0296\nV\r"+
		"V\16V\u0297\3V\3V\3V\3V\3V\5V\u029f\nV\3W\3W\3W\7W\u02a4\nW\fW\16W\u02a7"+
		"\13W\3W\5W\u02aa\nW\3X\3X\3Y\3Y\7Y\u02b0\nY\fY\16Y\u02b3\13Y\3Y\5Y\u02b6"+
		"\nY\3Z\3Z\3[\3[\3\\\6\\\u02bd\n\\\r\\\16\\\u02be\3\\\3\\\4\u00e3\u0113"+
		"\2]\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35"+
		"\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36"+
		";\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67"+
		"m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG\u008d"+
		"H\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009fQ\u00a1"+
		"R\u00a3S\u00a5T\u00a7U\u00a9\2\u00ab\2\u00ad\2\u00af\2\u00b1\2\u00b3\2"+
		"\u00b5\2\u00b7V\3\2\24\4\2\f\f\17\17\3\2\63;\4\2NNnn\5\2\62;CHch\6\2\62"+
		";CHaach\6\2FFHHffhh\6\2\f\f\17\17))^^\6\2\f\f\17\17$$^^\4\2GGgg\4\2--"+
		"//\n\2$$))^^ddhhppttvv\3\2\62\65\3\2\629\3\2\62;\4\2\62;aa\7\2&&\62;C"+
		"\\aac|\6\2&&C\\aac|\5\2\13\f\16\17\"\"\2\u02de\2\3\3\2\2\2\2\5\3\2\2\2"+
		"\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3"+
		"\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2"+
		"\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2"+
		"\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2"+
		"\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2"+
		"\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2"+
		"\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y"+
		"\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2"+
		"\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2"+
		"\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177"+
		"\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2"+
		"\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091"+
		"\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2"+
		"\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3"+
		"\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00b7\3\2\2\2\3\u00b9\3\2\2"+
		"\2\5\u00bb\3\2\2\2\7\u00bd\3\2\2\2\t\u00bf\3\2\2\2\13\u00c5\3\2\2\2\r"+
		"\u00cb\3\2\2\2\17\u00cd\3\2\2\2\21\u00d8\3\2\2\2\23\u00da\3\2\2\2\25\u00dc"+
		"\3\2\2\2\27\u00eb\3\2\2\2\31\u00ed\3\2\2\2\33\u00f5\3\2\2\2\35\u00fb\3"+
		"\2\2\2\37\u0106\3\2\2\2!\u010d\3\2\2\2#\u011b\3\2\2\2%\u011f\3\2\2\2\'"+
		"\u0121\3\2\2\2)\u0123\3\2\2\2+\u012b\3\2\2\2-\u0132\3\2\2\2/\u0139\3\2"+
		"\2\2\61\u013b\3\2\2\2\63\u0142\3\2\2\2\65\u0148\3\2\2\2\67\u014d\3\2\2"+
		"\29\u0151\3\2\2\2;\u0156\3\2\2\2=\u015e\3\2\2\2?\u0163\3\2\2\2A\u0168"+
		"\3\2\2\2C\u016e\3\2\2\2E\u0175\3\2\2\2G\u017b\3\2\2\2I\u017f\3\2\2\2K"+
		"\u0184\3\2\2\2M\u0187\3\2\2\2O\u0189\3\2\2\2Q\u018c\3\2\2\2S\u018f\3\2"+
		"\2\2U\u0191\3\2\2\2W\u0194\3\2\2\2Y\u0198\3\2\2\2[\u019e\3\2\2\2]\u01a1"+
		"\3\2\2\2_\u01a7\3\2\2\2a\u01ac\3\2\2\2c\u01ae\3\2\2\2e\u01b0\3\2\2\2g"+
		"\u01b9\3\2\2\2i\u01c1\3\2\2\2k\u01c6\3\2\2\2m\u01c9\3\2\2\2o\u01d0\3\2"+
		"\2\2q\u01d3\3\2\2\2s\u01d5\3\2\2\2u\u01d8\3\2\2\2w\u01db\3\2\2\2y\u01dd"+
		"\3\2\2\2{\u01e0\3\2\2\2}\u01e2\3\2\2\2\177\u01e5\3\2\2\2\u0081\u01e8\3"+
		"\2\2\2\u0083\u01ea\3\2\2\2\u0085\u01ec\3\2\2\2\u0087\u01ee\3\2\2\2\u0089"+
		"\u01f1\3\2\2\2\u008b\u01f4\3\2\2\2\u008d\u01f6\3\2\2\2\u008f\u01f8\3\2"+
		"\2\2\u0091\u01ff\3\2\2\2\u0093\u0205\3\2\2\2\u0095\u0210\3\2\2\2\u0097"+
		"\u0226\3\2\2\2\u0099\u022b\3\2\2\2\u009b\u024f\3\2\2\2\u009d\u0259\3\2"+
		"\2\2\u009f\u0264\3\2\2\2\u00a1\u0266\3\2\2\2\u00a3\u026d\3\2\2\2\u00a5"+
		"\u0277\3\2\2\2\u00a7\u027c\3\2\2\2\u00a9\u0283\3\2\2\2\u00ab\u029e\3\2"+
		"\2\2\u00ad\u02a0\3\2\2\2\u00af\u02ab\3\2\2\2\u00b1\u02ad\3\2\2\2\u00b3"+
		"\u02b7\3\2\2\2\u00b5\u02b9\3\2\2\2\u00b7\u02bc\3\2\2\2\u00b9\u00ba\7]"+
		"\2\2\u00ba\4\3\2\2\2\u00bb\u00bc\7_\2\2\u00bc\6\3\2\2\2\u00bd\u00be\7"+
		"?\2\2\u00be\b\3\2\2\2\u00bf\u00c0\7e\2\2\u00c0\u00c1\7c\2\2\u00c1\u00c2"+
		"\7v\2\2\u00c2\u00c3\7e\2\2\u00c3\u00c4\7j\2\2\u00c4\n\3\2\2\2\u00c5\u00c6"+
		"\7e\2\2\u00c6\u00c7\7n\2\2\u00c7\u00c8\7c\2\2\u00c8\u00c9\7u\2\2\u00c9"+
		"\u00ca\7u\2\2\u00ca\f\3\2\2\2\u00cb\u00cc\7.\2\2\u00cc\16\3\2\2\2\u00cd"+
		"\u00ce\7\61\2\2\u00ce\u00cf\7\61\2\2\u00cf\u00d3\3\2\2\2\u00d0\u00d2\n"+
		"\2\2\2\u00d1\u00d0\3\2\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3"+
		"\u00d4\3\2\2\2\u00d4\u00d6\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d7\b\b"+
		"\2\2\u00d7\20\3\2\2\2\u00d8\u00d9\7}\2\2\u00d9\22\3\2\2\2\u00da\u00db"+
		"\7\177\2\2\u00db\24\3\2\2\2\u00dc\u00dd\7\61\2\2\u00dd\u00de\7,\2\2\u00de"+
		"\u00df\7,\2\2\u00df\u00e3\3\2\2\2\u00e0\u00e2\13\2\2\2\u00e1\u00e0\3\2"+
		"\2\2\u00e2\u00e5\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e4"+
		"\u00e6\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e6\u00e7\7,\2\2\u00e7\u00e8\7\61"+
		"\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00ea\b\13\2\2\u00ea\26\3\2\2\2\u00eb\u00ec"+
		"\7\60\2\2\u00ec\30\3\2\2\2\u00ed\u00ee\7g\2\2\u00ee\u00ef\7z\2\2\u00ef"+
		"\u00f0\7v\2\2\u00f0\u00f1\7g\2\2\u00f1\u00f2\7p\2\2\u00f2\u00f3\7f\2\2"+
		"\u00f3\u00f4\7u\2\2\u00f4\32\3\2\2\2\u00f5\u00f6\7h\2\2\u00f6\u00f7\7"+
		"k\2\2\u00f7\u00f8\7p\2\2\u00f8\u00f9\7c\2\2\u00f9\u00fa\7n\2\2\u00fa\34"+
		"\3\2\2\2\u00fb\u00fc\7k\2\2\u00fc\u00fd\7o\2\2\u00fd\u00fe\7r\2\2\u00fe"+
		"\u00ff\7n\2\2\u00ff\u0100\7g\2\2\u0100\u0101\7o\2\2\u0101\u0102\7g\2\2"+
		"\u0102\u0103\7p\2\2\u0103\u0104\7v\2\2\u0104\u0105\7u\2\2\u0105\36\3\2"+
		"\2\2\u0106\u0107\7k\2\2\u0107\u0108\7o\2\2\u0108\u0109\7r\2\2\u0109\u010a"+
		"\7q\2\2\u010a\u010b\7t\2\2\u010b\u010c\7v\2\2\u010c \3\2\2\2\u010d\u010e"+
		"\7\61\2\2\u010e\u010f\7,\2\2\u010f\u0113\3\2\2\2\u0110\u0112\13\2\2\2"+
		"\u0111\u0110\3\2\2\2\u0112\u0115\3\2\2\2\u0113\u0114\3\2\2\2\u0113\u0111"+
		"\3\2\2\2\u0114\u0116\3\2\2\2\u0115\u0113\3\2\2\2\u0116\u0117\7,\2\2\u0117"+
		"\u0118\7\61\2\2\u0118\u0119\3\2\2\2\u0119\u011a\b\21\2\2\u011a\"\3\2\2"+
		"\2\u011b\u011c\7p\2\2\u011c\u011d\7g\2\2\u011d\u011e\7y\2\2\u011e$\3\2"+
		"\2\2\u011f\u0120\7*\2\2\u0120&\3\2\2\2\u0121\u0122\7+\2\2\u0122(\3\2\2"+
		"\2\u0123\u0124\7r\2\2\u0124\u0125\7t\2\2\u0125\u0126\7k\2\2\u0126\u0127"+
		"\7x\2\2\u0127\u0128\7c\2\2\u0128\u0129\7v\2\2\u0129\u012a\7g\2\2\u012a"+
		"*\3\2\2\2\u012b\u012c\7r\2\2\u012c\u012d\7w\2\2\u012d\u012e\7d\2\2\u012e"+
		"\u012f\7n\2\2\u012f\u0130\7k\2\2\u0130\u0131\7e\2\2\u0131,\3\2\2\2\u0132"+
		"\u0133\7t\2\2\u0133\u0134\7g\2\2\u0134\u0135\7v\2\2\u0135\u0136\7w\2\2"+
		"\u0136\u0137\7t\2\2\u0137\u0138\7p\2\2\u0138.\3\2\2\2\u0139\u013a\7=\2"+
		"\2\u013a\60\3\2\2\2\u013b\u013c\7u\2\2\u013c\u013d\7v\2\2\u013d\u013e"+
		"\7c\2\2\u013e\u013f\7v\2\2\u013f\u0140\7k\2\2\u0140\u0141\7e\2\2\u0141"+
		"\62\3\2\2\2\u0142\u0143\7u\2\2\u0143\u0144\7w\2\2\u0144\u0145\7r\2\2\u0145"+
		"\u0146\7g\2\2\u0146\u0147\7t\2\2\u0147\64\3\2\2\2\u0148\u0149\7v\2\2\u0149"+
		"\u014a\7j\2\2\u014a\u014b\7k\2\2\u014b\u014c\7u\2\2\u014c\66\3\2\2\2\u014d"+
		"\u014e\7v\2\2\u014e\u014f\7t\2\2\u014f\u0150\7{\2\2\u01508\3\2\2\2\u0151"+
		"\u0152\7x\2\2\u0152\u0153\7q\2\2\u0153\u0154\7k\2\2\u0154\u0155\7f\2\2"+
		"\u0155:\3\2\2\2\u0156\u0157\7d\2\2\u0157\u0158\7q\2\2\u0158\u0159\7q\2"+
		"\2\u0159\u015a\7n\2\2\u015a\u015b\7g\2\2\u015b\u015c\7c\2\2\u015c\u015d"+
		"\7p\2\2\u015d<\3\2\2\2\u015e\u015f\7d\2\2\u015f\u0160\7{\2\2\u0160\u0161"+
		"\7v\2\2\u0161\u0162\7g\2\2\u0162>\3\2\2\2\u0163\u0164\7e\2\2\u0164\u0165"+
		"\7j\2\2\u0165\u0166\7c\2\2\u0166\u0167\7t\2\2\u0167@\3\2\2\2\u0168\u0169"+
		"\7e\2\2\u0169\u016a\7q\2\2\u016a\u016b\7n\2\2\u016b\u016c\7q\2\2\u016c"+
		"\u016d\7t\2\2\u016dB\3\2\2\2\u016e\u016f\7f\2\2\u016f\u0170\7q\2\2\u0170"+
		"\u0171\7w\2\2\u0171\u0172\7d\2\2\u0172\u0173\7n\2\2\u0173\u0174\7g\2\2"+
		"\u0174D\3\2\2\2\u0175\u0176\7h\2\2\u0176\u0177\7n\2\2\u0177\u0178\7q\2"+
		"\2\u0178\u0179\7c\2\2\u0179\u017a\7v\2\2\u017aF\3\2\2\2\u017b\u017c\7"+
		"k\2\2\u017c\u017d\7p\2\2\u017d\u017e\7v\2\2\u017eH\3\2\2\2\u017f\u0180"+
		"\7n\2\2\u0180\u0181\7q\2\2\u0181\u0182\7p\2\2\u0182\u0183\7i\2\2\u0183"+
		"J\3\2\2\2\u0184\u0185\7?\2\2\u0185\u0186\7?\2\2\u0186L\3\2\2\2\u0187\u0188"+
		"\7@\2\2\u0188N\3\2\2\2\u0189\u018a\7@\2\2\u018a\u018b\7?\2\2\u018bP\3"+
		"\2\2\2\u018c\u018d\7#\2\2\u018d\u018e\7?\2\2\u018eR\3\2\2\2\u018f\u0190"+
		"\7>\2\2\u0190T\3\2\2\2\u0191\u0192\7>\2\2\u0192\u0193\7?\2\2\u0193V\3"+
		"\2\2\2\u0194\u0195\7h\2\2\u0195\u0196\7q\2\2\u0196\u0197\7t\2\2\u0197"+
		"X\3\2\2\2\u0198\u0199\7y\2\2\u0199\u019a\7j\2\2\u019a\u019b\7k\2\2\u019b"+
		"\u019c\7n\2\2\u019c\u019d\7g\2\2\u019dZ\3\2\2\2\u019e\u019f\7f\2\2\u019f"+
		"\u01a0\7q\2\2\u01a0\\\3\2\2\2\u01a1\u01a2\7d\2\2\u01a2\u01a3\7t\2\2\u01a3"+
		"\u01a4\7g\2\2\u01a4\u01a5\7c\2\2\u01a5\u01a6\7m\2\2\u01a6^\3\2\2\2\u01a7"+
		"\u01a8\7e\2\2\u01a8\u01a9\7c\2\2\u01a9\u01aa\7u\2\2\u01aa\u01ab\7g\2\2"+
		"\u01ab`\3\2\2\2\u01ac\u01ad\7A\2\2\u01adb\3\2\2\2\u01ae\u01af\7<\2\2\u01af"+
		"d\3\2\2\2\u01b0\u01b1\7e\2\2\u01b1\u01b2\7q\2\2\u01b2\u01b3\7p\2\2\u01b3"+
		"\u01b4\7v\2\2\u01b4\u01b5\7k\2\2\u01b5\u01b6\7p\2\2\u01b6\u01b7\7w\2\2"+
		"\u01b7\u01b8\7g\2\2\u01b8f\3\2\2\2\u01b9\u01ba\7f\2\2\u01ba\u01bb\7g\2"+
		"\2\u01bb\u01bc\7h\2\2\u01bc\u01bd\7c\2\2\u01bd\u01be\7w\2\2\u01be\u01bf"+
		"\7n\2\2\u01bf\u01c0\7v\2\2\u01c0h\3\2\2\2\u01c1\u01c2\7g\2\2\u01c2\u01c3"+
		"\7n\2\2\u01c3\u01c4\7u\2\2\u01c4\u01c5\7g\2\2\u01c5j\3\2\2\2\u01c6\u01c7"+
		"\7k\2\2\u01c7\u01c8\7h\2\2\u01c8l\3\2\2\2\u01c9\u01ca\7u\2\2\u01ca\u01cb"+
		"\7y\2\2\u01cb\u01cc\7k\2\2\u01cc\u01cd\7v\2\2\u01cd\u01ce\7e\2\2\u01ce"+
		"\u01cf\7j\2\2\u01cfn\3\2\2\2\u01d0\u01d1\7(\2\2\u01d1\u01d2\7(\2\2\u01d2"+
		"p\3\2\2\2\u01d3\u01d4\7#\2\2\u01d4r\3\2\2\2\u01d5\u01d6\7~\2\2\u01d6\u01d7"+
		"\7~\2\2\u01d7t\3\2\2\2\u01d8\u01d9\7-\2\2\u01d9\u01da\7?\2\2\u01dav\3"+
		"\2\2\2\u01db\u01dc\7-\2\2\u01dcx\3\2\2\2\u01dd\u01de\7/\2\2\u01de\u01df"+
		"\7/\2\2\u01dfz\3\2\2\2\u01e0\u01e1\7\61\2\2\u01e1|\3\2\2\2\u01e2\u01e3"+
		"\7\61\2\2\u01e3\u01e4\7?\2\2\u01e4~\3\2\2\2\u01e5\u01e6\7-\2\2\u01e6\u01e7"+
		"\7-\2\2\u01e7\u0080\3\2\2\2\u01e8\u01e9\7/\2\2\u01e9\u0082\3\2\2\2\u01ea"+
		"\u01eb\7\'\2\2\u01eb\u0084\3\2\2\2\u01ec\u01ed\7,\2\2\u01ed\u0086\3\2"+
		"\2\2\u01ee\u01ef\7,\2\2\u01ef\u01f0\7?\2\2\u01f0\u0088\3\2\2\2\u01f1\u01f2"+
		"\7/\2\2\u01f2\u01f3\7?\2\2\u01f3\u008a\3\2\2\2\u01f4\u01f5\7(\2\2\u01f5"+
		"\u008c\3\2\2\2\u01f6\u01f7\7~\2\2\u01f7\u008e\3\2\2\2\u01f8\u01f9\7v\2"+
		"\2\u01f9\u01fa\7j\2\2\u01fa\u01fb\7t\2\2\u01fb\u01fc\7q\2\2\u01fc\u01fd"+
		"\7y\2\2\u01fd\u01fe\7u\2\2\u01fe\u0090\3\2\2\2\u01ff\u0200\7v\2\2\u0200"+
		"\u0201\7j\2\2\u0201\u0202\7t\2\2\u0202\u0203\7q\2\2\u0203\u0204\7y\2\2"+
		"\u0204\u0092\3\2\2\2\u0205\u0206\7k\2\2\u0206\u0207\7p\2\2\u0207\u0208"+
		"\7u\2\2\u0208\u0209\7v\2\2\u0209\u020a\7c\2\2\u020a\u020b\7p\2\2\u020b"+
		"\u020c\7e\2\2\u020c\u020d\7g\2\2\u020d\u020e\7q\2\2\u020e\u020f\7h\2\2"+
		"\u020f\u0094\3\2\2\2\u0210\u0211\7c\2\2\u0211\u0212\7d\2\2\u0212\u0213"+
		"\7u\2\2\u0213\u0214\7v\2\2\u0214\u0215\7t\2\2\u0215\u0216\7c\2\2\u0216"+
		"\u0217\7e\2\2\u0217\u0218\7v\2\2\u0218\u0096\3\2\2\2\u0219\u0227\7\62"+
		"\2\2\u021a\u0224\t\3\2\2\u021b\u021d\5\u00b1Y\2\u021c\u021b\3\2\2\2\u021c"+
		"\u021d\3\2\2\2\u021d\u0225\3\2\2\2\u021e\u0220\7a\2\2\u021f\u021e\3\2"+
		"\2\2\u0220\u0221\3\2\2\2\u0221\u021f\3\2\2\2\u0221\u0222\3\2\2\2\u0222"+
		"\u0223\3\2\2\2\u0223\u0225\5\u00b1Y\2\u0224\u021c\3\2\2\2\u0224\u021f"+
		"\3\2\2\2\u0225\u0227\3\2\2\2\u0226\u0219\3\2\2\2\u0226\u021a\3\2\2\2\u0227"+
		"\u0229\3\2\2\2\u0228\u022a\t\4\2\2\u0229\u0228\3\2\2\2\u0229\u022a\3\2"+
		"\2\2\u022a\u0098\3\2\2\2\u022b\u022c\7\62\2\2\u022c\u022d\7z\2\2\u022d"+
		"\u022e\3\2\2\2\u022e\u0236\t\5\2\2\u022f\u0231\t\6\2\2\u0230\u022f\3\2"+
		"\2\2\u0231\u0234\3\2\2\2\u0232\u0230\3\2\2\2\u0232\u0233\3\2\2\2\u0233"+
		"\u0235\3\2\2\2\u0234\u0232\3\2\2\2\u0235\u0237\t\5\2\2\u0236\u0232\3\2"+
		"\2\2\u0236\u0237\3\2\2\2\u0237\u009a\3\2\2\2\u0238\u0239\5\u00b1Y\2\u0239"+
		"\u023b\7\60\2\2\u023a\u023c\5\u00b1Y\2\u023b\u023a\3\2\2\2\u023b\u023c"+
		"\3\2\2\2\u023c\u0240\3\2\2\2\u023d\u023e\7\60\2\2\u023e\u0240\5\u00b1"+
		"Y\2\u023f\u0238\3\2\2\2\u023f\u023d\3\2\2\2\u0240\u0242\3\2\2\2\u0241"+
		"\u0243\5\u00a9U\2\u0242\u0241\3\2\2\2\u0242\u0243\3\2\2\2\u0243\u0245"+
		"\3\2\2\2\u0244\u0246\t\7\2\2\u0245\u0244\3\2\2\2\u0245\u0246\3\2\2\2\u0246"+
		"\u0250\3\2\2\2\u0247\u024d\5\u00b1Y\2\u0248\u024a\5\u00a9U\2\u0249\u024b"+
		"\t\7\2\2\u024a\u0249\3\2\2\2\u024a\u024b\3\2\2\2\u024b\u024e\3\2\2\2\u024c"+
		"\u024e\t\7\2\2\u024d\u0248\3\2\2\2\u024d\u024c\3\2\2\2\u024e\u0250\3\2"+
		"\2\2\u024f\u023f\3\2\2\2\u024f\u0247\3\2\2\2\u0250\u009c\3\2\2\2\u0251"+
		"\u0255\7%\2\2\u0252\u0254\t\5\2\2\u0253\u0252\3\2\2\2\u0254\u0257\3\2"+
		"\2\2\u0255\u0253\3\2\2\2\u0255\u0256\3\2\2\2\u0256\u025a\3\2\2\2\u0257"+
		"\u0255\3\2\2\2\u0258\u025a\5\u0099M\2\u0259\u0251\3\2\2\2\u0259\u0258"+
		"\3\2\2\2\u025a\u009e\3\2\2\2\u025b\u025c\7v\2\2\u025c\u025d\7t\2\2\u025d"+
		"\u025e\7w\2\2\u025e\u0265\7g\2\2\u025f\u0260\7h\2\2\u0260\u0261\7c\2\2"+
		"\u0261\u0262\7n\2\2\u0262\u0263\7u\2\2\u0263\u0265\7g\2\2\u0264\u025b"+
		"\3\2\2\2\u0264\u025f\3\2\2\2\u0265\u00a0\3\2\2\2\u0266\u0269\7)\2\2\u0267"+
		"\u026a\n\b\2\2\u0268\u026a\5\u00abV\2\u0269\u0267\3\2\2\2\u0269\u0268"+
		"\3\2\2\2\u026a\u026b\3\2\2\2\u026b\u026c\7)\2\2\u026c\u00a2\3\2\2\2\u026d"+
		"\u0272\7$\2\2\u026e\u0271\n\t\2\2\u026f\u0271\5\u00abV\2\u0270\u026e\3"+
		"\2\2\2\u0270\u026f\3\2\2\2\u0271\u0274\3\2\2\2\u0272\u0270\3\2\2\2\u0272"+
		"\u0273\3\2\2\2\u0273\u0275\3\2\2\2\u0274\u0272\3\2\2\2\u0275\u0276\7$"+
		"\2\2\u0276\u00a4\3\2\2\2\u0277\u0278\7p\2\2\u0278\u0279\7w\2\2\u0279\u027a"+
		"\7n\2\2\u027a\u027b\7n\2\2\u027b\u00a6\3\2\2\2\u027c\u0280\5\u00b5[\2"+
		"\u027d\u027f\5\u00b3Z\2\u027e\u027d\3\2\2\2\u027f\u0282\3\2\2\2\u0280"+
		"\u027e\3\2\2\2\u0280\u0281\3\2\2\2\u0281\u00a8\3\2\2\2\u0282\u0280\3\2"+
		"\2\2\u0283\u0285\t\n\2\2\u0284\u0286\t\13\2\2\u0285\u0284\3\2\2\2\u0285"+
		"\u0286\3\2\2\2\u0286\u0287\3\2\2\2\u0287\u0288\5\u00b1Y\2\u0288\u00aa"+
		"\3\2\2\2\u0289\u028a\7^\2\2\u028a\u029f\t\f\2\2\u028b\u0290\7^\2\2\u028c"+
		"\u028e\t\r\2\2\u028d\u028c\3\2\2\2\u028d\u028e\3\2\2\2\u028e\u028f\3\2"+
		"\2\2\u028f\u0291\t\16\2\2\u0290\u028d\3\2\2\2\u0290\u0291\3\2\2\2\u0291"+
		"\u0292\3\2\2\2\u0292\u029f\t\16\2\2\u0293\u0295\7^\2\2\u0294\u0296\7w"+
		"\2\2\u0295\u0294\3\2\2\2\u0296\u0297\3\2\2\2\u0297\u0295\3\2\2\2\u0297"+
		"\u0298\3\2\2\2\u0298\u0299\3\2\2\2\u0299\u029a\5\u00afX\2\u029a\u029b"+
		"\5\u00afX\2\u029b\u029c\5\u00afX\2\u029c\u029d\5\u00afX\2\u029d\u029f"+
		"\3\2\2\2\u029e\u0289\3\2\2\2\u029e\u028b\3\2\2\2\u029e\u0293\3\2\2\2\u029f"+
		"\u00ac\3\2\2\2\u02a0\u02a9\5\u00afX\2\u02a1\u02a4\5\u00afX\2\u02a2\u02a4"+
		"\7a\2\2\u02a3\u02a1\3\2\2\2\u02a3\u02a2\3\2\2\2\u02a4\u02a7\3\2\2\2\u02a5"+
		"\u02a3\3\2\2\2\u02a5\u02a6\3\2\2\2\u02a6\u02a8\3\2\2\2\u02a7\u02a5\3\2"+
		"\2\2\u02a8\u02aa\5\u00afX\2\u02a9\u02a5\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa"+
		"\u00ae\3\2\2\2\u02ab\u02ac\t\5\2\2\u02ac\u00b0\3\2\2\2\u02ad\u02b5\t\17"+
		"\2\2\u02ae\u02b0\t\20\2\2\u02af\u02ae\3\2\2\2\u02b0\u02b3\3\2\2\2\u02b1"+
		"\u02af\3\2\2\2\u02b1\u02b2\3\2\2\2\u02b2\u02b4\3\2\2\2\u02b3\u02b1\3\2"+
		"\2\2\u02b4\u02b6\t\17\2\2\u02b5\u02b1\3\2\2\2\u02b5\u02b6\3\2\2\2\u02b6"+
		"\u00b2\3\2\2\2\u02b7\u02b8\t\21\2\2\u02b8\u00b4\3\2\2\2\u02b9\u02ba\t"+
		"\22\2\2\u02ba\u00b6\3\2\2\2\u02bb\u02bd\t\23\2\2\u02bc\u02bb\3\2\2\2\u02bd"+
		"\u02be\3\2\2\2\u02be\u02bc\3\2\2\2\u02be\u02bf\3\2\2\2\u02bf\u02c0\3\2"+
		"\2\2\u02c0\u02c1\b\\\2\2\u02c1\u00b8\3\2\2\2&\2\u00d3\u00e3\u0113\u021c"+
		"\u0221\u0224\u0226\u0229\u0232\u0236\u023b\u023f\u0242\u0245\u024a\u024d"+
		"\u024f\u0255\u0259\u0264\u0269\u0270\u0272\u0280\u0285\u028d\u0290\u0297"+
		"\u029e\u02a3\u02a5\u02a9\u02b1\u02b5\u02be\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
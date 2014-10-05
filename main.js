define(function (require, exports, module) {
	"use strict";

	var LanguageManager = brackets.getModule("language/LanguageManager");

	var language = LanguageManager.getLanguage("ejs");

	language.addFileExtension("ect");
	language.addFileName("ECT");
	language.setBlockCommentSyntax("<!--", "-->");
});
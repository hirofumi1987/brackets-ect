/*jslint devel:true */
define(function (require, exports, module) {
    'use strict';
    var LanguageManager = brackets.getModule("language/LanguageManager");
    LanguageManager.defineLanguage("ect", {
        name: "ECT",
        mode: "ejs",
        fileExtensions: ["ect"],
        blockComment: ["/*", "*/"]
    });
    console.log("ECT syntax highlighting extension loaded");
});
define(function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-activator-dark";


var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

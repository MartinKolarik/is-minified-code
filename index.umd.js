(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.isMinified = factory());
}(this, (function () {
	'use strict';

	var COMMENT_PATTERN = /\/\*[\s\S]*?\*\/|\/\/.*?(?:\n|$)/g;

	var main = function (code) {
		code = code.replace(COMMENT_PATTERN, '');
		return code.length / code.split('\n').length > 200;
	};

	return main;

})));

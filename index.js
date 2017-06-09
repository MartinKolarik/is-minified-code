const COMMENT_PATTERN = /\/\*[\s\S]*?\*\/|\/\/.*?(?:\n|$)/g;

module.exports = function (code) {
	code = code.replace(COMMENT_PATTERN, '');
	return code.length / code.split('\n').length > 200;
};

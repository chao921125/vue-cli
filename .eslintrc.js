module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2022: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@babel/eslint-parser",
		ecmaVersion: "latest",
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: false,
		},
	},
	extends: ["eslint:recommended", "plugin:vue/essential", "plugin:prettier/recommended", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"generator-star-spacing": "off",
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"vue/multi-word-component-names": "off",
		"vue/no-reserved-component-names": "off",
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)"],
			env: {
				mocha: true,
			},
		},
	],
};

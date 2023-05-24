module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2022: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended", "@vue/prettier"],
	plugins: ["vue", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"generator-star-spacing": "off",
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"vue/multi-word-component-names": "off",
		"vue/no-reserved-component-names": "off",
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
		sourceType: "module",
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

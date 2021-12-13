module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/prettier"
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'space-before-function-paren': 0,
    'no-irregular-whitespace': 0,
    "vue/no-multiple-template-root": 0,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module',
    ecmaVersion: 2021
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true
      }
    }
  ]
};

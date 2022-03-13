// @ts-check
const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    // Ref sugar (take 2)
    $: "readonly",
    $$: "readonly",
    $ref: "readonly",
    $shallowRef: "readonly",
    $computed: "readonly",

    // index.d.ts
    // global.d.ts
    Fn: "readonly",
    PromiseFn: "readonly",
    RefType: "readonly",
    LabelValueOptions: "readonly",
    EmitType: "readonly",
    TargetContext: "readonly",
    ComponentElRef: "readonly",
    ComponentRef: "readonly",
    ElRef: "readonly",
    global: "readonly",
    ForDataType: "readonly",
    ComponentRoutes: "readonly",

    // script setup
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "@vue/eslint-config-typescript",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-use-before-define": "off",
    "no-console": ["warn"],
    "no-debugger": "off",
    "space-before-function-paren": "off",
    "vue/attributes-order": "off",
    "vue/custom-event-name-casing": "off",
    "vue/one-component-per-file": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/script-setup-uses-vars": "error",
    "vue/singleline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    quotes: ["warn", "double"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
});

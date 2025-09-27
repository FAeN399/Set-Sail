import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const tsRecommended = tseslint.configs.recommended;

export default [
  {
    files: ["**/*.ts"],
    ignores: ["dist", "node_modules"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      ...tsRecommended.rules,
      "@typescript-eslint/explicit-function-return-type": "off"
    }
  },
  {
    ignores: ["dist", "node_modules"]
  }
];

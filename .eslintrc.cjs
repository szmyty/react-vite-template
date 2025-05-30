/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "import",
    "jsx-a11y",
    "react-hooks"
  ],
  rules: {
    // Optional enhancements
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "react/jsx-props-no-spreading": "off", // Useful in UI libraries
    "import/prefer-default-export": "off", // Named exports preferred in modular systems
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-console": "warn"
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json"
      }
    }
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "*.config.js",
    "*.config.cjs",
    "*.config.mjs"
  ]
};

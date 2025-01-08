module.exports = {
  parser: "@typescript-eslint/parser", // Specify the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Allows for modern ECMAScript features
    sourceType: "module", // Allows for using import/export
  },
  env: {
    node: true, // Enable Node.js global variables and Node.js scoping
    es2020: true, // Enable ECMAScript 2020 globals
  },
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules
    "plugin:@typescript-eslint/recommended", // Use TypeScript-specific linting rules
    "plugin:node/recommended", // Enable Node.js specific linting rules
  ],
  plugins: ["@typescript-eslint", "node"], // Enable TypeScript and Node.js plugins
  rules: {
    // Add or modify rules as per your preferences
    "@typescript-eslint/no-unused-vars": "warn", // Warn on unused variables
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optionally disable type annotations for functions
  },
};

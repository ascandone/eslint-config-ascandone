module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    // "plugin:prettier/recommended",
  ],
  plugins: ["react-hooks"],
  rules: {
    "@next/next/no-img-element": ["off"],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "implicit-arrow-linebreak": ["off"],
    "import/extensions": ["off"],
    "import/no-anonymous-default-export": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts", "**/*.test.tsx", "jest.setup.ts"] },
    ],
    "import/no-unresolved": ["off"],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/no-noninteractive-element-interactions": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "max-len": ["off"],
    "no-confusing-arrow": ["off"],
    "no-undef": ["off"],
    "no-underscore-dangle": ["off"],
    "no-unused-vars": ["off"],
    "no-use-before-define": ["off"],
    "object-curly-newline": ["off"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-one-expression-per-line": ["off"],
    "react/jsx-wrap-multilines": ["off"],
    "react/no-array-index-key": ["off"],
    "react/no-unescaped-entities": ["off"],
    "react/prop-types": ["off"],
    "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
  },
};

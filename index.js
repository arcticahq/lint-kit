module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:mdx/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/standard",
    "prettier/react",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Sentry: "readonly",
  },
  ignorePatterns: [`public`, `storybook`, `coverage`],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      { extensions: [`.js`, ".jsx", ".ts", ".tsx"] },
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        required: { every: [`nesting`] },
        allowChildren: true,
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      `error`,
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: `either`,
        depth: 25,
      },
    ],
    quotes: [2, `backtick`],
    "react/state-in-constructor": "off",
    "react/no-danger": "off",
    "import/no-extraneous-dependencies": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
  overrides: [
    {
      files: ["*.md"],
      rules: {
        "prettier/prettier": [
          2,
          {
            parser: "markdown",
          },
        ],
      },
    },
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/overrides"],
    },
    {
      files: ["*.tsx"],
      rules: {
        "@typescript-eslint": [
          2,
          {
            parser: "@typescript-eslint/parser",
          },
        ],
      },
    },
  ],
}

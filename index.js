module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "prettier/standard",
    "prettier/react"
  ],
  plugins: ["react", "prettier"],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    Sentry: "readonly",
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "jsx-a11y/label-has-for": [
      2,
      {
        required: { every: ["nesting"] },
        allowChildren: true
      }
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/state-in-constructor": "off",
    "react/no-danger": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off"
  },
  "overrides": [
    {
      "files": ["*.test.js","*.spec.js"],
      "rules": {
        "import/no-extraneous-dependencies": "off",
      }
    }
  ]
};
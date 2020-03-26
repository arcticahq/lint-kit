<p align="center">
  <a href="https://arctica.io">
    <img alt="Arctica logo" src="https://arctica.io/static/android-chrome-192x192.png" width="60" />
  </a>
</p>

<h1 align="center">@arctica/lint-kit</h1>

An opinionated ESLint/Prettier baseline for linting JavaScript projects with support for React, React Hooks and JSX a11y.

This makes maintaining multiple projects easier, and allows us to stop being concerned with code style and instead focus on code quality during code reviews.

## Usage

Install the package from the NPM registry:

`npm i @arctica/lint-kit`

Add config to your `package.json`:

```JSON
"prettier": "@arctica/lint-kit/prettier.config",
"eslintConfig": {
  "extends": [
    "./node_modules/@arctica/lint-kit"
  ]
},
"scripts": {
  "lint": "./node_modules/.bin/eslint --ext .js --ignore-pattern public .",
  "lint:fix": "./node_modules/.bin/eslint --fix --ext .js --ignore-pattern public ."
}
```

`npm run lint` will run both Prettier and ESLint.

`npm run lint:fix` will attempt to automatically fix any lint errors.

## Overriding Defaults

### Prettier

To override Prettier settings, create a `.prettierrc.js` file in the root of your application instead of the reference in `package.json` and add your overrides there.

```javascript
module.exports = {
  ...require("@arctica/lint-kit/prettier.config"),
  semi: true,
}
```

### ESlint

To override ESLint settings, create a `.eslintrc` file and add your overrides there.

## Editor Config

### VS Code

To enable automatic formatting on save, install the VS Code [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugins.

In your project or global VS Code `settings.json` file, add:

```JSON
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
```

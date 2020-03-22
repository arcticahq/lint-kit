# @arctica/eslint-config

An opinionated ESLint/Prettier baseline for linting JavaScript projects.

## Usage

Install the package from the NPM registry:

`npm i @arctica/eslint-config`

Add config to your `package.json`:

```
"eslintConfig": {
  "extends": [
    "@arctica/eslint-config"
  ]
},
"prettier": "@arctica/eslint-config/prettier.config",
"scripts": {
  "lint": "./node_modules/.bin/eslint --ext .js --ignore-pattern public .",
  "lint:fix": "./node_modules/.bin/eslint --fix --ext .js --ignore-pattern public .",
}

```

## Editor config

To enable automatic formatting on save, install the ESLint and Prettier plugins:

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

VS Code: `settings.json`

```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
```

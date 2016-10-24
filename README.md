# eslint-config-waldojeffers

This package provides my personal base JavaScript .eslintrc as an extensible shared config. It can be used globally or locally.

## Installation
### Global
`npm install -g eslint-config-waldojeffers`

### Local
`npm install --save eslint-config-waldojeffers`

## Usage
Add `"extends" : "waldojeffers"` to you **local** .eslintrc file. If you want to enable rules specific to ES6 or Node.js, you need to specify it in the `env` option in your `.eslintrc.*` file as follows :
```json
{
  "env": {
    "es6": true,
    "node": true
  }
}
```

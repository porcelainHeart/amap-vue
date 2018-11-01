module.exports = {
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false,
  },
  "plugins": ['vue'],
  "extends": ['plugin:vue/recommended', 'eslint-config-airbnb/base'],
  "globals": {
    "APP_VERSION": true,
    "$": true,
    "Cropper": true,
    "angular": true
  },
  "rules": {
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "import/no-unresolved": [
      "off"
    ],
    "no-underscore-dangle": 0,
    "global-require": 0,
    "import/extensions": ['off', 'never'],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "class-methods-use-this": 0,
    "no-bitwise": 0
  }
};

module.exports = {
    "env": {
        "es6": true,
        "browser": true
    },
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        'linebreak-style': 0,
        'require-jsdoc': 0,
        'max-len': ['error', {'code': 120}],
        'new-cap': 0
    }
};

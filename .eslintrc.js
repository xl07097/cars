module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "quotes": ["off", "double"],
        "no-unused-vars": ["off"],
        "no-console": ["off"],
        "no-undef": ["off"]
    }
};
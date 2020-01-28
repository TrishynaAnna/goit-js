module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "off"
    }
    module.exports = {
        parser: "babel-eslint",
        extends: ["airbnb", "prettier"],
        plugins: ["react", "jsx-a11y", "import"]
    };
};

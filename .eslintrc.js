// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint"
    },
    env: {
        browser: true
    },
    // https://github.com/standard/eslint-config-standard
    // https://github.com/prettier/eslint-config-prettier
    // https://github.com/vuejs/eslint-plugin-vue
    extends: ["prettier", "prettier/standard", "plugin:vue/recommended"],
    // vue required to lint *.vue files
    // https://github.com/vuejs/eslint-plugin-vue
    // https://github.com/prettier/eslint-plugin-prettier
    plugins: ["vue", "prettier"],
    rules: {
        "prettier/prettier": "error"
    }
};
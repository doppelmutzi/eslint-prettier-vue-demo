module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint"
    },
    env: {
        mocha: true,
        jest: true
    },
    globals: {
        expect: true,
        sinon: true
    }
};
// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require("function-bind");

// require all test files (files that ends with .spec.js)
const testsContext = require.context("./specs", true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// cover only js files and vue files (e.g., no scss files)
const srcContext = require.context(
  "../../src",
  true,
  /^\.\/(?!main\.js$).+\.(js|vue)$/i
);
srcContext.keys().forEach(srcContext);

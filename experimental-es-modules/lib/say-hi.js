const sayBye = require('./say-bye.js');
exports.a = 'a'
exports.b = 'b'
module.exports = function() {
  console.log('Hi!');
  sayBye();
};
console.log(exports, module, require, __filename, __dirname);

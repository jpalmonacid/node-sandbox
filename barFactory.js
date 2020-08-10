function bar(arg) {
  foo(arg);
}

module.exports = function(foo) {
  return bar;
};

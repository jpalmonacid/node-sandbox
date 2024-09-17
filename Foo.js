function bar(message) {
  console.log(message);
}

console.log('Foo.js loaded');

module.exports = class {
  constructor(message) {
    this.message = message;
  }
  foo() { bar(this.message) }
};

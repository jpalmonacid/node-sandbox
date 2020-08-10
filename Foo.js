function bar(message) {
  console.log(message);
}

module.exports = class {
  constructor(message) {
    this.message = message;
  }
  foo() { bar(this.message) }
};

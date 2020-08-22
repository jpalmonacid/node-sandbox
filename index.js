// const Foo = require('./Foo');
// const foo = new Foo('foo').foo();

function bar(message) {
  console.log(message);
}

const Foo = fooClassFactory(bar);
const foo = new Foo('hola');
const foo = new Foo('hola', bar);


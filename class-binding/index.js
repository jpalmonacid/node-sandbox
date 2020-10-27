class Foo {
  constructor(boundParameter , parameter) {
    this.boundParameter = boundParameter;
    this.parameter = parameter;
  }

  getBoundParameter() {
    return this.boundParameter;
  }
}

const BoundFoo = Foo.bind(null, 'BoundedValue');

const foo = new BoundFoo('parameterValue');

console.log(foo, foo.getBoundParameter());

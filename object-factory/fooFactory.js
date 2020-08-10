let instance;
let token;

async function fooFactory(asyncDependency) {
  if (!instance) {
    token = await asyncDependency('token');
    instance = new class Foo {
      constructor() {
        console.log('New Foo instance!');
      }

      getList() {
        return token && asyncDependency([]);
      }
    };
  }
  return instance;
}

module.exports = fooFactory;

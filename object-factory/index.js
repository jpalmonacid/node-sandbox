const fooFactory = require('./fooFactory');

(async function main() {
const foo = await fooFactory(fetch);
const bar = await fooFactory(fetch);
console.log(await foo.getList());

})()

function fetch(value) {
  return Promise.resolve(value);
}

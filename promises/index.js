const promise1 = new Promise((resolve, reject) => { console.log('running 1'); setTimeout(() => {console.log('running async 1'); resolve(1) }, 6000) });
const promise2 = new Promise((resolve) => { console.log('running 2'); setTimeout(() => {console.log('running async 2'); resolve(2) }, 3000) });
const promise3 = new Promise((resolve, reject) => { console.log('running 3'); setTimeout(() => {console.log('running async 3'); reject(3) }, 5000) });
// const promise3 = new Promise((resolve, reject) => { console.log('running 3'); setTimeout(() => {console.log('running async 3'); undefined.data; reject(3) }, 5000) });
const promise4 = new Promise((resolve) => { console.log('running 4'); setTimeout(() => {console.log('running async 4'); resolve(4) }, 1000) });

async function foo() {
  console.log('foo')
  try {
    await bar()
  } catch (e) {
    console.log('error catched')
  }
  console.log('foo end')
}
async function bar() {
  console.log('bar')
  undefined.data
}
(async function() {
  await foo()
}());

console.log('Promise.all')
Promise.all([promise1,promise2,promise3,promise4]).then(console.log);
// Promise.allSettled([promise1,promise2,promise3,promise4]).then(console.log);

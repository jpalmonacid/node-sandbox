const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 6000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 3000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject(3), 5000));
const promise4 = new Promise((resolve) => setTimeout(() => resolve(4), 1000));

Promise.allSettled([promise1,promise2,promise3,promise4]).then(console.log);

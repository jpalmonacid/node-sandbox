async function foo() {
  const first = new Promise((resolve) => setTimeout(() => resolve(console.log('First')), 1000));
  const second = new Promise((resolve) => setTimeout(() => resolve(console.log('Second')), 2000));
  return Promise.all([first, second]);
}

foo().then(() => console.log('Third'));

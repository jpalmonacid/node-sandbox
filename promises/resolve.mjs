console.log('module start')
console.log(await Promise.resolve('promised value').then(value => `"${value}"`))
console.log('module end')

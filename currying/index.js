const array = ['quién es quién', 'foo', 'bar']

const filter = pattern => array => array.filter(string => string.match(pattern))
const filterQs = filter(/q/i)

console.log(filterQs(array))

const match = pattern => string => string.match(pattern)
const stringWithQs = match(/q/i)

console.log(array.filter(stringWithQs))

// const keepHighest = (x, y) => (x >= y ? x : y);
const keepHigherThan = x => y => (x >= y) ? x : y
const to5IfLower = keepHigherThan(5)

console.log([4,5,6].map(to5IfLower))


console.log('start');
const fs = require('fs');

function readFile() {
  console.log('read file async');
  fs.readFile('./server.js', (err, data) => {
    if (err) throw err;
    console.log('print file contents');
    console.log(data.toString());
  });
}

function readFileSync() {
  console.log('read file');
  const data = fs.readFileSync('./server.js');
  console.log('print file contents');
  console.log(data.toString());
}

process.nextTick(() => console.log('nextTick'));

readFile();
// readFileSync();

console.log('end');

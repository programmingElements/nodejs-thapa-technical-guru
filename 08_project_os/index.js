const os = require('os');

// architecture of operating system

// console.log(os.arch());

// free memory of operating system

const freeMemory = os.freemem();

// console.log(freeMemory);

// console.log(`${freeMemory/1024/1024/1024}`)

// total memory of operating system

const totalMemory = os.totalmem();

// console.log(totalMemory);

// console.log(`${totalMemory/1024/1024/1024}`)

// hostname of operating system

console.log(os.hostname());

// platform of operating system

console.log(os.platform());

// temp directory of operating system

console.log(os.tmpdir());

// Type of operating system

console.log(os.type());

// Home directory of operating system

console.log(os.homedir());
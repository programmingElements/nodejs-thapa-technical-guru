const fs = require("fs");

// create a new file using async method

/*

fs.writeFile('read.txt', 'today is awesome day :)', (err) => {
    if (err) {
        console.log('Err : ', err)
    }
    else {
        console.log('file is created!')
    }
});

*/

// add more data to file using async method

/*

fs.appendFile('read.txt', ' plz like and share and subs my channel', (err) => {
    if (err) {
        console.log('Err : ', err)
    }
    else {
        console.log('data is appended to file!')
    }
})

*/


// read the data from file using async method

/*

fs.readFile('read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Err : ', err);
    }
    else {
        console.log('data of file!');
        console.log(data);
    }
});

*/
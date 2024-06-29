const fs = require("fs");

// create a new folder or directory using async method

/*

fs.mkdir('thapa', (err) => {
    if (err) {
        console.log('Err : ', err);
    } else {
        console.log('directory is created!');
    }
})

*/

// create a new file inside the above directory or folder using async method

/*

fs.writeFile('./thapa/bio.txt', 'my name is jallu chakravarthi', (err) => {
    if (!err) {
        console.log('file is created!')
    } else {
        console.log(' Err : ', err)
    }
})

*/


// add more data into the file using async method

/*

fs.appendFile('./thapa/bio.txt', ' plz like, subs & share my videos ', (err) => {
    if (!err) {
        console.log('data is appended into file!');
    } else {
        console.log('Err : ', err);
    }
})

*/

// read the data from the file using async method

/*

fs.readFile("./thapa/bio.txt", 'utf-8', (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.log('Err : ', err);
    }

})

*/

// rename the file using async method

/*

fs.rename('./thapa/bio.txt', './thapa/myBio.txt', (err) => {
    if (!err) {
        console.log('file renamed successfully!')
    } else {
        console.log(' Err : ', err);
    }
})

*/


// delete file using async method

/*

fs.unlink('./thapa/myBio.txt', (err) => {
    if (err) {
        console.log('Err : ', err);
    } else {
        console.log('file is deleted!')
    }
})

*/

// delete the directory or folder using async method

fs.rmdir('./thapa', (err) => {
    if (!err) {
        console.log('directory is deleted!')
    } else {
        console.log('Err : ', err)
    }
})
const fs = require("fs");

const bioData = {
    name     : "Vinod",
    age      : 26,
    channel  : "programming elements"
};

/*

// Converts a JavaScript value to a JavaScript Object Notation (JSON) string
const jsonData = JSON.stringify(bioData); // convert object into JSON 

console.log(jsonData);
// console.log(jsonData.channel); // undefined

// Converts a JavaScript Object Notation (JSON) string into an object.
const objData = JSON.parse(jsonData); // convert JSON into object

console.log(objData);
console.log(objData.channel); // programming elements


*/

// Perform Task 

// 1. Convert the javascript object into JSON. 
// 2. Add JSON data into new file (json1.json).
// 3. Read File
// 4. Again Convert the JSON Data into Javascript Object
// 5. console.log (print the javascript object into console) 


const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonData, (err) => {
//     if (!err) {
//         console.log("Done");
//     }
// });


fs.readFile("json1.json", "utf-8", (err, data) => {
    if (!err) {
        const orgData = JSON.parse(data);
        console.log(data);
        console.log(orgData);
    }
});
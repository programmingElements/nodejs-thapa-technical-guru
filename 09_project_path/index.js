const path = require("path");

console.log(path.dirname('/home/codespaces/09_project_path/index.js'));

console.log(__filename);

// dirname
console.log(path.dirname(__filename));

// basename
console.log(path.basename(__filename));

// extname
console.log(path.extname(__filename));

// parse
console.log(path.parse(__filename));

//
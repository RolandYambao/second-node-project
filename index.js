const myModule = require("./utils/myModule.js");
const fs = require("fs");

console.log(myModule);
console.log(myModule.newFunction());
console.log(myModule.newerFunction());
console.log(myModule.newestFunction());
console.log(myModule.newNumbers);
console.log(myModule.newObject);
console.log(myModule.newObject.newThing.someOther);

fs.readFile('story.txt', 'utf8', function (err, data) {
    console.log(data);
});

// const http = require('http');

// http.createServer((req, res) => { 
//    res.write('Goodbye, World!');
//    res.end();
// })
// .listen(8000);

const faker = require("faker");

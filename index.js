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
const { random } = require("faker");
let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
}
console.log(randomAddress);

// import the module
const axios = require('axios'); // allows to make API calls and retrieve data...

// There is a function that exist on the frontend that allows us to retrieve data. What function? - fetch

axios.get('https://api.github.com/users/romebell')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (err) {
        console.log(err);
    });
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const defaults = require('../default.js');

// calling default function.
const result = defaults(testObject, { name:"Batman", address: "Gotham."});
console.log(result);
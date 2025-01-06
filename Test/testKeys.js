const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const keys = require('../keys.js');

// calling keys function.
const result = keys(testObject);
console.log(result);
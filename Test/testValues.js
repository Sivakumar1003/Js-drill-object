const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const values = require('../values.js');

// calling values function.
const result = values(testObject);
console.log(result);
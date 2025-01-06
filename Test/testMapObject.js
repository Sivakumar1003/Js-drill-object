const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mapObject = require('../mapObject.js');

// function for callbcak function.
function logic (value) {
    return "form mapObject :" + value;
}

// calling mapObject function.
const result = mapObject(testObject, logic);
console.log(result);
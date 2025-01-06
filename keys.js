const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

// return all the keys as array.
function keys(object) {
    let allKeys = [];

    // iterate the object.
    for(let key in object) {
        allKeys.push(key);
    }

    // return the allKeys.
    return allKeys;
}

module.exports = keys;
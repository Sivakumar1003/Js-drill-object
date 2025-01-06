// invert the object value to key, key to value.
function invert(object) {
    const invertObject = {};
    
    // iterate the object.
    for(let key in object) {
        invertObject[object[key]] = key;
    }
    
    // return the invertObject.
    return invertObject;
}

module.exports = invert;
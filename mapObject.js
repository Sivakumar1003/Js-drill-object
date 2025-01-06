// make the changes in vallue with the callback function.
function mapObject(object, callback) {
    const newObject = {};

    // iterate the object.
    for (let value in object) {
        newObject[value] = callback(object[value]);
    }

    // return the invertObject.
    return newObject;
}

module.exports = mapObject;
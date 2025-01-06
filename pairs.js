// return as entries.
function pairs(object) {
    const allPairs = [];

    // iterate the object.
    for(let key in object) {
        let pair = [];
        pair.push(key);
        pair.push(object[key]);
        allPairs.push(pair);
    }

    // return the allPairs.
    return allPairs;
}

module.exports = pairs;
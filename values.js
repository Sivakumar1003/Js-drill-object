// return all the values as array.
function values(object) {
    let allValuess = [];

    // iterate the object.
    for(let value in object) {
        allValuess.push(object[value]);
    }

    // return the allValuess.
    return allValuess;
}

module.exports = values;
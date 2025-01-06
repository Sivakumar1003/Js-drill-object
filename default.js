// filling in its undefined properties.
function defaults(object, defaultProps) {
    
    // iterate the defaultProps object.
    for(let key in defaultProps) {
        if(object[key] === undefined) {
            object[key] = defaultProps[key];
        }
    }

    // return the object.
    return object;
}

module.exports = defaults;
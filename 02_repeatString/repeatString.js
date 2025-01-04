const repeatString = function(str, count) {
    if (count < 0) return "ERROR";

    let string = "";

    for (let i = 0; i < count; i++) {
        string += str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;

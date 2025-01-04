const fibonacci = function(input) {
    let num;
    if (input < 0) {
        return "OOPS";
    } else if (isNaN(input)) {
        num = parseInt(input);
    } else {
        num = input;
    }

    let result = [0, 1];
    for (let i = 2; i <= input; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result[input];
};

// Do not edit below this line
module.exports = fibonacci;

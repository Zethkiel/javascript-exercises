const fibonacci = function(input) {
    let result = [0, 1];
    for (let i = 2; i <= input; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    console.log(result);
};

fibonacci(10);
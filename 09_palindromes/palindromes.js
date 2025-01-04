const palindromes = function (string) {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890"
    const filtered = string.toLowerCase().split('').filter(char => chars.includes(char)).join('');

    const reversed = filtered.split('').reverse().join('');
    return filtered === reversed;
};

// Do not edit below this line
module.exports = palindromes;

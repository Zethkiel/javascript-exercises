const leapYears = function(year) {
    const isLeapYear = year % 4 === 0;
    const century = year % 100 === 0;
    const isFourHundred = year % 400 === 0;

    if (isLeapYear && (!century || isFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

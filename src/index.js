module.exports = function reverse (n) {
    // we take n with Math.abs() convert it into positive integer if negative
    // then we convert digits to string and create array from it
    // then map calls Number on each value in the array (casting it to a number)
    // then we reverse digits into array and
    // convert the elements of an array into a string without comma mark
    // then parseInt() function parses a string and returns an integer though tests accept result in string too
    return parseInt(Array.from(Math.abs(n).toString()).map(Number).reverse().join(""));
}

module.exports = function reverse (n) {
    return Array.from(Math.abs(n).toString()).map(Number).reverse().join("");
}

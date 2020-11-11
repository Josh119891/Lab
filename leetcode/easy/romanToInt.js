/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntMapping = {
        'I': 1,
        '$': 4,
        'V': 5,
        '(': 9,
        'X': 10,
        '#': 40,
        'L': 50,
        '@': 90,
        'C': 100,
        '^': 400,
        'D': 500,
        '!': 900,
        'M': 1000
    }
    return romanString
        .replace('IV', '$')
        .replace('IX', '(')
        .replace('XL', '#')
        .replace('XC', '@')
        .replace('CD', '^')
        .replace('CM', '!')
        .split('')
        .reduce((finalValue, currentValue) => finalValue + romanToIntMapping[currentValue], 0)
};
console.log(romanToInt(1));

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let originalChars = A[0].split('');
    for (let i = 1; i < A.length; i++) {
        let tempChars = A[i].split('');
        originalChars = originalChars.filter(char => {
            let ind = tempChars.indexOf(char);
            return ind > -1 ? tempChars[ind] = true : false;
        });
    }
    return originalChars;
};

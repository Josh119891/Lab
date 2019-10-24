/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let low = 0;
    let high = letters.length - 1;
    let mid;
    while (low <= high) {
         mid = Math.floor((high - low) / 2) + low;
        
        if (letters[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return letters[low % letters.length];
};



console.log(nextGreatestLetter( ["c", "f", "j"],'f'));
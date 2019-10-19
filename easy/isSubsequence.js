/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (var i = 0; i < s.length; i++) {
        var index = t.indexOf(s.charAt(i))
        t = t.slice(index + 1)
        if (index == -1) return false
    }
    return true
};
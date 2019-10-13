/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {

    let [leftA,rightA]=a.split('+');
    let [leftB,rightB]=b.split('+');
    rightA=rightA.substring(0,rightA.length-1);
    rightB=rightB.substring(0,rightB.length-1);

    return (leftA*leftB) + (rightA*rightB*-1)+'+'
            +(leftA*rightB+leftB*rightA)+'i';
};


complexNumberMultiply("1+1i", "1+1i");
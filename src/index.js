/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0; //number of love triangles
  let double = []; //arr of double number
  for (let i=0; i < preferences.length; i++) {
    let a = i+1; //current index of element
    let b = preferences[i]; //element
    if (double.indexOf(a) == -1 && a != b) {
      for (let j=0; j < preferences.length; j++) {
        if (b === j+1) {
          for (let k=0; k < preferences.length; k++) {
            if (preferences[j] === k+1) {
              if (preferences[k] === a) {
                double.push(i+1, j+1, k+1);
                count +=1; 
              }
            }
          }
        }
      }
    }
  }
  return count;
};

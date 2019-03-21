/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let countTriangles = 0; 
  let numbersRepeating = [];
  for (let i=0; i<preferences.length; i++) {
    let firstSpichonee = i+1;
    let loveFirstSpichonee = preferences[i];
    if (numbersRepeating.indexOf(firstSpichonee) == -1 && firstSpichonee != loveFirstSpichonee) {
      for (let j=0; j<preferences.length; j++) {
        let twiceSpichonee = j+1;
        if (loveFirstSpichonee === twiceSpichonee) {
          for (let k=0; k<preferences.length; k++) {
            let thirdSpichonee = k+1;
            if (preferences[j] === thirdSpichonee) {
              if (preferences[k] === firstSpichonee) {
                numbersRepeating.push(i+1, j+1, k+1);
                countTriangles += 1; 
              }
            }
          }
        }
      }
    }
  }
  return countTriangles;
};

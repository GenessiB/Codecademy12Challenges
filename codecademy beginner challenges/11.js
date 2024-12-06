// 11. Create a function that finds the maximum number in an array
/**
 * input an array
 * output returns
 */

const array1 = [1, 2, 3];
const array2 = [-1, -2, -3];
const array3 = [1.5, 2.5, 3.5];



function findMax(array) {
    let maxNum = array[0];
  array.forEach((number) => {
    if (number > maxNum) {
      maxNum = number;
    }
  });
  return maxNum
}

console.log(findMax(array3));
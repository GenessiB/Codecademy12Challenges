// 4. Calculate the sum of numbers within an array
/**  extra challenges:
 *  create a function that can return the sum of a particular column or row number in a table
 * make it work with arrays of different lengths and postitive/negative integers
 */

const array1 = [1, 2, 3, 4, 5];
const array2 = [-1, 2, -3, 4, -5];
const array3 = [1.5, 2.5, 3.5, 4.5, 5.5];
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


console.log(sumOfArray(array1));
// sumOfArray(array2);
//  sumOfArray(array3);
//  sumOfArray(array4);

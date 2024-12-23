// positive numbers in an array
const numbers = [1,2,3];
function posNum(array) {
  const newNumbers = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
     if (array[i] > 0) {
       newNumbers.push(array[i]);
     }
  }
   return newNumbers;
}

console.log(posNum(numbers));

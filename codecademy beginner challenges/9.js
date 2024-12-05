// 9. Return a Boolean if a number is divisible by 10
/**
 * input number
 * output true or false
 * if divisible by 10 === true else false
 */

function divisibleByTen(number) {
  if (number % 10 === 0) {
   return true
  }
  return false;
}

console.log(divisibleByTen(10));
console.log(divisibleByTen(20));
console.log(divisibleByTen(15));
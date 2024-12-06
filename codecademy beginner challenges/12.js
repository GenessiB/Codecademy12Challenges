// 12. check if a string is a palindrome

let string = "kayak";
let string2 = "boat";

function isPalindrone(string) {
  const reverseString = string.split("").reverse().join("");
  return string === reverseString;
}

console.log(isPalindrone(string1));

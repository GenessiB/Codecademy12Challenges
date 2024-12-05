// 10. Return the number of vowels in a string
/**
 * input string
 * output return a number of vowels in the string
 */

function vowelFinder(string) {
  const vowels = "aeiouAEIOU"; // accounts for cap and lowercase
  let numOfVowels = 0;

  for (const char of string) {
    if (vowels.includes(char)) {
      // method searches in string

      numOfVowels++;
    }
  }
  return numOfVowels;
}

console.log(vowelFinder("Hi my love"));
console.log(vowelFinder("javascript engineer"));
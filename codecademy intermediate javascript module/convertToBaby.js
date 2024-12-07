// convert to baby
// write a function that takes in an array as ana argument and using a loop returns a new array with each string in the array prepended with 'baby'

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

function convertToBaby(array) {
    const newArray = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
 newArray.push("baby " + array[i]);
  }
  return newArray;
}

console.log(convertToBaby(animals));

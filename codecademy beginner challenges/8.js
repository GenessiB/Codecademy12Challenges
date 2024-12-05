// 8. Remove the spaces found in a string
/**
 * input a string with spaces
 * return string w/o spaces
 */

const string = "    My name is Genessi      ";
const string2 = "    05301    "

console.log("BEFORE");
console.log(string); // with space
console.log(string2); // with space

function removeSpaces(string){
return string.trim();
}

console.log("AFTER");
console.log(removeSpaces(string)); // no space
console.log(removeSpaces(string2)); // no space

console.log("----------------------------------------------");

// another method 

const string3 = "G en ess i";
const string4 = "    0   5 3 0 1    ";

console.log("BEFORE");
console.log(string3);
console.log(string4);

function removeSpace(string){
    return string.replace(/\s/g, '');
}

console.log("AFTER");
console.log(removeSpace(string3));
console.log(removeSpace(string4));
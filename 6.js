// 6. Sort an array from lowest to highest (integers, negative numbers, decimals)
const array1 = [6, 5, 4, 3, 2,1];
const array2 = [-1, 2, -3, 4, -5];
const array3 = [6.5, 3.5, 4.5, 5.5,2.5,1.5];

function sortIt(a,b){
return a - b;
}

console.log(array3.sort(sortIt));


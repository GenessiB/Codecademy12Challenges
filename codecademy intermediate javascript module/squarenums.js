const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num;

function squareNums(array){
return array.map(toSquare);
}

console.log(squareNums(numbers));
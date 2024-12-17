// avg of numbers in an array
const array = [3,7,2,9,5]; // 5.2

let sum = 0;
let avg = 0;

for (let i = 0; i < array.length; i++){
sum += array[i];
avg = sum / array.length;
}

console.log(avg);
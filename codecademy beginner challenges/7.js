// 7. Create a function that filters out negative numbers

const array1 = [1, -2, 3, -4, 5, -6];
const array2 = [-1, 2, -3, 4, -5, 6];

function filterIt(number){
    for (let i = 0; number > i; i++){
        if (number > 0){
            return true;
        }
       
    }   

}

console.log(array1.filter(filterIt));
console.log(array2.filter(filterIt));
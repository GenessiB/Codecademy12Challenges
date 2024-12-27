// max num in array

const number = [3,2,1,3.75];

function findMaxNum(array){
    if (array.length === 0){
        return null;
    }
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > maxNum){
            maxNum = array[i];
        }
    }
    return maxNum;
}

console.log(findMaxNum(number));
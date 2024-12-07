// greetAliens()
// write a function thats takes an array of strings and uses a for loop to print a greeting with each string in the array
const aliens = ["Blorgus", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(array){
for (let i = 0; i < array.length; i++){
    console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);

}
}

greetAliens(aliens);
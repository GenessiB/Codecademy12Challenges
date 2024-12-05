// Print a table containing multiplication tables (containing all the answers from 1-10)
//extra challenge: tweak the code so that it can easily be expanded to 12 if needed

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplierMax = 12;
for (let i = 1; i <= multiplierMax; i++) {
//   console.log(i);
  
  for (let j = 1; j <= multiplierMax; j++) {
    const sum = i*j;
    console.log(`${[i]} x ${[j]} = ${sum}`);
  }
}

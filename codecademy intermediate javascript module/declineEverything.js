// decline and accept everything


const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}


function declineEverything(array){
array.forEach((veggie) => {
politelyDecline(veggie);
})
}

declineEverything(veggies);
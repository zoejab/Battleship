// boatArray[2].location[i].hit = true;

// sets hit on location equal to true
//have cellid correspond and break that up into a number so that it changes that number on the boat object. if .location is equal to that cellid# then change hit to true;
//
// for (var i = 0; i < boatArray.length; i++) {
//     for (var j = 0; j < boatArray[i].location.length; j++) {

// boatArray.filter(function(boat){
//return boolean - and whatever the test on that boat is to see if that's the one that you want.
//what i did with abner
// if (cellClicked.getAttribute('data-value') === 'Submarine') {
//     for (var i = 0; i < boatArray[2].location.length; i++) {
//         boatArray[2].location[i].hit = true;
//     }
// //if data value = submarine then loop over 1 boat and set hit = true;
// if (cellClicked.getAttribute('class') === 'cell filled hit') {
// for (var i = 0; i < boatArray.length; i++) {
//   for (var j = 0; j < boatArray[i].location.length; j++) {
//
//       boatArray[i].location[j].hit = true;
//   }}
// }

//
// this.isSunk = function() {
//   // var hits = 0;
//   //
//   // for (var i = 0; i < boatArray.length; i++) {
//   //   for (var j = 0; j < boatArray[i].location.length; j++) {
//   //     var boatHitQuestion = boatArray[i].location[j].hit;
//   //     if (boatArray[i].location[j].hit) {
//   //       hits += 1;
//   //       if(hits === boatArray[i].location.length) {
//   //         alert('you sunk the' + boatArray[i]);
//   //       }
//   //       // console.log(boatArray[i].location[j].hit)
//   //       return true;
//   //     }
//   //      return false;
//   //   }}
// };



//if datavalue is submarine and hit values length is equal to the number of boats then set that boat's image to red.
// var array = document.getElementsByClassName('cell filled');
// for (var i = 0; i < array.length; i++) {
//   var value = array[i].getAttribute('data-value');
//   var hitQuest = array[i].getAttribute('hit');
// }

//
// var sub = document.querySelectorAll('#Patrol Boat hit');
// //for submarine
// for (var i = 0; i < sub.length; i++ ) {
// var dataval = sub[i].getAttribute('data-value');
// var hit = sub[i].querySelectorAll('hit');
// console.log(hit);
//
// if ((dataval === 'Submarine') && (hit.length === 3))
//   { alert('you sunk the submarine');
//     }
// }



//how does this check per boat and how does this check for the whole board
// for (var i = 0; i < boatArray.length; i++) {
//   for (var j = 0; j < boatArray[i].location.length; j++) {
//     console.log(boatArray);
//     var name2 = boatArray[i].name;
//     if(boatArray[i].location[j].hit) {
//       return false;
//     }
//     return true;
//   }

// var array = [];
//   for (var i = 0; i < cells.length; i++) {
//     array.push(document.querySelectorAll('.cell')[i].getAttribute('data-value'));
//   }

// };

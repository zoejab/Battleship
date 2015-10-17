console.log('battleship loaded');
$(document).ready(function(){});



var clickEvent = function(e){
    //send throuhg makePlay
    game.board.makePlay(e.target);
    // console.log(e.target);
};

//an array of objects created by the boat constructor that has a location property and in that location propety is an array of location numbers
//this creates the boats so name each one as var submarine = new Boats();
var Boats = function(name, location) {
  this.name = name;
  this.location = location;
  this.sunk = false;
  this.hit = false;
  //this.checkSunk = function() {
  //   //if all locations are hit then turn sunk to true;
  // };
};

//created boat objects for each ship
 var aircraft = new Boats('Aircraft Carrier', [{loc: 75, hit: false},{loc: 76, hit: false},{loc: 77, hit: false},{loc: 78, hit: false},{loc: 79, hit: false}]);
 var battleship = new Boats('Battleship', [{loc: 62, hit: false},{loc: 72, hit: false},{loc: 82, hit: false},{loc: 92, hit: false}]);
 var submarine = new Boats('Submarine', [{loc: 11, hit: false},{loc: 12, hit: false},{loc: 13, hit: false}]);
 var patrol = new Boats('Patrol Boat', [{loc: 30, hit: false},{loc: 40, hit: false}]);
 //push into boat array to make more random ones later to have multiple boards
 boatArray = [aircraft, battleship, submarine, patrol];

var Board = function() {
  this.guesses = 0;

  this.setUp = function() {
    for (var i = 0; i < boatArray.length; i++) {
      for (var j = 0; j < boatArray[i].location.length; j++) {
        console.log(i);
        console.log(j);
        var name = boatArray[i].name;
        var boatLocation = boatArray[i].location[j].loc;
        var toString = boatLocation.toString();
        var divGotten = document.getElementById('cell' + boatLocation);
        console.log(boatLocation);
        divGotten.setAttribute('data-value', name);
        divGotten.setAttribute('class', 'cell filled');
      }
    }

    this.guesses = 40;

  };

  this.makePlay = function(cellClicked) {
    //puts explosion image when clicked
    if (cellClicked.getAttribute('class') === 'cell filled') {
      cellClicked.innerHTML = "<img src='explode.png'>";
      cellClicked.style.backgroundColor = 'blue';
      // cellClicked.setAttribute('data-value', 'hit');
      this.guesses -= 1;

      for (var i = 0; i < boatArray.length; i++) {
        for (var j = 0; j < boatArray[i].location.length; j++) {
          boatArray[i].location[j].hit = true;
        }}

      //inner html needs to be equal to 'hits' + this.hitsLeft
      var hitsLeft = document.getElementById('hitsleft');
      hitsLeft.innerHTML = 'hits left: ' + this.guesses;
      cellClicked.removeEventListener('click', clickEvent);
      console.log('hit'); }

    //puts blue background when clicked
      else {
      cellClicked.style.backgroundColor = 'blue';
      this.guesses -= 1;
      //inner html needs to be equal to 'hits' + this.hitsLeft
      var hitsLeft2 = document.getElementById('hitsleft');
      hitsLeft2.innerHTML = 'hits left: ' + this.guesses;
      cellClicked.removeEventListener('click', clickEvent);
      console.log('missed');}
  };
  this.checkWin = function() {

    for (var i in boatArray) {
      for (var j in boatArray[i]) {
        if(boatArray[i].location[j].hit) {
          return false;
        }
      }
      return true;
    }


    //how does this check per boat and how does this check for the whole board
    // for (var i = 0; i < boatArray.length; i++) {
    //   for (var j = 0; j < boatArray[i].location.length; j++) {
    //     if (boatArray[i].location[j].hit === true) {

        }
      }}
  };
};

var game = {
  board: null,

  makeBoard: function() {
    this.board = new Board();
  },

  start: function() {
    this.board.setUp();
  },

  play: function() {
    //gets position, sends it through this.makeplay.
    var cells = $('.cell');
    for (var i = 0; i < cells.length; i++){
      var cellId = cells[i];
      cellId.addEventListener('click', clickEvent);
    }
  },

  isOver: function() {
    //if (this.board.guesses === 0 && all are hit)
    //alert
  },

  overMessage: function() {

  }

};

window.onload = function() {
  game.makeBoard();
  game.start();
  game.play();
};

//inner html needs to be equal to 'hits' + this.hitsLeft

});

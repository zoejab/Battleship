console.log('battleship loaded');


cells = $('.cell');

var clickEvent = function(e){
    //send throuhg makePlay
    game.board.makePlay(e.target);
};

//an array of objects created by the boat constructor that has a location property and in that location propety is an array of location numbers
//this creates the boats so name each one as var submarine = new Boats();
var Boats = function(name, location) {
  this.name = name;
  this.location = location;
  this.sunk = false;
  //this.checkSunk = function() {
  //   //if all locations are hit then turn sunk to true;
  // };
};

//created boat objects for each ship
 var aircraft = new Boats('Aircraft Carrier', [75,76,77,78,79]);
 var battleship = new Boats('Battleship', [62,72,82,92]);
 var submarine = new Boats('Submarine', [11,12,13]);
 var patrol = new Boats('Patrol Boat', [30,40]);
 //push into boat array to make more random ones later to have multiple boards
 var boatArray = [aircraft, battleship, submarine, patrol];



var Board = function() {
  this.guesses = 40,

  this.setUp = function() {

    //this gets the array of locations as individual strings
    var arrayOfLocations = [];
      for (var i = 0; i < boatArray.length; i++) {
        var boatsInArr = boatArray[i];
        for (var j = 0; j < boatArray[i].location.length; j++) {
          var boatsLoc = boatsInArr.location[j];
          var toString = boatsLoc.toString();
          var numCells = 'cell' + toString;
          arrayOfLocations.push(numCells);
        }}
    //this gets the id names so we can later set them to the location arrays
      for (var m = 0; m < cells.length; m++) {
         var cellId = $('.cell')[m].getAttribute('id');
        //  console.log(cellId);
      }
    //this assigns the specified cell to the locations of the board.
    for (var k = 0; k < arrayOfLocations.length; k++) {
    var divsGotten = document.getElementById(arrayOfLocations[k]);
    divsGotten.setAttribute('data-value', 'filled');
    }
  };

  this.makePlay = function(cellClicked) {
    //if data value === filled then innerHTML = X;
    // for (var i = 0; i < cells.length; i++)

    //puts explosion image when clicked
    if (cellClicked.getAttribute('data-value') === 'filled') {
      cellClicked.innerHTML = "<img src='explode.png'>";
      cellClicked.style.backgroundColor = 'blue';
      cellClicked.setAttribute('data-value', 'hit');
      this.guesses -= 1;
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
  };

  this.checkWin = function() {
    //how does this check per boat and how does this check for the whole board
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

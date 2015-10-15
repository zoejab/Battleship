console.log('battleship loaded');

var clickEvent = function(e) {
      //send throuhg makePlay
      game.board.makePlay(e.target);
      // console.log(e.target);
      // game.board.makePlay(e.target);
};

cells = $('.cell');

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

var Board = function() {

  this.setUp = function() {
    //created boat objects for each ship
    var aircraft = new Boats('Aircraft Carrier', [75,76,77,78,79]);
    var battleship = new Boats('Battleship', [62,72,82,92]);
    var submarine = new Boats('Submarine', [11,12,13]);
    var patrol = new Boats('Patrol Boat', [30,40]);
    boatArray = [ aircraft, battleship, submarine, patrol];

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
    var $clickedCell = $('.cell')[cellClicked];
    if ($clickedCell.getAttribute('data-value') === 'filled') {
      $clickedCell.innerHTML = 'X';
      console.log('filled');
    } else {
      $clickedCell.innerHTML = 'o';
      console.log('missed');}
  };
    //else fill with a miss;
  };

  this.checkWin = function() {
    //how does this check per boat and how does this check for the whole board
  };

var game = {
  board: null,

  makeBoard: function() {
    game.board = new Board();
  },

  start: function() {
    // game.board.setUp();
  },

  play: function() {
    //gets position, sends it through this.makeplay.

    for (var i = 0; i < cells.length; i++){
      var cellId = cells[i];
    cellId.addEventListener('click', clickEvent);

  }

}};

console.log('battleship loaded');
$(document).ready(function(){

var clickEvent = function(e) {
    //send throuhg makePlay
    // console.log(e.target);
    game.board.makePlay(e.target);

    //loop over boats.sunk. if it is equal to true then alert that they sunk the boat
    var airSunk = aircraft.checkSunk();
    var patrolSunk = patrol.checkSunk();
    var battleshipSunk = battleship.checkSunk();
    var subSunk = submarine.checkSunk();

    //if boat is sunk turn the corresponding left panel cells red
    for(var i = 0; i < boatArray.length; i++) {
        if(boatArray[i].sunk === true) {
          var leftCells = document.getElementsByClassName( boatArray[i].name);

        for (var j = 0; j < leftCells.length; j++) {
          leftCells[j].style.borderColor = 'red';
            }}}

    //test if game is over or not.
    game.isOver();
    game.overMessage();

};

//////////////////////
///BOAT CONSTRUCTOR///
//////////////////////
var Boats = function(name, location) {
    this.name = name;
    this.location = location;
    this.sunk = false;

//checks if hit is sunk if they all are then returns this.sunk to equal true
    this.checkSunk = function() {
        for (var i = 0; i < location.length; i++) {
            if (location[i].hit !== true) {
                return false;
            }
        }
        this.sunk = true;
    };
    //   //if all locations are hit then turn sunk to true;
    //
};

//created boat objects for each ship
var aircraft = new Boats('aircraft', [{loc: 75, hit: false}, {loc: 76, hit: false}, {loc: 77, hit: false}, {loc: 78, hit: false}, {loc: 79, hit: false}]);

var battleship = new Boats('battleship', [{loc: 62, hit: false}, {loc: 72, hit: false}, {loc: 82, hit: false}, {loc: 92, hit: false}]);

var submarine = new Boats('submarine', [{loc: 11, hit: false}, {loc: 12, hit: false}, {loc: 13, hit: false}]);

var patrol = new Boats('patrol', [{loc: 30,hit: false
}, {loc: 40,hit: false}]);

//put into boat array to make more random ones later to have multiple boards
boatArray = [aircraft, battleship, submarine, patrol];

//////////////////////////
////BOARD CONSTRUCTOR////
////////////////////////

var Board = function() {
		this.guesses = 0;
    this.gameOver = false;

		this.setUp = function() {
			for(var i = 0; i < boatArray.length; i++) {
				for(var j = 0; j < boatArray[i].location.length; j++) {
					var name = boatArray[i].name;
					var boatLocation = boatArray[i].location[j].loc;
					var toString = boatLocation.toString();
					var divGotten = document.getElementById('cell' + boatLocation);
					divGotten.setAttribute('data-value', name);
					divGotten.setAttribute('class', 'cell filled');
				}
			}
			this.guesses = 40;
		};


		//split on string cell and that will give you array of the id numbers
		this.makePlay = function(cellClicked) {
      //splits the cell ids into numbers to compare in the for loop below
      var cellIdAsNumber = parseInt(cellClicked.getAttribute('id').split('cell')[1]);

      //if above is equal to the locations by looping over boat then turn to true
      for (var i = 0; i < boatArray.length; i++) {
       for (var j = 0; j < boatArray[i].location.length; j++) {
         if (boatArray[i].location[j].loc === cellIdAsNumber) {
           boatArray[i].location[j].hit = true;
         }}}

			//puts explosion image when clicked
			if(cellClicked.getAttribute('class') === 'cell filled') {
				cellClicked.innerHTML = "<img src='images/explode.png' id='explode'>";
				cellClicked.style.backgroundColor = 'blue';
				cellClicked.setAttribute('class', 'cell filled hit');
			}
			//puts blue background when clicked
			else {
				cellClicked.style.backgroundColor = 'blue';
			}
			//inner html needs to be equal to 'hits' + this.hitsLeft
			this.guesses -= 1;
			var hitsLeft2 = document.getElementById('hitsleft');
			hitsLeft2.innerHTML = 'hits left: ' + this.guesses;
			cellClicked.removeEventListener('click', clickEvent);
			console.log(this);
		};


		this.checkWin = function() {

    };

};

//////////////////////
//////GAME OBJECT/////
//////////////////////
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
	for(var i = 0; i < cells.length; i++) {
		var cellId = cells[i];
		cellId.addEventListener('click', clickEvent);
	}
},

isOver: function() {

  for (var i = 0; i < boatArray.length; i++) {
    if(boatArray[i].sunk !== true) {
      return false;
    }
    }
    this.board.gameOver = true;
},

overMessage: function() {
  //if you run out of hits then alerts you game over.
  if (this.board.guesses === 0) {

    $('#center').append($("<p id='lose'> You Lose! </p>"));
    //play again button
    $('#center').append($("<a> Play Again </a>").addClass('button').attr('href', '#'));
    var buttonLose = $('.button').click(function() {

      window.location.reload();
      });
    }
  //loop over boats array - if all sunk = true then game ends and you win.
  if(this.board.gameOver === true) {
    var winBanner = $('#center').append($("<p id='win'> You Win! </p>"));

    //play again button
    $('#center').append($("<a> Play Again </a>").addClass('button').attr('href', '#'));
    var buttonWin = $('.button').click(function() {

      window.location.reload();
      });

}
},

};

window.onload = function() {
    game.makeBoard();
    game.start();
    game.play();
};

});

$(document).ready(function(){
	var dimension = 16; // default size of grid
	var apiCats = 'src="http://thecatapi.com/api/images/get?&format=src&type=gif&size=small"';
	var whichButton = parseInt($(this).attr("value"));
	var newGrid;

	// Handles click, checks input validity and triggers new grid
	$(".button").click(function(){
		$(".grid_sq").remove();
	 	newGrid = parseInt(prompt("Enter a number 1-100 for grid. 'Return' for default."));
		if(isNaN(newGrid) || newGrid <1 || newGrid >100){
			newGrid = ((whichButton === 4) ? 5 : 16)}; // smaller grid default for cat button
		createGrid(newGrid);
		handle(whichButton);
	});

	// Creates new grid
	function createGrid(newGrid){
		// Sets grid size
		var boxNum = newGrid * newGrid;
		var boxSize = (960)/newGrid;
		var i = 0;

		// Make new grid
		while(i<boxNum){
			i++;
			var $grid = $('<div class="grid_sq"></div>');
			$(".container").append($grid);
				($grid).css({"width": boxSize + "px", "height": boxSize + "px"});
		}
	};

	// Function effects
	var handle = function(whichButton){
		$(".container").find(".grid_sq").on("mouseenter", function(){
			switch(whichButton){
				case 1: $(this).css({"background-color": "white"}); break;
				case 2: $(this).css({"background-color": "#"+Math.floor(Math.random()*16777215).toString(16)}); break;
				case 3: 
					var currentOpacity = $(this).css("opacity")
					if(currentOpacity != 0){
						$(this).css("opacity", currentOpacity - 0.10)
					}; break;
				case 4: $(this).append($(this).append('<img width="' + boxSize + '" height="' + boxSize + '" ' + apiCats + ' >')); break;
			};
		});
	};
});


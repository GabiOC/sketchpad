$(document).ready(function(){
	var dimension = 16; // default size of grid
	var apiCats = 'src="http://thecatapi.com/api/images/get?&format=src&type=gif&size=small"';
	var whichButton = parseInt($(this).attr("value"));

	// Handles click, checks input validity and triggers new grid
	$(".button").click(function(){
		$(".grid_sq").remove();
		var dimension = parseInt(prompt("Enter a number 1-100 for grid. 'Return' for default."));
		if(isNaN(dimension) || dimension <1 || dimension >100){
			dimension = ((whichButton === 4) ? 5 : 16) // smaller grid default for cat button
		};
		createGrid(dimension);
		handle(whichButton);
	});

	// Creates new grid
	function createGrid(dimension){
		// Set grid size
		var boxNum = dimension * dimension;
		var boxSize = (960)/dimension;
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


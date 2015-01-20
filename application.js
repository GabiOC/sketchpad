$(document).ready(function(){
	var apiCats = 'src="http://thecatapi.com/api/images/get?&format=src&type=gif&size=small"';
	var newGrid;
	var buttonId = $("button").attr("id");

 	// Mouseenter functions
	var effect = function(){
			$(".container").find(".grid_sq").on("mouseenter", function(){
			switch(buttonId){
				case "white": $(this).css({"background-color": "white"}); break;
				case "random": $(this).css({"background-color": "#"+Math.floor(Math.random()*16777215).toString(16)}); break;
				case "greyscale": 
					var currentOpacity = $(this).css("opacity")
					if(currentOpacity != 0){
						$(this).css("opacity", currentOpacity - 0.10)
					}; break;
				case "cats": $(this).append($(this).append('<img width="' + boxSize + '" height="' + boxSize + '" ' + apiCats + ' >')); break;
			};
		});
	};

	// Handles click, checks input validity, triggers new grid and mouseenter effect
	$("button").click(function(){
		$(".grid_sq").remove();
	 	newGrid = parseInt(prompt("Enter a number 1-100 for grid. 'Return' for default."));
		if(isNaN(newGrid) || newGrid <1 || newGrid >100){
			newGrid = 16};
		createGrid(newGrid);
		effect(buttonId);
	});

	// Creates new grid
	function createGrid(newGrid){
		// Sets grid size
		var boxNum = newGrid * newGrid;
		var boxSize = (960)/newGrid;
		var i = 0;

		// Makes new grid
		while(i<boxNum){
			i++;
			var $grid = $('<div class="grid_sq"></div>');
			$(".container").append($grid);
				($grid).css({"width": boxSize + "px", "height": boxSize + "px"});
		}
	};
});

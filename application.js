$(document).ready(function(){
	var apiCats = 'src="http://thecatapi.com/api/images/get?&format=src&type=gif&size=small"';
	var newGrid;
	var buttonId = $("button").attr("id");

	// Handles click, checks input validity, and triggers new grid and hover effect
	$("button").click(function(){
		$(".grid_sq").remove();
	 	newGrid = parseInt(prompt("Enter a number 1-100 for grid. 'Return' for default."));
		if(isNaN(newGrid) || newGrid <1 || newGrid >100){
			newGrid = 16};
		createGrid(newGrid);
		hover();
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

	// Hover effects
	var hover = function(){
			$(".container").find(".grid_sq").on("mouseenter", function(){
			if (buttonId==="white"){
				$(this).css({"background-color": "blue"});
			}
			else if (buttonId==="random"){
				$(this).css({"background-color": "yellow"});
			}
			else {
				$(this).append($(this).append('<img width="' + boxSize + '" height="' + boxSize + '" ' + apiCats + ' >'));
			}
		});
	};
});

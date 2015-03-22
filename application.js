$(document).ready(function(){
	var newGrid;

	// load default grid and effect
	createGrid(16);
	$(".container").find(".grid_sq").on("mouseenter", function(){
		$(this).css({"background-color": "white"});
	});

	$("button").click(function(event){
		var buttonId = event.target.id;
		$(".grid_sq").remove(); // removes previous grid
	 	
	 	newGrid = parseInt(prompt("Enter a number 1-100 for grid. 'Return' for default."));
		if(isNaN(newGrid) || newGrid <1 || newGrid >100){ // sets default grid size if input not within parameters
			newGrid = ((buttonId == "cats") ? 3 : 16)}; // if cat button clicked, smaller grid default
		
		createGrid(newGrid); // triggers new grid

		// sets hover effect
		$(".container").find(".grid_sq").on("mouseenter", function(){
			if (buttonId == "white"){
				$(this).css({"background-color": "white"});
			}
			else if (buttonId == "random"){
				$(this).css({"background-color": '#' + Math.random().toString(16).substring(2,8)});
			}
			else{
				var boxSize = Math.floor(960)/newGrid;
				$(this).append($(this).append('<img width="' + boxSize + '" height="' + boxSize + '" ' + 'src="http://thecatapi.com/api/images/get?&format=src&type=gif&size=small&"' + ' >'));
			};
		});
	});

	function createGrid(newGrid){
		// sets size and number of grid divs based on user input
		var boxNum = newGrid * newGrid;
		var boxSize = Math.floor(960)/newGrid;
		var i = 0;

		// creates grid divs
		while(i <= boxNum){
			i++;
			var $grid = $('<div class="grid_sq"></div>');
			$(".container").append($grid);
			($grid).css({"width": boxSize + "px", "height": boxSize + "px"});
		}
	};

	// new cat gif every 2 seconds
	setInterval(function(){
    	$(".grid_sq img").attr("src", "http://thecatapi.com/api/images/get?&format=src&type=gif&size=small&" + new Date().getTime());
    },2000);

});
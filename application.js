$(document).ready(function(){
	
	// load default grid and effect
	createGrid(16);
	$(".container").find(".grid_sq").on("mouseenter", function(){
		$(this).css({"background-color": "white"});
	});

	$("button").click(handler);
});

function handler(event){
	var buttonId = event.target.id;
	var gridSize = parseInt(prompt("Enter a number 1-100 for grid. 'Return' for default."));

	$(".grid_sq").remove(); // removes previous grid

	if(isNaN(gridSize) || gridSize <1 || gridSize >100){ // sets default grid size if input not within parameters
		gridSize = ((buttonId == "cats") ? 3 : 16)}; // if cat button clicked, smaller grid default
	
	createGrid(gridSize); // triggers new grid

	// sets hover effect
	$(".container").find(".grid_sq").on("mouseenter", function(){
		if (buttonId == "white"){
			$(this).css({"background-color": "white"});
		}
		else if (buttonId == "random"){
			$(this).css({"background-color": '#' + Math.random().toString(16).substring(2,8)});
		}
		else{
			var boxSize = Math.floor(960)/gridSize;
			$(this).append($(this).append('<img width="' + boxSize + '" height="' + boxSize + '" ' + 'src="http://thecatapi.com/api/images/get?&format=src&type=gif&size=small&"' + ' >'));
		};
	});
}

function createGrid(gridSize){
	// sets size and number of grid boxes based on input
	var boxNum = gridSize * gridSize;
	var boxSize = Math.floor(960)/gridSize;
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
$(document).ready(function(){
	
// Triggers prompt to input grid size
	$("#size").click(function(){
		prompt("Enter a number between 0 and 100");
	});

// Triggers color options dropdown 
	$(".color-options").hide();
	$("#color").click(function(){
		$(".color-options").slideToggle("slow");
	});
});


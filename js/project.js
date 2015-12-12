
    
    

var batter = "images/projectbatter3.png";
var player = '<img src=' + batter + ' alt="Player Icon" height="220" id="icon">';

$('#field').append(player);



var outcomes = new Array();
outcomes[0-0.4] = "single";
outcomes[0.41-0.6] = "double";
outcomes[0.61-0.85] = "triple";
outcomes[0.86-1] = "homerun";



function number(){
 	var number= Math.random();
        document.getElementById("no").value= number;
	if (number < 0.3) {
	alert("You ripped a line-drive single! Stroll to first.")
	$('img').animate( { left: "610", top: "380" }, 'slow' );
	} else 
	if (number >= 0.3 && number < 0.55) {
	alert("Scorcher in the gap! Trot into second for a double!")
	$('img').animate( { left: "610", top: "380" }, 'slow' );
	$('img').animate( { left: "440", top: "200" }, 'slow' );
	} else 
	if (number >= 0.55 && number < 0.80) {
	alert("Ripped down the line! That's a triple!")
	$('img').animate( { left: "610", top: "380" }, 'slow' );
	$('img').animate( { left: "440", top: "200" }, 'slow' );
	$('img').animate( { left: "270", top: "380" }, 'slow' );
	} else 
	if (number < 1) {
	alert("That's a dinger! Home run!")
	$('img').animate( { left: "610", top: "380" }, 'slow' );
	$('img').animate( { left: "440", top: "200" }, 'slow' );
	$('img').animate( { left: "270", top: "380" }, 'slow' );
	$('img').animate( {left: "440", top: "540" }, 'slow' );
	} else {
	}
	}


    
    





//use button click to throw the pitch then...//
//use math.random then number below or higher than .200 i.e. to determine outcome//
//outcomes for at-bat: ball, strike, hit by pitch - need each to lead to strikeout, walk, hit by pitch followed by movement to base//
//other outcomes for pitch: single, double, triple, home run, groundout, fly out, bunt - out, bunt - single, error on ground ball, error on fly ball//
//should I do stuff after player reaches first or other bases - steal?//



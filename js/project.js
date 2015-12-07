
    
    

var batter = "images/projectbatter3.png";
var player = '<img src=' + batter + ' alt="Player Icon" height="220" id="icon">';

$('#field').append(player);

$('#icon').click (function() {
  if ( $(this).position().left < 810 ) {
        $(this).animate( { left: "550", top: "410" }, 'slow' );
    } else {
    }
});

function number(){
 	var number= Math.random();
        document.getElementById("no").value= number;
    }



//use button click to throw the pitch then...//
//use math.random then number below or higher than .200 i.e. to determine outcome//
//outcomes for at-bat: ball, strike, hit by pitch - need each to lead to strikeout, walk, hit by pitch followed by movement to base//
//other outcomes for pitch: single, double, triple, home run, groundout, fly out, bunt - out, bunt - single, error on ground ball, error on fly ball//
//should I do stuff after player reaches first or other bases - steal?//




    
    

var batter = "images/projectbatter3.png";
var player = '<img src=' + batter + ' alt="Player Icon" height="220" id="icon">';

$('#field').append(player);

$('#icon').click (function() {
  if ( $(this).position().left < 610 ) {
        $(this).animate( { left: "620", top: "410" }, 'slow' );
    } else {
    }
});



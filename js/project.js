
    
    

var batter = "images/projectbatter3.png";
var player = '<img src=' + batter + ' alt="" height="220">';

$('#field').append(player);

$('img').click (function() {
    if ( $(this).position().left < 100 ) {
        $(this).animate( { left: "200", top: "250" }, 'slow' );
    } else if ( $(this).position().left <= 200 ) {
        $(this).animate( { left: "350", top: "10" }, 'fast' );
    } else {
	    $(this).animate( { left: "50", top: "500" }, 'slow' );
    }
});
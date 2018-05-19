  
$( function() {
  $( 'img' ).draggable();
} );

var container = document.getElementById("container"); 

// $( function(reset) {
//   var container = document.getElementById("container");
//   container.innerHTML= html;
// } );

$("#reset").click(function () {
    $("img").animate({
        top: "0px",
        left: "0px"
    });
});
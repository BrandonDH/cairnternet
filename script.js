  
$( function() {
  $( 'img' ).draggable();
} );

var container = document.getElementById("container"); 

// $( function(reset) {
//   var container = document.getElementById("container");
//   container.innerHTML= html;
// } );

// $("#reset").click(function () {
//     $("img").animate({
//         top: "0px",
//         left: "0px"
//     });
// });

$('img').data({
    'originalLeft': $('img').css('left'),
    'origionalTop': $('img').css('top')
});

$(".reset").click(function() {
    $('img').css({
        'left': $('img').data('originalLeft'),
        'top': $('img').data('img')
    });
});
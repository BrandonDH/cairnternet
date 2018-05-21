  
// $( function() {
//   $( 'img' ).draggable();
// } );

// var container = document.getElementById("container"); 

// // $( function(reset) {
// //   var container = document.getElementById("container");
// //   container.innerHTML= html;
// // } );

// // $("#reset").click(function () {
// //     $("img").animate({
// //         top: "0px",
// //         left: "0px"
// //     });
// // });

// $('img').data({
//     'originalLeft': $('img').css('left'),
//     'origionalTop': $('img').css('top')
// });

// $(".reset").click(function() {
//     $('img').css({
//         'left': $('img').data('originalLeft'),
//         'top': $('img').data('img')
//     });
// });

var count = 1;

$( function() {
    $( ".pebble" ).click(function () {                                
        $(this).duplicate(document.getElementById('container').value).insertAfter("#the_cairn");
        $(".draggable").draggable();
        alert(document.getElementById('container').innerHTML);
    });
} );

/* extend JQuery function (fn) member to create duplicates */ 
$.fn.duplicate = function(cloneEvents) {
    for ( var i = 0; i < count; i++ ) {
        var tmp = [];
        var the_clone = this.clone(cloneEvents);
        the_clone.addClass('draggable');
        $.merge(tmp, the_clone.get());
        return this.pushStack(tmp);
    }
};
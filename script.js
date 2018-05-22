  
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

// var count = 1;

// $( function() {
//     $( ".pebble" ).click(function () {                                
//         $(this).duplicate(document.getElementById('container').value).insertAfter("#the_cairn");
//         $(".draggable").draggable();
//         alert(document.getElementById('container').innerHTML);
//     });
// } );

/* extend JQuery function (fn) member to create duplicates */ 
// $.fn.duplicate = function(cloneEvents) {
//     for ( var i = 0; i < count; i++ ) {
//         var tmp = [];
//         var the_clone = this.clone(cloneEvents);
//         the_clone.addClass('draggable medium');
//         $.merge(tmp, the_clone.get());
//         return this.pushStack(tmp);
//     }
// };


// Javascript contribution from Professor Bruce Campbell - RISD
var count = 1;
var zndx = 3;
var rotation = 0;

$( function() {
    $( ".pebble" ).click(function () {                              
        $( this ).duplicate(document.getElementById('container').value).insertAfter("#the_cairn");
        $( ".draggable" ).draggable();
        $( ".draggable" ).click(function () {
            rotation += 10;
            $( this ).rotate(rotation);
        });
    });
} );

/* extend JQuery function (fn) member to create duplicates */ 
$.fn.duplicate = function(cloneEvents) {
    for ( var i = 0; i < count; i++ ) {
        var tmp = [];
        var the_clone = this.clone(cloneEvents);
        the_clone.addClass('draggable');
        the_clone.css("position", "absolute");
        the_clone.css("left", "-500px");
        the_clone.css("z-index", zndx++);
        rotation = 0;
        $.merge(tmp, the_clone.get());
        return this.pushStack(tmp);
    }
};

jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

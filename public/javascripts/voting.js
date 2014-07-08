$( document ).ready(function() {

    var vote = '';

    $('li#rests').on('click', function(){
        $( "li" ).each(function( index ) {
            $(this).css('background-color', 'white')
        });
        var selected = $(this);
        vote = selected.text();
        selected.css('background-color', '#3fb618')
    });

    $('#submitButton').on('click', function(){

    });

    var clock = new FlipClock($('.your-clock'), {

    });
});
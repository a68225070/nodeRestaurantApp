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
        var name = $('#restaurant-name').text();
        console.log(name);
        $('#submitButton').addClass('disabled');
    });

    var clock = new FlipClock($('.your-clock'), {

    });
});
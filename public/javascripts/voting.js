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

    var clock;
    var time = $('#timer-val').text();
    time = time - Math.round(new Date().getTime() / 1000);
    if (time < 0){
        time = 0;
        $('#submitButton').addClass('disabled');
    }
    clock = $('.clock').FlipClock(time, {
        clockFace: 'MinuteCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });
});
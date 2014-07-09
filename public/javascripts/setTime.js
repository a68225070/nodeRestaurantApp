$( document ).ready(function() {

    var clock;

    clock = $('.clock').FlipClock(180, {
        clockFace: 'MinuteCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });

    $('.btn-start').on('click', function() {
        var min = $('#min').val();
        var sec = Number($('#sec').val());
        var time = (min * 60) + sec;
        alert(time);
        $.ajax({
            type: "POST",
            url: '/startTimer',
            dataType: 'json',
            data: {val: time}
        });
        clock.setTime(time);
        $('#myModal').modal('hide');
    });
});
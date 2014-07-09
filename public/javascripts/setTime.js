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
        $.ajax({
            type: "POST",
            url: '/startTimer',
            dataType: 'json',
            data: {val: time}
        });
        clock.setTime(time);
        $('#myModal').modal('hide');
    });


    $('.reset').on('click', function() {
        var min = $('#min2').val();
        var sec = Number($('#sec2').val());
        var time = (min * 60) + sec;
        var timestamp = Math.round(new Date().getTime() / 1000);
        timestamp = timestamp + time;
        $.ajax({
            type: "POST",
            url: '/resetTimer',
            dataType: 'json',
            data: {val: timestamp}
        });
        clock.setTime(time);
        $('#myModal2').modal('hide');
    });
});
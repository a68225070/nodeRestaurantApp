$(document).ready(function(){

    $('.delete-user').on('click', function(){

        var form = $(this).parent();
        var name = form.find('.userName').val();
        var email = form.find('.email').val();
        var password = form.find('.password').val();
        var permissions = form.find('.permissions').val();

        console.log('submitting ajax');

        $.ajax({
            type: "POST",
            url: "/deleteuser",
            data: {name: name, email: email, password: password, permissions: permissions}
        });
        setTimeout(function(){window.location.href = '/adduser'},200);
    });
    $('.update-user').on('click', function() {

        var form = $(this).parent();
        var name = form.find('.userName').val();
        var email = form.find('.email').val();
        var password = form.find('.password').val();
        var permissions = form.find('.permissions').val();

        console.log('submitting ajax');

        $.ajax({
            type: "POST",
            url: "/updateuser",
            data: {name: name, email: email, password: password, permissions: permissions}
        });
        setTimeout(function(){window.location.href = '/adduser'},200);
    });
});
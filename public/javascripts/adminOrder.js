$( document ).ready(function() {

    var sum = 0;
    var price = '';
    calcTotal();
    function calcTotal() {
        $("li").each(function () {
            price = $(this).find('.price').text();
            price = price.replace('$', '');
            sum += Number(price);
        });
        $('.displayTotal').text('$' + sum);
    }

    $('.x').on('click', function(){
        $(this).parent().remove();
        sum = 0;
        calcTotal();
    });

    $('.submit').on('click', function(){

    });
});
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
        var restName = $('.restName').text();
        var total = $('.actualTotal').val();
        var date = new Date();
        var values = [];
        $("li").each(function () {
            price = $(this).find('.price').text();
            price = price.replace('$', '');
            var userName = $(this).find('.un').text();
            var item = $(this).find('.item').text();
            var obj = {'userName': userName, 'item': item, 'cost': price};
            values.push(obj);
            console.log(values);
        });

        $.ajax({
            type: "POST",
            url: "/submitFinalOrderData",
            data: {date: date, restName: restName, price: total, order: values}
        });
    });

});
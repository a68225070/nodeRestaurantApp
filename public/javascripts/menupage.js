$( document ).ready(function() {
	var items = [];
    var prices= [];
	$(".item").on("click", function(){
		var selected = $(this);
        var itemName = selected.find('.itemName').text();
        var price = selected.find('.price').text();
        price = price.replace('$','');
		if(selected.hasClass('yellow')){
			selected.css('background-color', 'white');
			selected.removeClass('yellow');
			var removeItem = itemName;
			items = jQuery.grep(items, function(value) 
				{ return value != removeItem; });
            var removePrice = itemName;
            prices = jQuery.grep(prices, function(value)
                { return value != removePrice; });
		} else {
			selected.css('background-color', '#fbf5a8');
			selected.addClass('yellow');
            var x = itemName;
			items.push(x);
            var y = price;
            prices.push(y);
		}
	});
	$('.submit').on('click', function() {
        var txt = '';
		txt = $('#txt_name').val();
		var name = $('.name').text();
		$.ajax({
	  		type: "POST",
	  		url: "/submitOrderData",
	  		data: {restName: name, menuItem: items, prices: prices, extra: txt}
		});
	});
});


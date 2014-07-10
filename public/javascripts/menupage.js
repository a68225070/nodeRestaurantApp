$( document ).ready(function() {
	var items = [];
	$(".item").on("click", function(){
		var selected = $(this);
		if(selected.hasClass('yellow')){
			selected.css('background-color', 'white')
			selected.removeClass('yellow')
			var removeItem = selected.text(); 
			items = jQuery.grep(items, function(value) 
				{ return value != removeItem; });
		} else {
			selected.css('background-color', '#fbf5a8')
			selected.addClass('yellow');
			items.push(selected.text());
		}
	});
	$('.submit').on('click', function() {
		var txt = $('#txt_name').val();
		var name = $('.name').text();
		$.ajax({
	  		type: "POST",
	  		url: "/submitdata",
	  		data: {restName: name, menuItem: items, extra: txt}
		});;
	});
});


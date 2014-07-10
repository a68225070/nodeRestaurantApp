$(function() {

    $('.addNewItem').on('click', function() {
        $(
                "<div class='form-group form-inline rest-items'>"+
                "<label for='menuItem'>Menu</label>" +
                "<input type='text' class='form-control' name=i.itemName size='20'>" +
                "<label for='itemPrice'>Price</label>" +
                "<input type='number' class='form-control' name=i.price min=0 size='20'>" +
                "</div>"
        ).appendTo('.menuItems');
    });
});

$(function() {

    $('#addNew').on('click', function() {
        $(
                "<div class='form-group form-inline'>"+
                "<label for='menuItem'>Menu</label>" +
                "<input type='text' class='form-control' name='itemName' size='20'>" +
                "<label for='itemPrice'>Price</label>" +
                "<input type='number' class='form-control' name='price' min=0 size='20'>" +
                "</div>"
        ).appendTo('#addInput p');
    });
});

/*
$(function(){
    var addDiv = $('#addInput');
    var i = $('#addinput p').size() + 1;

    $('#addNew').live('click', function(){
        $('<p><label for="items">Item Name </label><input type="text" id="p_new" size="20" name="items' +
            i +'" value="" /><label for="items"> Item Price </label><input type="text" id="p_new" size="20" name="items-price' +
            i +'"><a href="#" id="remNew">Remove</a> </p>').appendTo(addDiv);
        i++;
        return false;
    });
    $('#remNew').live('click',function(){
        if( i > 1) {
            $(this).parents('p').remove();
            i--;
        }
        return false;
    });
});
   */
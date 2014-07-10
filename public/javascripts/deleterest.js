$(document).ready(function(){

    //delete restaurant
    $('.delete-restaurant').on('click', function(){
        var name = $(this).parent().find('#restName').val();

        $.ajax({
            type: "POST",
            url: "/deleterest",
            data: {name: name}
        });
        setTimeout(function(){window.location.href = '/editrest'},200);
    });

    //Update Restaurant
    $('.update-restaurant').on('click', function(){
        console.log('updating...');
        var form = $(this).parent();
        var name = form.find('#restName').val();
        var address = form.find('#restAddress').val();
        var phone = form.find('#restPhone').val();

        //get amount of items
        var itemLength = $(this).prev().find('.rest-items').length;
        //store var of item list in order to access each child in for loops
        var items = $(this).prev().find('.rest-items');
        //loop through to find item names and prices and put each as an object into itemArr
        var itemArr = [];
        for(var i=0; i<itemLength; i++){
            var currItem = items[i].childNodes[1].value;
            var currPrice = items[i].childNodes[3].value;
            itemArr.push({itemName: currItem,price: currPrice});
        }
        //make ajax call to pipe data to updaterest
        $.ajax({
            type: "POST",
            url: "/updaterest",
            data: {name: name, address: address, phone: phone, items: itemArr}
        });
        setTimeout(function(){window.location.href = '/editrest'}, 200);
    });
});
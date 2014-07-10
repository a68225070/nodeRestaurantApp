$(function() {

    $( ".selection" ).click(function() {

        //confirms selection
        var answer = true;
        var input =  prompt("Are you sure?", input);
        // get input value
        if (input == "yes");
        {
            //selected Restaurant
            console.log("Selected!");
            alert("submitted");
        }

    });

    $( ".click" ).click(function() {
        //confirms selection
        console.log("clicking Restaurant Name");

        //display list of menu items
    });





});

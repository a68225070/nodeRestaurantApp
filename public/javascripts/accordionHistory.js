$( document ).ready(function() {
   $('.vote-list').on('click', function(){
       var name = $(this).data('name');
       $('.vote-list').removeClass('highlight');
       $(this).toggleClass('highlight');

       $('button').on('click', function(){
           $.ajax({
               type: "POST",
               url: "/selectedRestaurant",
               data: {restaurant: name}

           });
           //after data is sent, re-route to menu
           setTimeout(function(){window.location.href = '/menupage'},200);
       });
   })

});
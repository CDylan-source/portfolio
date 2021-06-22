   var i = 0;

   $(window).scrollTop(0);

   $('.next').bind('click', function () {
       $('.prev').show();

       var height = $(window).height();

       if (i < 5) {
           i++;
           $(window).scrollTop((height * i) + 1);
       }

      


   });

   $('.prev').bind('click', function () {
       $('.next').show();

       var height = $(window).height();

       if (i > 0) {
           i--;
           $(window).scrollTop(height * i)
       }

      


   });





   $(window).scroll(function () {
       var scroll = $(window).scrollTop();
       if (scroll == 0) {
           $('.prev').hide();
           i = 0;
        $('#tsparticles').removeClass('hidden');
           
           $('.curves_2').hide();
           $('.curves').show();
           $('.boucle').hide();

       }  else if (scroll >= $(window).height() * 1.5 && scroll < $(window).height() * 2.5) {
            $('#tsparticles').addClass('hidden');
           $('.curves_2').show();
           $('.curves').hide();
           i = 2;
           $('.boucle').hide();
           $('.next').show();
       } else if (scroll < $(window).height() * 1.5 && scroll >= $(window).height()) {
            $('#tsparticles').removeClass('hidden');
           $('.curves_2').hide();
           $('.curves').show();
           $('.prev').show();
           $('.next').show();
           i = 1;
           $('.boucle').hide();
        }
        else if(scroll >= $(window).height() * 2.5 && scroll < $(window).height() * 3.5){
            $('.curves_2').hide();
             $('#tsparticles').addClass('hidden');
           $('.curves').hide();
           $('.boucle').show();
           $('.next').show();
           i = 3;
           
        }
        else if(scroll >= $(window).height() * 3.5 && scroll < $(window).height() * 4.5){
       $('.next').show();
       i = 4;
       }
       else if (scroll >= $(window).height() * 4.5 && scroll < $(window).height() * 5.5){
           i = 5;
           $('.next').hide();
       }
   });

   $('.figma').bind('click', function () {
       
       $('.figma_p').removeClass('p-left-out');
       $('.dev_p').removeClass('p-bottom-in');
       $('.access_p').removeClass('p-right-in');
       $('.dev_p').addClass('p-right-out');
       $('.access_p').addClass('p-right-out');
       setTimeout(() => {
           $('.dev_p').hide();
           $('.access_p').hide();
           
           if(window.matchMedia("(min-width : 330px)").matches){
               $('.figma_p').show();
           }
           else{
               $('.page_3 div p:nth-child(4)').show();
               $('.page_3 div p:nth-child(5)').show();
           };
           $('.figma_p').addClass('p-left-in');
       }, 1000);
       
   });

   $('.dev').bind('click', function () {
       $('.figma_p').removeClass('p-left-in');
       $('.dev_p').removeClass('p-left-out');
       $('.dev_p').removeClass('p-right-out');
       $('.access_p').removeClass('p-right-in');
       $('.figma_p').addClass('p-left-out');
       $('.access_p').addClass('p-right-out');
       setTimeout(() => {
           $('.figma_p').hide();
           $('.access_p').hide();
           
           if(window.matchMedia("(min-width : 330px)").matches){
               $('.dev_p').show();
           }
           else{
               $('.page_3 div p:nth-child(1)').show();
               $('.page_3 div p:nth-child(2)').show();
           };
           $('.dev_p').addClass('p-bottom-in');
       }, 1000);
   });

   $('.access').bind('click', function () {
       $('.figma_p').removeClass('p-left-in');
       $('.dev_p').removeClass('p-bottom-in');
       $('.access_p').removeClass('p-right-out');
       $('.figma_p').addClass('p-left-out');
       $('.dev_p').addClass('p-left-out');
      
       setTimeout(() => {
           $('.figma_p').hide();
           $('.dev_p').hide();
           $('.access_p').show();
           $('.access_p').addClass('p-right-in');
       }, 1000);
   });

 
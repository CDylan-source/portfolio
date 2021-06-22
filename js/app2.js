   var i = 0;

   $(window).scrollTop(0);

   $('.next').bind('click', function () {
       $('.prev').show();

       var height = $(window).height();

       if (i < 3) {
           i++;
           $(window).scrollTop(height * i);
       }

      


   });

   $('.prev').bind('click', function () {
       $('.next').show();

       var height = $(window).height();

       if (i > 0) {
           i--;
           $(window).scrollTop(height * i)
       }

       if (i == 1) {

           for (a = 0; a < 5; a++) {
               $('#particles' + a + '-js').removeClass('hidden');
           }
           $('.curves_2').hide();
           $('.curves').show();
       }


   });





   $(window).scroll(function () {
       var scroll = $(window).scrollTop();
       if (scroll == 0) {
           $('.prev').hide();
           i = 0;
           for (a = 0; a < 5; a++) {
               $('#particles' + a + '-js').removeClass('hidden');
           }
           $('.curves_2').hide();
           $('.curves').show();
           $('.boucle').hide();

       } else if (scroll == $(document).height() - $(window).height()) {
           $('.next').hide();
           i = 3;
       } else if (scroll >= $(window).height() * 1.5 && scroll < $(window).height() * 2.5) {
           for (a = 0; a < 5; a++) {
               $('#particles' + a + '-js').addClass('hidden');
           }
           $('.curves_2').show();
           $('.curves').hide();
           i = 2;
           $('.boucle').hide();
           
       } else if (scroll < $(window).height() * 1.5 && scroll >= $(window).height()) {
           for (a = 0; a < 5; a++) {
               $('#particles' + a + '-js').removeClass('hidden');
           }
           $('.curves_2').hide();
           $('.curves').show();
           $('.prev').show();
           $('.next').show();
           i = 1;
           $('.boucle').hide();
        }
        else if(scroll >= $(window).height() * 2.5 && scroll < $(window).height() * 3.5){
            $('.curves_2').hide();
            for (a = 0; a < 5; a++) {
               $('#particles' + a + '-js').addClass('hidden');
           }
           $('.curves').hide();
           $('.boucle').show();
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
           $('.figma_p').show();
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
           $('.dev_p').show();
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
   var i = 0;
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);

   window.addEventListener('resize', () => {
       let scroll = $(window).scrollTop();
       vh = window.innerHeight * 0.01;
       document.documentElement.style.setProperty('--vh', `${vh}px`);
       $(window).scrollTop(scroll);

   });
   $(window).scrollTop(0);

   $('.next').bind('click', function () {
       $('.prev').show();

       var height = window.innerHeight;


       i++
       $(window).scrollTop((height * i) + 1);





   });

   $('.prev').bind('click', function () {
       $('.next').show();

       var height = window.innerHeight;


       i--;
       $(window).scrollTop(height * i)





   });





   $(window).scroll(function () {
       var scroll = $(window).scrollTop();
       if (window.matchMedia('(max-width:640px)').matches) {
           if (scroll == 0) {
               $('.prev').hide();
               i = 0;
               $('#tsparticles').removeClass('hidden');

               $('.curves_2').hide();
               $('.curves').show();
               $('.boucle').hide();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here')
               };
               $('#burger h6:nth-child(1)').addClass('here');

           } else if (scroll >= window.innerHeight * 1.5 && scroll < window.innerHeight * 2.5) {
               $('#tsparticles').addClass('hidden');
               $('.curves_2').show();
               $('.curves').hide();
               i = 2;
               $('.boucle').hide();
               $('.next').show();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here')
               };
               $('#burger h6:nth-child(3)').addClass('here');
           } else if (scroll < window.innerHeight * 1.5 && scroll >= window.innerHeight * 0.5) {
               $('#tsparticles').removeClass('hidden');
               $('.curves_2').hide();
               $('.curves').show();
               $('.prev').show();
               $('.next').show();
               i = 1;
               $('.boucle').hide();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here')
               };
               $('#burger h6:nth-child(2)').addClass('here');
           } else if (scroll >= window.innerHeight * 2.5 && scroll < window.innerHeight * 3.5) {
               $('.curves_2').hide();
               $('#tsparticles').addClass('hidden');
               $('.curves').hide();
               $('.boucle').show();
               $('.next').show();
               i = 3;
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here')
               };
               $('#burger h6:nth-child(4)').addClass('here');
           } else if (scroll >= window.innerHeight * 3.5 && scroll < window.innerHeight * 4.5) {
               $('.next').show();
               i = 4;
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here')
               };
               $('#burger h6:nth-child(4)').addClass('here');
           } else if (scroll >= window.innerHeight * 4.5 && scroll < window.innerHeight * 5.5) {
               i = 5;
               $('.next').hide();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here')
               };
               $('#burger h6:nth-child(5)').addClass('here');
           }
       } else {
           if (scroll == 0) {
               $('.prev').hide();
               i = 0;
               $('#tsparticles').removeClass('hidden');

               $('.curves_2').hide();
               $('.curves').show();
               $('.boucle').hide();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here');
                   $('header ul li:nth-child(' + a + ')').removeClass('here');
               };
               $('#burger h6:nth-child(1)').addClass('here');
               $('header ul li:nth-child(1)').addClass('here');


           } else if (scroll < window.innerHeight * 1.5 && scroll >= window.innerHeight * 0.5) {
               $('#tsparticles').addClass('hidden');
               $('.curves_2').show();
               $('.curves').hide();
               $('.prev').show();
               $('.next').show();
               i = 1;
               $('.boucle').hide();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here');
                   $('header ul li:nth-child(' + a + ')').removeClass('here');
               };
               $('#burger h6:nth-child(2)').addClass('here');
               $('header ul li:nth-child(2)').addClass('here');

           } else if (scroll >= window.innerHeight * 1.5 && scroll < window.innerHeight * 2.5) {
               $('#tsparticles').addClass('hidden');
               $('.curves_2').hide();
               $('.curves').hide();
               i = 2;
               $('.boucle').show();
               $('.next').show();
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here');
                   $('header ul li:nth-child(' + a + ')').removeClass('here');
               };
               $('#burger h6:nth-child(4)').addClass('here');
               $('header ul li:nth-child(3)').addClass('here');

           } else if (scroll >= window.innerHeight * 2.5 && scroll < window.innerHeight * 3.5) {
               $('.curves_2').hide();
               $('#tsparticles').addClass('hidden');
               $('.curves').hide();
               $('.boucle').show();
               $('.next').hide();
               i = 3;
               for (a = 1; a <= 5; a++) {
                   $('#burger h6:nth-child(' + a + ')').removeClass('here');
                   $('header ul li:nth-child(' + a + ')').removeClass('here');
               };
               $('#burger h6:nth-child(5)').addClass('here');
               $('header ul li:nth-child(4)').addClass('here');

           }
       }
   });

   $('.figma').bind('click', function () {

       $('.figma_p').removeClass('p-left-out');
       $('.dev_p').removeClass('p-bottom-in');
       $('.access_p').removeClass('p-right-in');
       $('.dev_p').addClass('p-right-out');
       $('.access_p').addClass('p-right-out');
       $('li h4').removeClass('activ');
       $('.figma h4').addClass('activ');
       setTimeout(() => {
           $('.dev_p').hide();
           $('.access_p').hide();

           if (window.matchMedia("(min-width : 330px)").matches) {
               $('.figma_p').show();
           } else {
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
       $('li h4').removeClass('activ');
       $('.dev h4').addClass('activ');
       setTimeout(() => {
           $('.figma_p').hide();
           $('.access_p').hide();

           if (window.matchMedia("(min-width : 330px)").matches) {
               $('.dev_p').show();
           } else {
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
       $('li h4').removeClass('activ');
       $('.access h4').addClass('activ');
       setTimeout(() => {
           $('.figma_p').hide();
           $('.dev_p').hide();
           $('.access_p').show();
           $('.access_p').addClass('p-right-in');
       }, 1000);
   });

   $('.modal h6:nth-child(1)').bind('click', function () {
       $(window).scrollTop(0);
       $.modal.close();

   });
   $('.modal h6:nth-child(2)').bind('click', function () {
       $(window).scrollTop(window.innerHeight + 1);
       $.modal.close();
   });
   $('.modal h6:nth-child(3)').bind('click', function () {
       $(window).scrollTop((window.innerHeight * 2) + 1);
       $.modal.close();
   });
   $('.modal h6:nth-child(4)').bind('click', function () {
       $(window).scrollTop((window.innerHeight * 3) + 1);
       $.modal.close();
   });
   $('.modal h6:nth-child(5)').bind('click', function () {
       $(window).scrollTop((window.innerHeight * 5) + 1);
       $.modal.close();
   });

   $('.logo').bind('click', function () {
       $(window).scrollTop(0);
   });


   $('header ul li:nth-child(1)').bind('click', function () {
       $(window).scrollTop($(window).height(0));

   });

   $('header ul li:nth-child(2)').bind('click', function () {
       $(window).scrollTop(window.innerHeight);

   });

   $('header ul li:nth-child(3)').bind('click', function () {
       $(window).scrollTop(window.innerHeight * 2);

   });

   $('header ul li:nth-child(4)').bind('click', function () {
       $(window).scrollTop(window.innerHeight * 3);

   });

   $('form').bind('submit', function (e) {
       e.preventDefault();
       $.ajax({
           type: 'POST',
           url: "/portfolio/php/mail.php",
           data: $(this).serialize(),
           success: function (response) {
               var resp = JSON.parse(response);
               $('.page_6 form button').remove();
               $('.page_6').append("<p>" + resp + "</p>");
           }
       });
   });
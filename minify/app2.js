var i=0;let vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}),$(window).scrollTop(0),$(".next").bind("click",function(){$(".prev").show();var e=window.innerHeight;i++,$(window).scrollTop(e*i+1)}),$(".prev").bind("click",function(){$(".next").show();var e=window.innerHeight;i--,$(window).scrollTop(e*i)}),$(window).scroll(function(){var e=$(window).scrollTop();if(window.matchMedia("(max-width:640px)").matches){if(0==e){for($(".prev").hide(),i=0,$("#tsparticles").removeClass("hidden"),$(".curves_2").hide(),$(".curves").show(),$(".boucle").hide(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(1)").addClass("here")}else if(e>=1.5*window.innerHeight&&e<2.5*window.innerHeight){for($("#tsparticles").addClass("hidden"),$(".curves_2").show(),$(".curves").hide(),i=2,$(".boucle").hide(),$(".next").show(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(3)").addClass("here")}else if(e<1.5*window.innerHeight&&e>=.5*window.innerHeight){for($("#tsparticles").removeClass("hidden"),$(".curves_2").hide(),$(".curves").show(),$(".prev").show(),$(".next").show(),i=1,$(".boucle").hide(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(2)").addClass("here")}else if(e>=2.5*window.innerHeight&&e<3.5*window.innerHeight){for($(".curves_2").hide(),$("#tsparticles").addClass("hidden"),$(".curves").hide(),$(".boucle").show(),$(".next").show(),i=3,a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(4)").addClass("here")}else if(e>=3.5*window.innerHeight&&e<4.5*window.innerHeight){for($(".next").show(),i=4,a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(4)").addClass("here")}else if(e>=4.5*window.innerHeight&&e<5.5*window.innerHeight){for(i=5,$(".next").hide(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(5)").addClass("here")}}else if(0==e){for($(".prev").hide(),i=0,$("#tsparticles").removeClass("hidden"),$(".curves_2").hide(),$(".curves").show(),$(".boucle").hide(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here"),$("header ul li:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(1)").addClass("here"),$("header ul li:nth-child(1)").addClass("here")}else if(e<1.5*window.innerHeight&&e>=.5*window.innerHeight){for($("#tsparticles").addClass("hidden"),$(".curves_2").show(),$(".curves").hide(),$(".prev").show(),$(".next").show(),i=1,$(".boucle").hide(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here"),$("header ul li:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(2)").addClass("here"),$("header ul li:nth-child(2)").addClass("here")}else if(e>=1.5*window.innerHeight&&e<2.5*window.innerHeight){for($("#tsparticles").addClass("hidden"),$(".curves_2").hide(),$(".curves").hide(),i=2,$(".boucle").show(),$(".next").show(),a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here"),$("header ul li:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(4)").addClass("here"),$("header ul li:nth-child(3)").addClass("here")}else if(e>=2.5*window.innerHeight&&e<3.5*window.innerHeight){for($(".curves_2").hide(),$("#tsparticles").addClass("hidden"),$(".curves").hide(),$(".boucle").show(),$(".next").hide(),i=3,a=1;a<=5;a++)$("#burger h6:nth-child("+a+")").removeClass("here"),$("header ul li:nth-child("+a+")").removeClass("here");$("#burger h6:nth-child(5)").addClass("here"),$("header ul li:nth-child(4)").addClass("here")}}),$(".figma").bind("click",function(){$(".figma_p").removeClass("p-left-out"),$(".dev_p").removeClass("p-bottom-in"),$(".access_p").removeClass("p-right-in"),$(".dev_p").addClass("p-right-out"),$(".access_p").addClass("p-right-out"),$("li h4").removeClass("activ"),$(".figma h4").addClass("activ"),setTimeout(()=>{$(".dev_p").hide(),$(".access_p").hide(),window.matchMedia("(min-width : 330px)").matches?$(".figma_p").show():($(".page_3 div p:nth-child(4)").show(),$(".page_3 div p:nth-child(5)").show()),$(".figma_p").addClass("p-left-in")},1e3)}),$(".dev").bind("click",function(){$(".figma_p").removeClass("p-left-in"),$(".dev_p").removeClass("p-left-out"),$(".dev_p").removeClass("p-right-out"),$(".access_p").removeClass("p-right-in"),$(".figma_p").addClass("p-left-out"),$(".access_p").addClass("p-right-out"),$("li h4").removeClass("activ"),$(".dev h4").addClass("activ"),setTimeout(()=>{$(".figma_p").hide(),$(".access_p").hide(),window.matchMedia("(min-width : 330px)").matches?$(".dev_p").show():($(".page_3 div p:nth-child(1)").show(),$(".page_3 div p:nth-child(2)").show()),$(".dev_p").addClass("p-bottom-in")},1e3)}),$(".access").bind("click",function(){$(".figma_p").removeClass("p-left-in"),$(".dev_p").removeClass("p-bottom-in"),$(".access_p").removeClass("p-right-out"),$(".figma_p").addClass("p-left-out"),$(".dev_p").addClass("p-left-out"),$("li h4").removeClass("activ"),$(".access h4").addClass("activ"),setTimeout(()=>{$(".figma_p").hide(),$(".dev_p").hide(),$(".access_p").show(),$(".access_p").addClass("p-right-in")},1e3)}),$(".modal h6:nth-child(1)").bind("click",function(){$(window).scrollTop(0),$.modal.close()}),$(".modal h6:nth-child(2)").bind("click",function(){$(window).scrollTop(window.innerHeight+1),$.modal.close()}),$(".modal h6:nth-child(3)").bind("click",function(){$(window).scrollTop(2*window.innerHeight+1),$.modal.close()}),$(".modal h6:nth-child(4)").bind("click",function(){$(window).scrollTop(3*window.innerHeight+1),$.modal.close()}),$(".modal h6:nth-child(5)").bind("click",function(){$(window).scrollTop(5*window.innerHeight+1),$.modal.close()}),$(".logo").bind("click",function(){$(window).scrollTop(0)}),$("header ul li:nth-child(1)").bind("click",function(){$(window).scrollTop($(window).height(0))}),$("header ul li:nth-child(2)").bind("click",function(){$(window).scrollTop(window.innerHeight)}),$("header ul li:nth-child(3)").bind("click",function(){$(window).scrollTop(2*window.innerHeight)}),$("header ul li:nth-child(4)").bind("click",function(){$(window).scrollTop(3*window.innerHeight)}),$("form").bind("submit",function(e){e.preventDefault(),$.ajax({type:"POST",url:"php/mail.php",data:$(this).serialize(),success:function(e){var i=JSON.parse(e);$("p").html(i)}})});
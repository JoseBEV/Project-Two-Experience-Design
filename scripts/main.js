"use strict";$(document).ready(function(){$(function(){$(".draggable").draggable()})});var $header_top=$(".header-top"),$nav=$("nav");$(document).ready(function(){$header_top.find("a").on("click",function(){$(this).parent().toggleClass("open-menu")}),$("#rope").draggable({revert:!0}),$(".pullrope").draggable({drag:function(n,t){$("#rope").hide("slow"),$(".curtainL").css("width","0%"),$(".curtainL").css("transition","2s"),$(".curtainR").css("width","0%"),$(".curtainR").css("transition","2s"),$(".wrapper").delay(7500).fadeOut()}}),$("button").click(function(){$(".paper-dolls img").fadeOut(),setTimeout(function(){$(".costumes img").fadeIn(),$(".paper-dolls img").fadeIn()},3e3),$(".curtainL").css("width","50%"),$(".curtainL").css("transition","2s"),$(".curtainR").css("width","50%"),$(".curtainR").css("transition","2s"),setTimeout(function(){$(".curtainL").css("width","0%"),$(".curtainL").css("transition","2s"),$(".curtainR").css("width","0%"),$(".curtainR").css("transition","2s")},3e3)}),$("#fullpage").fullpage({sectionsColor:["#B8AE9C","#348899","#F2AE72","#5C832F","#B8B89F"],sectionSelector:".vertical-scrolling",slideSelector:".horizontal-scrolling",navigation:!0,slidesNavigation:!0,controlArrows:!1,anchors:["firstSection","secondSection","thirdSection","fourthSection"],menu:"#menu",afterLoad:function(n,t){$header_top.css("background","rgba(0, 47, 77, .3)"),$nav.css("background","rgba(0, 47, 77, .25)"),5==t&&$("#fp-nav").hide()},onLeave:function(n,t,a){5==n&&$("#fp-nav").show()},afterSlideLoad:function(n,t,a,s,i,o){"fifthSection"==n&&1==s&&($.fn.fullpage.setAllowScrolling(!1,"up"),$header_top.css("background","transparent"),$nav.css("background","transparent"),$(this).css("background","#374140"),$(this).find("h2").css("color","white"),$(this).find("h3").css("color","white"),$(this).find("p").css({color:"#DC3522",opacity:1,transform:"translateY(0)"})),1==s&&$(".paper-dolls").addClass("animated slideInUp"),0==s&&$(".paper-dolls").removeClass("animated slideInUp")},onSlideLeave:function(n,t,a,s){"fifthSection"==n&&1==a&&($.fn.fullpage.setAllowScrolling(!0,"up"),$header_top.css("background","rgba(0, 47, 77, .3)"),$nav.css("background","rgba(0, 47, 77, .25)"))}}),$('[rel="tooltip"]').tooltip()});
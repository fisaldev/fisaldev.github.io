"use strict";var app={init:function(){var a=function(){var a,b=$("#content"),c="js-push-back",d=$("#menu-btn"),e="js-is-on",f=$("#menu"),g="js-is-open",h=$(".nav a");a=function(){app.toggleStateClass(d,e,f,g),b.toggleClass(c)},d.on("click",function(){a()}),h.on("click",function(b){b.preventDefault();var c=$($(this).attr("href"));a(),setTimeout(function(){app.smoothScroll(c)},500)})};a()},toggleStateClass:function(a,b,c,d){a.toggleClass(b),c.toggleClass(d)},smoothScroll:function(a){return $("html, body").stop().animate({scrollTop:a.offset().top},400),!1}};$(document).ready(function(){app.init(),$(".owl-carousel").owlCarousel({singleItem:!0,pagination:!1}),(new WOW).init()});
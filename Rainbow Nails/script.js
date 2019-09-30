$(document).ready(function(){
  
  $('.navbar-nav li a').click(function(a){
    $('.navbar-collapse').collapse("hide")
  });
  
 var t=$(".scroll");t.click(function(a){a.preventDefault(),$("body,html").animate({scrollTop:$(this.hash).offset().top-66},500)}),$(window).scroll(function(){var a=$(this).scrollTop();t.each(function(){$(this.hash).offset().top-20<=a&&($(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"))})})
  
  console.log(this);
  
});
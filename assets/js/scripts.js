$(document).ready(function() {  
  var stickyNavTop = $('#navstickyrow').offset().top;  
    
  var stickyNav = function(){  
  var scrollTop = $(window).scrollTop();  
         
  if (scrollTop > stickyNavTop) {   
      $('#navstickyrow').addClass('sticky');  
  } else {  
      $('#navstickyrow').removeClass('sticky');   
  }  
  };  
    
  stickyNav();  
  
$(window).scroll(function() {  
      stickyNav();  
  });  
});  
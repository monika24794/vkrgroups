$(document).ready(function() {
  var $navbar = $("#mNavbar");
  
  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
      AdjustHeader();
  });
  
  function AdjustHeader(){
    if ($(window).scrollTop() > 60) {
      if (!$navbar.hasClass("fixed-top")) {
        $navbar.addClass("fixed-top");
      }
    } else {
      $navbar.removeClass("fixed-top");
    }
  }

  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
});


$('.owl-carousel-courses').owlCarousel({
    
  loop:false,
  nav: true,
  dots:false,
  margin:40,
  responsiveClass:true,
  responsive:{
  0:{
          items:1,
          nav: true,
      },
  768:{
          items:2,
          loop:false
      },
  
  1200:{
          items:3,
    
      }
     
  }
})

$('.owl-carousel-testimonial').owlCarousel({
   
  loop:false,
  nav: false,
  dots:true,
    margin:40,
    responsiveClass:true,
    responsive:{
    0:{
            items:1,
            nav: true,
        },
    768:{
            items:2,
            loop:false
        },
    
    1200:{
            items:3,
      
        }
       
    }
  })

  
AOS.init({
  duration:500,
});

AOS.init({

disable: function() {
  var maxWidth = 991;
  return window.innerWidth < maxWidth;
}
});



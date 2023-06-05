const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}

$(document).ready(function(){
  // OWL CAROUSEL CUSTOMIZATION
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoPlayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-nav-prev'),$('.owl-nav-next')],
    responsive:responsive,
    
  });
  // TOGGLE NAVBAR
  $(".header__toggle").click(function(){
    $('.header').toggleClass('header--active')
  })
  // AOS INSTANCE
  AOS.init()
});

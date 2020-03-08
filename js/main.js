$('.hero-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 0,
  nav: false,
  touchDrag: true,
  mouseDrag: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
$('.music-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 40,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})
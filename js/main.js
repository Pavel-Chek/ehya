var menuButton = document.querySelector(".navbar_menu_light");
menuButton.addEventListener('click', function () {
    console.log("Клик");
    document
        .querySelector(".navbar-media")
        .classList.toggle("navbar-media-visible");
})

var MenuLink = $(".trend-menu_item");

MenuLink.on('click', function () {
    console.log("Клик");
    event.preventDefault();
})

// Слайдер инициализация
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,        
      },

      on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  mySwiper.slideNext(1, runCallbacks);
//ハンバーガーメニュー表示のJS
function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");
  const mask = document.querySelector(".mask");

  hamburgerMenu.classList.toggle("open");
  navMenu.classList.toggle("open");
  mask.classList.toggle("open");
}

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

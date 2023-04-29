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
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

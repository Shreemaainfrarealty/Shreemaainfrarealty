//let index = 0;
//displayImages();
//function displayImages() {
//  let i;
//  const images = document.getElementsByClassName("image");
//  for (i = 0; i < images.length; i++) {
//    images[i].style.display = "none";
//  }
//  index++;
//  if (index > images.length) {
//   index = 1;
//  }
//  images[index-1].style.display = "block";
//  setTimeout(displayImages, 2000); 
//}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".swiper-slide", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
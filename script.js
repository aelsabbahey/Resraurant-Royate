"use strict";
// menu at mobile size
const menu=document.querySelector('#menu');
const navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active');
}


// Swipper 

let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    loop:true,
  },
});


//


// let searchForm=document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('hide')
// }


document.querySelector('#search-btn').onclick=function()
{
    document.querySelector('.navbar12').classList.toggle('hide')

}

document.querySelector('#cart-btn').onclick=function()
{
    document.querySelector('.shopping-cart').classList.toggle('hide')

}

document.querySelector('#login-btn').onclick=function()
{
    document.querySelector('.login').classList.toggle('hide')

}
document.querySelector('#menu-btn').onclick=function()
{
    document.querySelector('.navbar').classList.toggle('hidei')

}

var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
    
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });


  
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
  
    },
    768: {
      slidesPerView: 2,
     
    },
    1020: {
      slidesPerView: 3,
     
    },
  },
});
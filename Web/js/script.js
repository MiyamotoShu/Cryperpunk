let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// 按下按鈕產生的變化

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    navbar.addEventListener('click', (event) => {
      if (event.target !== menu) {
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
      }
      });
}




let images = ["./images/Back/0.png","./images/Back/1.png","./images/Back/2.png","./images/Back/3.png","./images/Back/4.png","./images/Back/5.png","./images/Back/6.png","./images/Back/2.png","./images/Back/3.png","./images/Back/4.png","./images/Back/5.png","./images/Back/2.png","./images/Back/3.png","./images/Back/4.png","./images/Back/5.png","./images/Back/6.png","./images/Back/7.png","./images/Back/8.png","./images/Back/9.png"];
let index = 0;

setInterval(function () {
    index = (index + 1) % images.length;
    let bgImg = new Image();
    bgImg.src = images[index];
    bgImg.onerror = function () {
      bgImg.src = "./images/Back/0.png";
    };
    document.querySelector('.home').style.backgroundImage = `url(${bgImg.src})`;
}, 100);

let animation = document.querySelector('.heading');
setInterval(function(){
    animation.style.animation;
}, 2000);

const element = document.querySelector('.wpBtn');
element.addEventListener('mouseover', function () {
  element.innerHTML = 'COMING SOON';
});
element.addEventListener('mouseout', function () {
  element.innerHTML = 'WHITEPAPER';
});


const img = document.querySelector('.roadmap .mapbox img');

window.addEventListener('resize', function() {
if (window.innerWidth <= 600) {
img.src = "./images/roadmap_S.png";
} else {
img.src = "./images/roadmap.png";
}
});

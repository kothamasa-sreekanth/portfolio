//toggle icon navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let nextDom = document.getElementById('next');
  let prevDom = document.getElementById('prev');
  let carouselDom = document.querySelector('.carousel');
  let SliderDom = carouselDom.querySelector('.carousel .list');
  let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
  let timeDom = document.querySelector('.carousel .time');

// burger icon
  menuIcon.onclick = function(){
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  }


//project deatails
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 5000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}




//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
  sections.forEach(sec =>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top>=offset && top<offset+height){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    }
  })
  let header=document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);

  //remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}



//contact from 
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: {
          'Accept': 'application/json'
      }
  }).then(response =>{
    if(response.ok){
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    }
    else{
      alert('oops! There was a problem submitting your form. Please try again later.');
    }
  }).catch(error =>{
    alert('oops! There was a problem submitting your form. Please try again later.');
  });
});

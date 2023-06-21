/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SWIPER
let swiperProducts = new Swiper(".products-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlide: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
    },
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// SCROLL
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2000',
    delay: '200',
})

sr.reveal(`.home-data, products-container, .footer-container, .footer-info`)
sr.reveal(`.home-images`, {delay: 500, origin: 'bottom'})
sr.reveal(`.new-card, .brand-img`, {interval: 100})


// change cost
function L() {
    document.getElementById("hargaL").innerHTML = "Rp X";
}
function M() {
    document.getElementById("hargaL").innerHTML = "Rp Y";
}
function XL() {
    document.getElementById("hargaL").innerHTML = "Rp Z";
}
function hapus() {
    const element = document.getElementById("hargaXL");
    element.remove();
  }




image_array_wanita = [
    'cewe1.jpg','cewe3.jpg'
]
image_array_pria = [
    'cowo.jpg','cowo1.jpg','cowo3.jpg','cowo4.jpg'
]
function random_img_wanita() {
    random_index = Math.floor(Math.random() * image_array_wanita.length);

    selected_image = image_array_wanita[random_index];

    document.getElementById('change_img_wanita').src = `img/${selected_image}`;
}
function random_img_pria() {
    random_index = Math.floor(Math.random() * image_array_pria.length);

    selected_image = image_array_pria[random_index];

    document.getElementById('change_img_pria').src = `img/${selected_image}`;
}


function genderBg_pria() {
    document.querySelector('.new-bg').style.background = "url(img/gender-pria.jpg) center center / cover"
}

function genderBg_wanita() {
    document.querySelector('.new-bg').style.background = "url(img/gender-wanita.jpg) center center / cover"
}
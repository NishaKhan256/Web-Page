// Grab element
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error (`Somthing went make sure that ${selector} exist or is typed correctly.`);
};

// Nav Style on Scroll
const scrollHeaader = () => 
    {
        const headerElement = selectElement('#header');
        if(this.scrollY >= 15){
            headerElement.classList.add('activated');
        }else{
            headerElement.classList.remove('activated');
        }
    };

    window.addEventListener('scroll' ,scrollHeaader );

// Open menu & search pop-up
const menuToggleIcon =selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click' , toggleMenu)
// Open/close search pop-up
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add
 ('activated'));

 formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove
 ('activated'));
// --Close the search from popup on ESC keypress
window.addEventListener('keyup' , event =>{
    if(event.key === 'Escape')searchFormContainer.classList.remove('activated');
});
// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentThem = localStorage.getItem('currentThem');

if(currentThem){
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currnetTheme', 'themActive');
    }else{
        localStorage.removeItem('currnetTheme');

    }
});

// Swiper
const swiper =new Swiper('.swiper' ,{
    slidesPerVeiw:1,
     spaceBetweem: 20,
     navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
     pagination: {
        el: '.swiper-pagination'
     },
     breakpoints: {
        700:{
            slidesPerView: 2
        },
        1200:{
            slidesPerView: 3
        }
        
     }
});
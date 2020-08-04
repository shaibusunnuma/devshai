const navSlide = () => {
    const navToggle = document.querySelector('.nav-toggle');

    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', ()=>{
        //Toggel nav
        document.body.classList.toggle('nav-open');

        //animate links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            console.log(`The number is ${index/7}`)
            
        })
    });
    

}

navSlide();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
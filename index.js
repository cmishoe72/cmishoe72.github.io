const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });


}

setTimeout(function(){
    var element =document.getElementById("picture-of-me");
    element.classList.remove("preload");
},2000);



navSlide();
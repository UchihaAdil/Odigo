(function(){
	const header = document.querySelector(".header");
	const nav = document.querySelector(".header__navigation");
	const closeNav = document.querySelector('.menu__close');
	

	window.onscroll = () =>{ 
		if(window.pageYOffset > 30){
			header.classList.add("header_active");	
			nav.style.paddingTop = "26px";
			closeNav.style.top = "26px";
		}
		else{
			header.classList.remove("header_active");
			nav.style.paddingTop = "56px";
			
		}
	};

}());

// ========== BURGER ===========

(function(){
	const burgerItem = document.querySelector(".header__burger");
	const menu = document.querySelector(".header__menu");
	const menuClose = document.querySelector(".header__menu");
	const menuLinks = document.querySelectorAll('.menu__link');

	burgerItem.addEventListener("click",() => {
		menu.classList.add("header__menu-active");
	});
	
	menuClose.addEventListener("click",() => {
		menuClose.classList.remove("header__menu-active");
	});

	if(window.innerWidth < 768){
		for(let i = 0; i < menuLinks.length; i++){
			menuLinks[i].addEventListener("click",() =>{
				menuClose.classList.remove("header__menu-active");
			});
		}
	}
}());


// ========== SCROLL SMOOTH ============

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
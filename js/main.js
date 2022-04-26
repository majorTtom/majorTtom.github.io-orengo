
$(document).ready(function(){
	$('.ques__item').on('click', function(){
		$(this).toggleClass('ques__item-active');
		// $('.header__window').toggleClass('header__window-active')
	});
});

$(document).ready(function(){
	$('.main__btn').on('click', function(){
		$('.popup').toggleClass('popup__active');
		$('.popup__bcg').toggleClass('popup__active');
		// $('.header__window').toggleClass('header__window-active')
	});
});

$(document).ready(function(){
	$('.popup__btn').on('click', function(){
		$('.popup').removeClass('popup__active');
		$('.popup__bcg').removeClass('popup__active');
		// $('.header__window').toggleClass('header__window-active')
	});
});

$(document).ready(function(){
	$('.footer__btn').on('click', function(){
		$('.popup').toggleClass('popup__active');
		$('.popup__bcg').toggleClass('popup__active');
		// $('.header__window').toggleClass('header__window-active')
	});
});

/*mobile-btn*/


$(document).ready(function(){
	$('.header__mobile-btn').on('click', function(){
		$('.header').toggleClass('header__mobile-active');
		// $('.header__window').toggleClass('header__window-active')
	});
});


/**/

$(document).ready(function(){
	$('.menu__nav-btn').on('click', function(){
		$(this).toggleClass('menu__nav-btn-active');
		$('.menu__first').toggleClass('menu__first-active');
		$('.header').toggleClass('header__active');
	});
});
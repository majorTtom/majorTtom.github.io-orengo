$(document).ready(function(){
   $(document).on('click', '.menu__btn', function(e){
    e.preventDefault;
    $('.menu__btn-active').removeClass('menu__btn-active');
    $('.menu__first').removeClass('menu__first-active');
    $('.header').removeClass('header__active');
    $(this).addClass('menu__btn-active');  
  })

   /*ПОРЦИОННЫЕ*/
   /*golubika*/
  $(document).on('mouseenter', '.tg', function(e){
    e.preventDefault;
    $('.tg-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.tg', function(e){
    e.preventDefault;
    $('.tg-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*fistash tartal(ft)*/
  $(document).on('mouseenter', '.ft', function(e){
    e.preventDefault;
    $('.ft-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.ft', function(e){
    e.preventDefault;
    $('.ft-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })
  /*СЛАДКИЕ*/
  /*pk*/
  $(document).on('mouseenter', '.pk', function(e){
    e.preventDefault;
    $('.pk-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.pk', function(e){
    e.preventDefault;
    $('.pk-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*печенье брауни(pbr)*/
  $(document).on('mouseenter', '.pbr', function(e){
    e.preventDefault;
    $('.pbr-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.pbr', function(e){
    e.preventDefault;
    $('.pbr-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*ЗАКУСКИ*/
  /*сэндв с семгой(ssem)*/
  $(document).on('mouseenter', '.ssem', function(e){
    e.preventDefault;
    $('.ssem-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.ssem', function(e){
    e.preventDefault;
    $('.ssem-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*блинчики с творгом и джемом(btd)*/
  $(document).on('mouseenter', '.btd', function(e){
    e.preventDefault;
    $('.btd-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.btd', function(e){
    e.preventDefault;
    $('.btd-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

})



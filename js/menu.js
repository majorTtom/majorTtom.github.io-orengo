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

  /*ТОРТЫ*/
  /*меренговый рулет(mr)*/
  $(document).on('mouseenter', '.mr', function(e){
    e.preventDefault;
    $('.mr-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.mr', function(e){
    e.preventDefault;
    $('.mr-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*наролеон(nap)*/
  $(document).on('mouseenter', '.nap', function(e){
    e.preventDefault;
    $('.nap-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.nap', function(e){
    e.preventDefault;
    $('.nap-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*ГРАНОЛА*/
  /*gr1*/
  $(document).on('mouseenter', '.gr1', function(e){
    e.preventDefault;
    $('.gr1-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.gr1', function(e){
    e.preventDefault;
    $('.gr1-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*gr6*/
  $(document).on('mouseenter', '.gr6', function(e){
    e.preventDefault;
    $('.gr6-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.gr6', function(e){
    e.preventDefault;
    $('.gr6-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*ВЫПЕЧКА*/
  /*маджио(maj)*/
  $(document).on('mouseenter', '.maj', function(e){
    e.preventDefault;
    $('.maj-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.maj', function(e){
    e.preventDefault;
    $('.maj-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*круассан с шк и фнд(krsh)*/
  $(document).on('mouseenter', '.krsh', function(e){
    e.preventDefault;
    $('.krsh-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.krsh', function(e){
    e.preventDefault;
    $('.krsh-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })

  /*ПИРОГИ*/
  /*лималина(lmln)*/
  $(document).on('mouseenter', '.lmln', function(e){
    e.preventDefault;
    $('.lmln-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.lmln', function(e){
    e.preventDefault;
    $('.lmln-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })
  /*шоколадный(shok)*/


  $(document).on('mouseenter', '.shok', function(e){
    e.preventDefault;
    $('.shok-t').addClass('menu__side-active');
    $('.menu__side').addClass('menu__side-active');
    $('.menu').addClass('menu__active');
  })

  $(document).on('mouseleave', '.shok', function(e){
    e.preventDefault;
    $('.shok-t').removeClass('menu__side-active');
    $('.menu__side').removeClass('menu__side-active');
    $('.menu').removeClass('menu__active');
  })


})



require('../../less/pages/furrytail.less');
require('jay-fullpage.js');
let $fullpage = $('#fullpage');
let $sections = $fullpage.find('.section');

$fullpage.fullpage({
  scrollingSpeed: 1000,
  anchors:['furlosophy', 'byebyefur', 'fooddict',' scratcher', 'pills', 'addiction', 'aboot', 'contact'],
  afterLoad: function(anchorLinkk, index){
    $sections.removeClass('transition-active');
    setTimeout(function(){
      $sections.eq(index-1).addClass('transition-active');
    }, 50);
  }
});

$('.first-netxt').click(function(){
  $fullpage.fullpage.moveSectionDown();
});

$('.js-nav a').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});


$('.swiper-btns').on('click', 'i', function() {
  let $swiper = $(this).parent().prev();
  let position = $(this).hasClass('cd-icon-arrow-left') ? '+' : '-';
  let $swiperActive = $swiper.find('.swiper-slide.active');
  let index = $swiperActive.index();

  if(position == '+' && index == 0) {
    return;
  }
  if(position == '-' && index == 2) {
    return;
  }
  
  let width = $swiperActive.width() - ($swiper.width() - $swiperActive.width() - 40) ;
  $swiper.find('.swiper-wrapper').animate({marginLeft: `${position}=${width}`}, 600, 'swing');
  $swiperActive.removeClass('active');
  $(this).hasClass('cd-icon-arrow-left') ? $swiperActive.prev().addClass('active') : $swiperActive.next().addClass('active');
});
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
  $('.js-nav a').removeClass('active');
  $(this).addClass('active');
});


$('.swiper-btns').on('click', 'i', function() {
  let $swiper = $(this).parent().prev();
  let number = $swiper.find('.swiper-slide').length;
  let $swiperActive = $swiper.find('.swiper-slide.active');
  let $nextSlide = $(this).hasClass('cd-icon-arrow-left') ?  $swiperActive.prev() : $swiperActive.next();
  if($nextSlide.length == 0) {
    return;
  }
  if ($nextSlide.length == 0) {
    $nextSlide = $(this).hasClass('cd-icon-arrow-left') ? $swiper.find('.swiper-slide').eq(number-1): $swiper.find('.swiper-slide').eq(0);
  }
  let left = 0;
  switch ($nextSlide.index() + 1) {
  case 1:
    break;
  case number:
    left = $nextSlide.position().left - ($swiper.width() - $nextSlide.width() + 40);
    break;
  default:
    left = $nextSlide.position().left - ($swiper.width() - $nextSlide.width() + 40) / 2;
    break;
  }

  $swiper.find('.swiper-wrapper').animate({marginLeft: `-${left}`}, 600, 'swing');
  $swiperActive.removeClass('active');
  $nextSlide.addClass('active');

  let $section = $(this).closest('.section');
  $section.removeClass('transition-active');
   
  setTimeout(function() {
    $section.find('.title').html($nextSlide.data('title'));
    $section.find('.description').html($nextSlide.data('description'));
    $section.find('.sub-description').html($nextSlide.data('subDescription'));
    $section.addClass('transition-active');
  }, 800);
});
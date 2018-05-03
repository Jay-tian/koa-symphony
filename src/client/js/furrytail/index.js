require('../../less/pages/furrytail.less');
require('swiper/dist/css/swiper.min.css');
require('jay-fullpage.js');
const Swiper = require('swiper/dist/js/swiper.js');
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

new Swiper('#test', {
  loop : true,
  slidesPerView: 'auto',
});
  
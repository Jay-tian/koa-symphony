require('../../less/pages/furrytail.less');
//require('swiper/dist/css/swiper.min.css');
require('jay-fullpage.js');
// const Swiper = require('swiper').default;
let $fullpage = $('#fullpage');

let $sections = $fullpage.find('.section');

$fullpage.fullpage({
  scrollingSpeed: 1000,
  anchors:['furlosophy', 'byebyefur', 'fooddict',' scratcher', 'pills', 'addiction', 'aboot', 'contact'],
  afterLoad: function(anchorLinkk, index){
    setTimeout(function(){
      //$sections.removeClass('transition-active');
      $sections.eq(index-1).addClass('transition-active');
    }, 50);
  }
});

$('.first-netxt').click(function(){
  $fullpage.fullpage.moveSectionDown();
});


// new Swiper('#test', {
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
  
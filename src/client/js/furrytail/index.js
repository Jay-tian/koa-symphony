require('../../less/pages/furrytail.less');
require('jay-fullpage.js');
let $fullpage = $('#fullpage');

$fullpage.fullpage({
  scrollingSpeed: 1000,
  anchors:['furlosophy', 'byebyefur', 'fooddict',' scratcher', 'pills', 'addiction', 'aboot', 'contact']
});

$('.first-netxt').click(function(){
  $fullpage.fullpage.moveSectionDown();
});
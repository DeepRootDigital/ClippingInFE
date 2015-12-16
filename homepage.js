$(document).ready(function () {

$('#scale').mouseover( function () {
  $('.blog-runner').css({"background-size":"120% 120%"});  
});
$('#scale').mouseout( function () {
  $('.blog-runner').css({"background-size":"100% 100%"}); 

});

});
var main = function() {
  
  $('#top-text').keyup(function(){
  	var topText = $(this).val();
    $('.top-caption').text(topText);
  });
 
  $('#bottom-text').keyup(function(){
  	var btmText = $(this).val();
    $('.bottom-caption').text(btmText);
  });
  
  $('#image-url').keyup(function(){
  	var img = $(this).val();
    $('#meme').attr('src', image);
  });
  
}
 
$(document).ready(main);
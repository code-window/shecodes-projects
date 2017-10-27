$(document).ready(function(){

//////////////////////////Home Page/////////////////////////////////////////


//make the cover photo able on hover and disable on exit from the div:  
//$('#wrapper:not(.not-disable)')--לואשל****


//when language is selected:
$('#langs ul li').click(function(){
	$(this).find('img').toggleClass('selectedLang');
});


//scroling navbar function:
setBindings();



//////////////////////////Gallery Page/////////////////////////////////////////
/*$('.mySlides').hide();
$('.mySlides:first').show();*/


$('#navbar ul li a').click(function(){
	for (var i=0; i<$('#navbar ul li a').length;i++){
		
		if($(this).attr('href').substring(0,8) =='gallery2'){

			//$('#gallery-place-holder').addClass('changingWrapper');
			//alert($(this).attr('href').substring(0,8));
			$('#wrapper').css('background', 'url(images/right_arrow.png)');
			//$('#wrapper').css('backgroundColor','grey');
			return false;
		}
    }

});

$('.mySlides').click(function(){

	$(this).toggleClass('resize');
	$(this).siblings().toggleClass('IsHided');

});


});

function setBindings(){
	$("#navbar ul li a").click(function(e){
		e.preventDefault();
		var sectionId = 'wrapper-' + e.currentTarget.Id ;
		alert(sectionId);

	});

};

/* var slideIndex = 1;
 showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	     x[i].style.display = "none";  
	  }
  x[slideIndex-1].style.display = "block";  
}*/

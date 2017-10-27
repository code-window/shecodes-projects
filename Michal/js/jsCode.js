var sliders = $('.mySlides');

$(document).ready(function(){

		$('.btn-left, .btn-right, .close-btn').hide();

		//when language is selected:
		$('#langs ul li').click(function(){
			$(this).find('img').addClass('selectedLang');
		});


		//scroling navbar function:
		setBindings();

		//resize gallery image:
		$('.mySlides').click(function(){

			$('.btn-left, .btn-right ,.close-btn').show();
			sliders.hide();
			$('#slider').attr('src', $(this)[0].src);
            $('#slider').fadeIn();	
		});


		 $('.btn-right').click(function(){

			var slider_len = $('#slider')[0].src.length;
			var nextSlider= $('#slider')[0].src.substring(slider_len-4, slider_len-5);
		 	showNext(nextSlider);

		 });

 		 $('.btn-left').click(function(){

			var slider_len = $('#slider')[0].src.length;
			var nextSlider= $('#slider')[0].src.substring(slider_len-4, slider_len-5);

		 	showPervious(nextSlider);

		 });

 		 $('.close-btn').click(function(){
 		 	$('#slider').fadeOut();
 		 	$('.btn-left, .btn-right ,.close-btn').fadeOut();
 		 	sliders.show();
		 });

 		///contact page animation:

     	var moveForce = 50; // max popup movement in pixels
		var rotateForce = 50; // max popup rotation in deg

		$('#contactSec div:nth-child(2)').mousemove(function(e) {
		    var docX = $(document).width();
		    var docY = $(document).height();
		    
		    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
		    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
		    
		    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
		    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
		    
		    $('#contactSec div:nth-child(2)')
		        .css('left', moveX+'px')
		        .css('top', moveY+'px')
		        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
		});
});

function showNext(sliderNo){

	console.log(sliderNo);
	if(sliderNo==sliders.length){
		sliderNo=0; 
	}
/*	else if(sliderNo==0){
		sliderNo = sliders.length;
	}*/

	$('#slider').attr('src', 'file:///C:/Users/micha/Desktop/She_codes_project/13.04.17/img/slider'+ (Number(sliderNo)+1)+'.jpg');
}

function showPervious(sliderNo){

	console.log(sliderNo);
	if(sliderNo==sliders.length){
		sliderNo=0; 
	}else if(sliderNo==1){
		sliderNo = sliders.length;
	}

	$('#slider').attr('src', 'file:///C:/Users/micha/Desktop/She_codes_project/13.04.17/img/slider'+ (Number(sliderNo)-1)+'.jpg');
}

function setBindings(){
	$("#navbar ul li a").click(function(e){
		e.preventDefault();
		var sectionId = 'wrapper-' + e.currentTarget.id ;


		$('html body').animate({
			scrollTop: $("#"+ sectionId).offset().top },
			1000)
	})
}

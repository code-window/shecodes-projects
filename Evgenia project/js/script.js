var imagecount = 1,
	total = 3;

function slide(x) {
	//strict mode on
	"use strict";
	var Image = document.getElementById('img');
	imagecount += x;
	if(imagecount > total) {
		imagecount = 1;
	}
	if(imagecount < 1) {
		imagecount = total;
	}
	Image.src = "img/cover" + imagecount + ".jpg";
}



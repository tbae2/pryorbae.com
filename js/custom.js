

function jumboChange(page) {
	

	switch (page)
	{
		case "home" :
		$(".jumbotron").css({ "background-image": "url('/img/earlyShrimp.jpg')"}).delay(50).animate({opacity: 1}, 600);
		break;
		case "mtb" :
		$(".jumbotron").css({ "background-image": "url('/img/mtb.jpg')"}).delay(250).animate({opacity: 1}, 600);
		break;
	
	}

}
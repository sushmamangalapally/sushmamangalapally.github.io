
function about(){	
	//alert("About Me!");

	document.getElementById('img1').style.backgroundImage="url(backgrimges/IMG_45721.jpg)"; // specify the image path here
	var intro1 = document.getElementById('name');
	intro1.innerHTML = "About Me";
	/*var image_x = document.getElementById('port');
	image_x.parentNode.removeChild(image_x); */
	$("#port").hide();
	$('#details').hide();
    $('#moredetails').load('about.html');
	//document.getElementById('moredetails').innerHTML = "<p>I recently graduated from SCU with a degree in computer science. I am interested in front-end development. </p>";


}

function projects(){	
	//alert("About Me!");
	document.getElementById('img1').style.backgroundImage="url(backgrimges/IMG_0509.jpg)"; // specify the image path here
	var intro2 = document.getElementById('name');
	intro2.innerHTML = "Projects";
	$("#port").hide();
	$('#details').hide();
	$('#moredetails').load('projects.html');
}

function resume(){	
	//alert("About Me!");
	document.getElementById('img1').style.backgroundImage="url(backgrimges/IMG_08541.jpg)"; // specify the image path here
	var intro2 = document.getElementById('name');
	intro2.innerHTML = "Resume";
	$("#port").hide();
	$('#details').hide();
	document.getElementById('moredetails').style.padding = "0 100px";
	document.getElementById('moredetails').innerHTML = "<embed id='pdf' src='Resume_Front-End_public.pdf' width='100%' height='890px'/>";
}

function contact(){	
	//alert("About Me!");
	document.getElementById('img1').style.backgroundImage="url(backgrimges/IMG_09531.jpg)"; // specify the image path here
	var intro2 = document.getElementById('name');
	intro2.innerHTML = "Contact";
	$("#port").hide();
	$('#details').hide();
	document.getElementById('moredetails').innerHTML = "<h1 id='email'><a href='mailto:sushma.m812@gmail.com'>sushma.m812@gmail.com</a></h1>";
}
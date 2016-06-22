/* ===============================================
	We do not want to see the goto-top-arrow until
	user has scrolled a minimum number of pixels
   ===============================================*/

window.onscroll = function() {
	const minScrl = 200; // px 

	if (document.body.scrollTop > minScrl || document.documentElement.scrollTop > minScrl) {
		document.getElementById("nav__gotoTop").style.visibility = "visible";
	} 
	else {
		document.getElementById("nav__gotoTop").style.visibility = "hidden";
	}
};

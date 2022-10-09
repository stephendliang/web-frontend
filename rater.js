var meanMethod = 0


var bn = document.getElementById('button-notifications');
var du = document.getElementById('dropdown-user');
var bu = document.getElementById('button-user');
var sort = document.getElementById('sort-by');
var sortDD = document.getElementById('sort-dropdown');
var showIm = document.getElementById('show-images');
var secIm = document.getElementById('image-sec');


bu.addEventListener("click", function() {
	if (du.style.display !== "block") {
		du.style.display = "block"
	} else {
		du.style.display = "none"
	}
});


bn.addEventListener("click", function() {
	if (du.style.display !== "block") {
		du.style.display = "block"
	} else {
		du.style.display = "none"
	}
});


sort.addEventListener("click", function() {
	console.log('sex')
	if (sortDD.style.display !== "block") {
		sortDD.style.display = "block"
	} else {
		sortDD.style.display = "none"
	}
});

showIm.addEventListener("click", function() {
		secIm.style.display = "flex"
});




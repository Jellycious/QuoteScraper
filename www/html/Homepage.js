$(document).ready(function () {
	$('#credits').fadeOut(1000);

});

function openNav() {
	document.getElementById("navMenu").style.width = "250px";
	document.getElementById("navMenu").style.left = "0px";
	document.getElementById("main").style.marginLeft = "250px";
	$('.navButton').delay(500).toggle("slide");
}

function closeNav() {
	document.getElementById("navMenu").style.width = "0px";
	document.getElementById("navMenu").style.left = "-3px";
	document.getElementById("main").style.marginLeft = "0";
	$('.navButton').delay(500).toggle("slide");
}
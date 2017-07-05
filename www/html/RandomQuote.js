//Script For Displaying and getting random quote.
$(document).ready(function () {
	$('#quote').slideUp(0);
	getQuote();
});

function getQuote() {
	var xmlHttp = createXmlHttpRequestObject();

	xmlHttp.onload = function () {
		$showQuote(this.responseText);
	};

	xmlHttp.open("GET", "get_random_quote.php");
	xmlHttp.send();
}

function createXmlHttpRequestObject() {
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}

var $showQuote = function (response) {

	var quote = response.split("//")[0];
	var author = response.split("//")[1];
	$('#quoteWrapper').css("display","inline-block");
	$('#quoteText').html('"'+quote+'"');
	$('#quoteAuthor').html("- "+author);
	$('#quote').slideDown(1000);
	$('#quoteAuthor').css("opacity","0")
	$('#quoteAuthor').delay(250).animate({opacity: "1"},2000);
	$('#quote').delay(12000 + (quote.length/6)*400).slideUp(1000);
	setTimeout(getQuote,12000 + (quote.length/6)*400+1000);
}

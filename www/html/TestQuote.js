//Script For Displaying and getting random quote.
$(document).ready(function () {
	$('#quote').slideUp(0);
	getQuote();
});

function $showQuote(response) {
	var quote = response.split("//")[0];
	var author = response.split("//")[1];
	$('#quoteText').html('"'+quote+'"');
	$('#quoteAuthor').html("- "+author);
	$('#quote').slideDown(1000);
	$('#quoteAuthor').css("opacity","0")
	$('#quoteAuthor').delay(250).animate({opacity: "1"},2000);
	$('#quote').delay(2000 + (quote.length/6)*400).slideUp(1000);
	setTimeout(getQuote,2000 + (quote.length/6)*400+1000);
}

function getQuote() {
	var quote = "short quote//jelly";
	$('#quoteWrapper').css("display","none");
	$showQuote(quote);
}




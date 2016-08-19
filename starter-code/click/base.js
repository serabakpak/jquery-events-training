console.log("Sanity Check: JS is working!");

$(document).ready(function(){ 
	$('span').click(function(){
		var listItem = $(this).text();
		$('ul').append("<li>" + listItem + "</li>");
	});
})



console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  

  $('.add').change(function(){
  	var leftNum = $('#left').val();
  	var rightNum = $('#right').val();
  	if (leftNum !== "" && rightNum !== "") {
  		$('#total').val(parseInt(leftNum) + parseInt(rightNum));
  	}
  });
})

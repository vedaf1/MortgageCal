$('#calculate').click(function(){
	var original = $('#original').val();
	var value = $('input[customRadio]:checked').val();
	$('#result').html(original+value);
});
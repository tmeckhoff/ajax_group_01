$(document).ready(function(){
	
$('button').on('click', function(event) {
	event.preventDefault();
	
	$.ajax('insert.html', {
		success: function (response){
			$('body').append(response)
			
		},
		error: function(){
			alert("Didn\'t work!");
		}
	});
	});

	});

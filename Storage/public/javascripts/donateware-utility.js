$(document).ready(function() {
	$('#mainSearchResults').hide();
	$('#mainSearchPanel form').submit(function(e) {
		e.preventDefault();
		$('#mainSearchResults').show();
	});

/*	$('#dUploadForm').submit(function(e)) {
		$('#dUploadForm').append("<h1>Is Working!</h1>");
	}
*/
});
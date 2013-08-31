$(document).ready(function() {
	$('#mainSearchResults, #mainUploadForm').hide();
	$('#mainSearchPanel form').submit(function(e) {
		e.preventDefault();
		$('#mainSearchResults').show();
		$('#dgitHubNote').css('margin-top', '-1.7%');
	});
	$('#uploadButton').click(function(e) {
		e.preventDefault();
		$('#mainSearchPanel, #mainSearchResults').hide();
		$('#mainUploadForm').show();
	});

	var today = new Date();
    var BigDay = new Date("September 09, 2013");
    var msPerDay = 24 * 60 * 60 * 1000 ;
    var timeLeft = (BigDay.getTime() - today.getTime());
    var e_daysLeft = timeLeft / msPerDay;
    var daysLeft = Math.floor(e_daysLeft);
      $("#countdown").text("daysLeft");

});
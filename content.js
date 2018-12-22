chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action === "getFilmID") {
	 const container = document.getElementsByClassName('container')[0]
	 sendResponse(container.dataset.id)
 }
 else if( request.action === 'getSeasonID') {
	 const seasonDiv = document.getElementsByClassName('season-item activated')
	 if(typeof(seasonDiv) === 'undefined') 
		 sendResponse('')
	 else {
		sendResponse(seasonDiv[0].dataset.id)
	 }
 }
 else
   sendResponse(''); // Send nothing..
});	
chrome.tabs.getSelected(null, function(tab) {
  // Send a request to the content script.
  chrome.tabs.sendRequest(tab.id, {action: "getFilmID"}, function(response) {
	  document.getElementById('film_id').innerHTML=response
  });
  chrome.tabs.sendRequest(tab.id, {action: "getSeasonID"}, function(response) {
	  document.getElementById('season_id').innerHTML=response
  });
});
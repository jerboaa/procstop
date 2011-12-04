// close the pop-up
function closeMe( page ) {
	var views = chrome.extension.getViews();
      	for (var i = 0; i < views.length; i++) {
		var view = views[i];
		if (view.location.href == page ) {
		view.close();
		break;
		}
	}
}


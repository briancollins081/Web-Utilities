//sets the current clicked menu item active by the use of .active class
//usefull for both bootstrap and other personal uses
var activeMenuItemChanges=function () {
	function stripTrailingSlash(str) {
		if(str.substr(-1)=='/'){
			return str.substr(0, str.length -1);
		}
		return str;
	}
	// for cases where we do not use full url but relative file names in the href of a tags
	function getRelativeFileName(str){
		let page=str.substr(str.lastIndexOf('/')+1);
		if(page.length > 0){
			return page;
		}
		return 'index';
	}

	let url=window.location.pathname;

	let activeLocation=stripTrailingSlash(url);

	let activeFileName=getRelativeFileName(activeLocation);

	$('.nav-item a').each(function() {
		let currentLocation=stripTrailingSlash($(this).attr('href'));
		if(activeFileName==currentLocation){
			$(this).parent().addClass('active');
		}
	});
}
activeMenuItemChanges();
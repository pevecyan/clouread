//Set event functions
$(function() {
	$('.menu-button').on('click', toggleSidebar);
	$('.sidebar-close').on('click', toggleSidebar);
});



function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

//Sidebar
function toggleSidebar(){
	if(isBreakpoint('md')||isBreakpoint('lg')){
		$('.sidebar').toggleClass("sidebar-hidden");
		$('.menu-button').toggleClass("sidebar-hidden");
		$('.content').toggleClass("sidebar-hidden");
	}else{
		$('.sidebar').toggleClass("sidebar-small-show").fade();
	}
}
//Set event functions
$(function() {
	$('.menu-button').on('click', toggleSidebar);
	$('.sidebar-close').on('click', toggleSidebar);
	$( ".love-action, .hate-action" ).bind( "click", function() {
		toggleLoveHate($(this));
	});
	$('.search-button').on('click', searchAction);
	$("#UserMenuItemNewSource, #AddSourceButtonClose").bind("click",  toggleAddSourceModal);
	$(".add-source-category-input").on("change", addSourceCategoryPicked);
	$(".add-source-add-button").on('click', addSourceDone);
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

//Stories
function toggleLoveHate(item){
	
	var storyItem = item.parent().parent().parent().parent()[0];
	var storyId = storyItem.id.split('-')[2];
	var actionType = item[0].className.split(' ')[0].split('-')[0];
	
	switch(actionType){
		case "love":
			var hateClassName = item.parent().parent().children()[1].children[0].className
			item.parent().parent().children()[1].children[0].className = hateClassName.split(' ')[0];
			break;
		case "hate":
			var loveClassName = item.parent().parent().children()[0].children[0].className
			item.parent().parent().children()[0].children[0].className = loveClassName.split(' ')[0];
			break;
	}
	if(item[0].className.split(' ').length == 2){
		item[0].className = item[0].className.split(' ')[0];
	}else{
		item[0].className = item[0].className + " selected";
	}
	
	
	//Server request with storyId and action type (love|hate)
	console.log(storyId+" : "+actionType);
}

//Data events
function loadStories(parameters){
	var newsPanel = $(".news-panel")[0];
	//Testing only
	var stories;
	switch(parameters){
		case "all":
			stories = getAllStories();
			break;
		case "loved":
			stories = getLovedStories();
			break;
		case "hated":
			stories = getHatedStories();
			break;
	}
	console.log(newsPanel);
	for(var i = 0; i< stories.length; i++){
		newsPanel.appendChild(createStoryItemNode(stories[i]));
	}
}


//Search event
function searchAction(){
	var searchInputValue = $(this).parent().parent().children().children()[0].value;
	console.log(searchInputValue);
	window.location ="search.html";
}


//Add new source events
function toggleAddSourceModal(){
	$(".overlay").fadeToggle(200);
}
function addSourceCategoryPicked(){
	var item = $(this)[0];
	if(item.selectedIndex == 0){
		$("#AddSourceCategoryNameInputLabel").removeClass("hidden");
		$("#AddSourceCategoryNameInputContainer").removeClass("hidden");
	}else{
		$("#AddSourceCategoryNameInputLabel").addClass("hidden");
		$("#AddSourceCategoryNameInputContainer").addClass("hidden");
	}
}
function addSourceDone(){
	//Send reqeust to server and update hoem page
	
	//Refresh add source modal
	$(".add-source-url-input")[0].value = "";
	$(".add-source-category-input")[0].selectedIndex = 1;
	$(".add-source-category-name-input")[0].value = "";
	$("#AddSourceCategoryNameInputLabel").addClass("hidden");
	$("#AddSourceCategoryNameInputContainer").addClass("hidden");
	$(".overlay").toggleClass("hidden");
}
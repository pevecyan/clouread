function getAllStories(){
	var stories = new Array();
	stories.push({
		title: "The most popular instrument in Slovenia",
		content:"In Slovenia, the diatonic button accordion is present at almost every social event, especially in the rural areas.",
		love:"loved",
		id:15,
		time: "30 minutes"
	});
	stories.push({
		title:"A small error led to Slovenia’s worst aviation disaster of all time ",
		content:"On the early morning hours of September 1, 1966, Britannia Airways Flight 105 from London Luton was approaching Ljubljana Airport.",
		love:"hated",
		id:16,
		time: "5 hours"
	});
	return stories;
}
function getHatedStories(){
	var hatedStories = new Array();
	var stories = getAllStories();
	for(var i = 0; i < stories.length; i++){
		if(stories[i].love == "hated"){
			hatedStories.push(stories[i]);
		}
	}
	return hatedStories;
}
function getLovedStories(){
	var lovedStories = new Array();
	var stories = getAllStories();
	for(var i = 0; i< stories.length; i++){
		if(stories[i].love == "loved"){
			lovedStories.push(stories[i]);
		}
	}
	return lovedStories;
}

function createStoryItemNode(story){
	var storyItemContainer = document.createElement("div");
	storyItemContainer.className = "story-item-container";
	
	/*Story item start*/
	var storyItem = document.createElement("div");
	storyItem.id="story-item-"+story.id;
	storyItem.className="story-item";
	storyItemContainer.appendChild(storyItem);
	
	/*Story item title container start*/
	var storyItemTitleContainer = document.createElement("div");
	storyItemTitleContainer.className="story-item-title-container";
	storyItem.appendChild(storyItemTitleContainer);
	
	/*Story item title start*/
	var storyItemTitle = document.createElement("h2");
	storyItemTitle.className = "story-item-title";
	storyItemTitleContainer.appendChild(storyItemTitle);
	
	var storyItemTitleText = document.createTextNode(story.title);
	storyItemTitle.appendChild(storyItemTitleText);
	/*Story item title end*/
	
	/*Story item actions start*/
	var storyItemActions = document.createElement("div");
	storyItemActions.className = "story-item-actions";
	storyItemTitleContainer.appendChild(storyItemActions)
	
	var storyItemLoveAction = document.createElement("div");
	storyItemLoveAction.className ="story-item-action";
	storyItemActions.appendChild(storyItemLoveAction);
	
	var loveAction = document.createElement("div");
	if(story.love=="loved"){
		loveAction.className="love-action selected";
	}else{
		loveAction.className="love-action";
	}
	storyItemLoveAction.appendChild(loveAction);
	
	var storyItemHateAction = document.createElement("div");
	storyItemHateAction.className = "story-item-action";
	storyItemActions.appendChild(storyItemHateAction);
	
	var hateAction = document.createElement("div");
	if(story.love=="hated"){
		hateAction.className = "hate-action selected";
	}else{
		hateAction.className ="hate-action";
	}
	storyItemHateAction.appendChild(hateAction);
	/*Story item actions end*/
	/*Story item title container end*/
	
	/*Story item preview start*/
	var storyItemPreview = document.createElement("div");
	storyItemPreview.className ="story-item-preview";
	storyItem.appendChild(storyItemPreview);
	
	var storyItemPreviewParagraph = document.createElement("p");
	storyItemPreview.appendChild(storyItemPreviewParagraph);
	
	var storyItemPreviewParagraphText = document.createTextNode(story.content);
	storyItemPreviewParagraph.appendChild(storyItemPreviewParagraphText);
	/*Story item preview end*/
	
	/*Story item time start*/
	var storyItemTimeBottom = document.createElement("div");
	storyItemTimeBottom.className="story-item-time-bottom";
	storyItem.appendChild(storyItemTimeBottom);
	
	var storyItemTimeBottomText = document.createTextNode(story.time+" ago");
	storyItemTimeBottom.appendChild(storyItemTimeBottomText);
	/*Story item time end*/
	
	return storyItemContainer;
}
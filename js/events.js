//http://lucybain.com/blog/2014/event-bubbling/
(function(){
	'use strict';
	var subHeading = document.getElementsByTagName('h2')[0];
	var header = document.getElementsByTagName('header')[0];
	
//	subHeading.addEventListener('click', function(){
//		console.log('The h2 was Clicked');
//	});
	
	// The below example makes use of event object, which is automatically passed to the event handler to determine which element was clicked.
	// The event object contains a target property that shows which element triggered the event.
	// When the listener is triggered, it doesn't trap the event. The event continues to bubble up through the document, eventually stopping at the body.
	header.addEventListener('click', function(e){
		console.log('The ' + e.target.nodeName + ' was clicked.');
		e.stopPropagation(); // Stops the bubbling
	});
	
	document.addEventListener('click', function(){
		console.log('something was clicked');
	});
	
	var anchor = document.createElement('a');
	anchor.textContent = "Google";
	anchor.setAttribute('href','http://www.google.com');
	anchor.setAttribute('target','_blank');
	document.body.appendChild(anchor);
	
	anchor.addEventListener('click', function(e){
		e.preventDefault();
		console.log('navigation prevented');
	});
	
	function mouseenterHandler(){
		console.log('The mouse is in the header');
	}
	
	header.addEventListener('mouseenter',mouseenterHandler);
	header.removeEventListener('mouseenter', mouseenterHandler);
	
}());
(function(){
	'use strict';
	// Selecting HTML Elements
	console.log(document.getElementById('mainHeading'));
	console.log(document.getElementsByClassName('heading'));
	console.log(document.getElementsByTagName('header'));
	
	var mainHeading = document.getElementById('mainHeading');
	var subHeading = document.getElementsByClassName('heading')[1];
	var para = document.getElementById('paraText');
	
	console.log(mainHeading.id);
	console.log(subHeading.id);
	
	// Manipulating HTML Elements
	mainHeading.id = 'firstHeading';
	console.log(mainHeading.id);
	console.log(document.getElementById('firstHeading'));
	
	console.log(subHeading.className);
	subHeading.classList.add('special');
	subHeading.classList.remove('special');
	console.log(subHeading.classList.contains('special'));
	
	console.log(mainHeading.tagName);
	console.log(para.tagName);
	console.log(mainHeading.nodeType);
	console.log(mainHeading.childNodes[0].nodeType);
	
//	mainHeading.innerHTML = '<em>' + mainHeading.innerHTML + '</em>';
//	mainHeading.outerHTML = '<p>' + mainHeading.innerHTML + '</p>';
	
	subHeading.textContent = 'JavaScript Fundamentals';
	subHeading.setAttribute('contenteditable',true);
	subHeading.removeAttribute('contenteditable');
	console.log(subHeading.hasAttribute('contenteditable'));
	
	var heading = document.getElementsByTagName('header')[0];
	console.log(heading.childNodes.length);
	
	var x, length;
	for(x=0, length = heading.childNodes.length; x < length; x+=1){
		if(heading.childNodes[x].nodeType === 1){
			console.log('I am a ' + heading.childNodes[x].tagName);
		}
	}
	
	console.log(heading.children.length);
	console.log(heading.childNodes[0].nodeName);
	console.log(heading.children[0].nodeName);
	console.log(heading.firstChild.nodeName);
	
	console.log(subHeading.parentNode.nodeName);
	
	console.log(heading.firstChild.nextSibling.nodeName);
	console.log(heading.lastChild.previousSibling.nodeName);
	
	
	
}());

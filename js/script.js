/*
	This is an example of Multiline Comment.
	This is an example of Multiline Comment.
	This is an example of Multiline Comment.
	This is an example of Multiline Comment.
*/

//console.log('Fundamentals of JavaScript');


//	Below is an example of Single Line Comment
// alert('This is an alert box');

var theMeaningOfLife; // undefined 
console.log(theMeaningOfLife);

var firstName = 'Vivekanand',
		lastName = 'Rao',
		age = 35,
		baz, quux;

//console.log('The value of baz and quux is ' + baz + ' and  ' + quux);

//baz = firstName;
//quux = lastName;

//console.log('The value of baz, quux and age is ' + baz + ', ' + quux + ' and ' + age);
//console.log(isNaN(theMeaningOfLife)); // true
//console.log(isNaN(age)); // false

var quotes = '"Hello", said the guard';
//console.log(quotes);

var escaped = '"Oh no you didn\'t", she said';
//console.log(escaped);

var joined = 'JavaScript is ' + " Fun!!!";
//console.log(joined);

var coffeeIngredients = ['water','coffeepowder','sugar','milk'];
//console.log(coffeeIngredients[0]);
//console.log(coffeeIngredients.length);


// An example of object literal syntax.
var addressBook = {
	firstName:"John",
	middleName: "Simon",
	lastName:"Doe",
	streetName:"192 5th Avenue",
	city:"San Francisco",
	state:"California",
	zipCode: 94105,
	country:"USA"
}

//console.log(addressBook.firstName,addressBook.middleName,addressBook.lastName);
//console.log(addressBook.streetName,addressBook.city,addressBook.state,addressBook.zipCode);
//console.log(addressBook.country);

var division = 5 / 2.5;
//console.log(division);
var remainder = 5 % 2.5;
//console.log(remainder);


function getThingsByColor(color){
	var things = {
		red: "a red thing",
		green: "a green thing",
		blue: "a blue thing"
	};
	return things[color] || 'Sorry, no thing of that color exists!!!';
}

//Example of function declaration
function greeting(message){
//	console.log(message);
	return true;
}

// Example of Named Function Expressions
var myOtherGreeting = function myOtherGreeting(){
//	console.log('Function Expression');
}


console.log(hoistedVariable);
var hoistedVariable = 'testing hoist';

//console.log(undeclaredVariable);

(function invokeImmediately(){
	console.log('invoked automatically');
}());


!function alsoInvokedAutomatically(){
	console.log('invoked automatically again');
}();


var globalVariable = 1;
function scopeExample(){
	var localVariable = 2;
	console.log(globalVariable);
	console.log(localVariable);
}
















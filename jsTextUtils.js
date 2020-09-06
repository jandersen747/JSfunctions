// JavaScript Document

/*

 --- Return første tegn i string ---
var s = prompt('');

function first(s) {
	return s[0];
}

document.write(first(s));

*/

/*

 --- Return sidste tegn i string ---
var s = prompt('');

function last(s) {
	return s[s.length-1];
}

document.write("This is the last letter: " + last(s));
*/


/*
var s = prompt('');

function middle(s) {
	return [1-s.lenght-1]
}

document.write(middle(s));
*/

 /* --- return alt pånær sidste og først tegn i string --- */
var s = prompt('');

function middle(s) {
	return s.slice(1, -1);
	
}

document.write(middle(s));




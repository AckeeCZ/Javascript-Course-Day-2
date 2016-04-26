// SCOPE
// ================

// scope hierarchy
(function(){
	var x=1;
	function scope1() {
		var y=2;
		function scope2() {
			var z = 3;
			console.log(x,y,z); // 1,2,3
		}
		console.log(x,y,z); // 1,2,undefined
	}
	console.log(x,y,z); // 1,undefined,undefined
})();
console.log(x,y,z); // undefined,undefined,undefined

// lookup fail
function scoped() {
	x = 1;
}
window.x === 1 // true

// Functions are only creating scope:
function scope() {
	for (var i=0; i<10; i++) {
	    console.log( i );
	}
	for (i=0; i>-12; i--) {
	    console.log( i );
	}
}
console.log(i); // fails


// What can scope do?
function changeX(){
	x = "changed";
}
var x = 2;
changeX();
console.log(x);

function doEvil() {
    console.log(i);
    i = 11; 
}
for (var i=0; i<10; i++) {
    doEvil(); // oops, infinite loop ahead!
}

// Why scope? collision avoidance
// Library 1
var x = 0;
function incr() { x++; }
 // Library 2 (separate file)
var x = 0;
function decr() { x--; } 
// ->
var incr = {function(){
	var x;
	return function(){ x++; }
}}();
var decr = {function(){
	var x;
	return function(){ x++; }
}}();

// Modules
var Library = (function IIFE_MyLibrary() {
	var hiddenNum = 0;
	return { // Public API
		increment: function() {
			return ++hiddenNum;
		}
	};
})();

// Total encapsulation using IEFE (Immediately evoked function expressions)
var a = 2;
(function foo(){ // <-- 
    var a = 3;
    console.log( a ); // 3
})(); // <-- 
console.log( a ); // 2

// why (function ..), not function?
// ---- wrong:
function() {
}() // -> unexpected "(" in statement mode (the first one - function(){} not valid in stmt mode)
// function keyword in stmt mode cannot be used for expr statement => function expressions cannot be used in stmt mode
// ---- wrong:
function x() {
// function declaration
}() // -> unexpected ")" after ( in statement mode - () is not valid statement
// --- correct:
(function x() { // x can be ommited
	// in expression mode this will be function expression followed by execution
})()

// just another quirk:
// iife concatenation and automatic semicolon insertion:
(function () {}())
(function () {}()) 
// -> TypeError: (intermediate value)(...) is not a function(…)
// second line considered function call, but first function doesnt return function
(function () {}());
(function () {}()) 
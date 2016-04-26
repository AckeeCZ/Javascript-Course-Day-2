// HOISTING
// ================

// what will do this code?
// expected error of undefined?
y=2; z=3;
x();
function x() { console.log(y); }
console.log(z);
var y = 4;
// 2, 3
// because hoisted into this:
function x(){console.log(y);}
var y; y=2; z=3;
x();
console.log(z);
y = 4;


// variable vs. function declarations:
console.log(x);
y();
var x = 2;
function y() {console.log(3)};
// undefined, 3
// because after hoisting:
var x;
function y() {console.log(3)};
console.log(x);
y();
x = 2;


// function declaration vs. function expression
x();
function x() { console.log(1); }
var x = function() { console.log(2); }
// 2

function x() { console.log(1); }
x();
var x = function() { console.log(2); }
// 1


// hoisting inside condition
// happens still
foo(); // "b"
var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}
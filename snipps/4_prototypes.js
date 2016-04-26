// what are primitive wrappers?
Object
Function
Number
// when are implementation of methods on objects?
var obj = new Object();
var fnc = function(){};
var  num = new Number(){};
// at their prototype (or therir prototype's prototype)
obj.__proto__
// obj vas created by Object function
// we call that function a constructor
// Constructor is any function that sets this
obj.constructor === Object

// example:
// constructor:
function Person(name) {
	this.name = name;
}
Person.xname="hallo";
Person.prototype.getName = function() {
	return this.name;
}
var bibr = new Person("Bibr");
bibr.__proto__
bibr.__proto__.__proto__
Person.prototype === bibr.__proto__ // true

// this allows me to change methods on the fly
Person.prototype.newMethod = function() {}
Person.prototype.newClassProp = 123

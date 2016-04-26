// Wrong way: the getName is allocated each time:
function createPerson(name) {
	return {
		name: "Jacob",
		address: "...",
		getName: function() {
			// 
		};
	};
}

// also wrong way: methods dont see the properties
var Person = {
	name: "Jacob",
	address: "..."
};
var MethodsPerson = {
	method: this.name
};
man1.__proto__ = man2;


new Person("John");


function Person(name) {
	this.name = name;
}
Person.prototype.getName = function() {
	return this.name;
}

var jacob = new Person("Jacob");
console.log(jacob.getName());

// ------------------
// the correct inheritance implementation:
function extnd(child, parent) {
 var F= function(){};
 F.prototype = parent.prototype;
 child.prototype = new F();
 child.prototype._superClass = parent
 child.prototype.constructor = child;
};

function Clown(name) {
 this._superClass(name);
 this.job = "clown";
}
extnd(Clown, Person);

Clown.prototype.getJob = function() {
	return this.job;
}

// ------------------

var ordinaryPerson = new Person("John");
console.log(ordinaryPerson.getName());
console.log(ordinaryPerson.job);
var funnyMan = new Clown("Funny Man");
console.log(funnyMan.getName());
console.log(funnyMan.job);

// ----------------

// "this" keyword quirks:
var obj = {
	a:1,
	method: function(){console.log(this.a);}
}
obj.method(); // 1
var tmpMethod = obj.method;
tmpMethod(); // undefined

tmpMethod.call(obj);

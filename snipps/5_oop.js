// the only right inheritance implementation:
var extends = function(child, parent) {
    var F = function(){};
    F.prototype = parent.prototype;
    child.prototype = new F();
}; 
extends(Employee, Person);

// this quirks:
var obj = {
	a:1,
	method: function(){console.log(this.a);}
}
obj.method(); // 1
var tmpMethod = obj.method;
tmpMethod(); // undefined

tmpMethod.call(obj);

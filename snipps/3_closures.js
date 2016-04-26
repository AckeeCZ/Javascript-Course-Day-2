// when is message deallocated?
// i thought at the end of the block...
function wait(message) {
    setTimeout( function timer(){
        console.log( message );
    }, 1000 );
}
wait( "Hello, closure!" );
// not in js. the timer function is still there and it has reference on message


// jquery closure:
function createCounter() {
    var cnt = 0;
    $("#counter").click( function(){
        cnt++;
        console.log(cnt);
    });
}
createCounter();

// efficiency & memory management:
function Datacentre() {
    var BigData1 = {...}; // 1GB
    var BigData2 = {...}; // 2GB
    $("#counter").click( function(){
    	console.log(BigData1);
    });
}
Datacentre();
// How much data does your app takes?
// only 1GB - BigData1

// infamous for in loop
for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}
// 6 6 6 6 6
// need to conserve the i
// how? by creating own scope for each iteration
for (var i=1; i<=5; i++) {
	(function(){
	    setTimeout( function timer(){
	        console.log( i );
	    }, i*1000 );
	})();
}
// why does nothing? the i variable is still in outer scope
for (var i=1; i<=5; i++) {
	(function(){
		var j = i;
	    setTimeout( function timer(){
	        console.log( j );
	    }, j*1000 );
	})();
}
// or more simply:

for (var i=1; i<=5; i++) {
	(function(i){
	    setTimeout( function timer(){
	        console.log( i );
	    }, i*1000 );
	})();
}

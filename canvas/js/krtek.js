(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.krtek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//HINT change and add some code here :)

		//this.addEventListener("click", fl_MouseClickHandler.bind(this));
		//this.play();

	};

    this.frame_32 = function() {
    };

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(1));

    // OBAL
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("rgba(63,63,63,0.008)").ss(1,1,1).p("ASNAAQAAHilWFVQlVFWniAAQnhAAlVlWQlWlVAAniQAAnhFWlVQFVlVHhAAQHiAAFVFVQFWFVAAHhg");
    this.shape.setTransform(361.5,212.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("rgba(141,115,92,0.008)").s().p("As3M3QlUlVgBniQABnhFUlVQFWlVHhgBQHiABFVFVQFVFVAAHhQAAHilVFVQlVFVniAAQnhAAlWlVg");
    this.shape_1.setTransform(361.5,212.5);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(32));

    // Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBBIADgYIgDgTQABgEACgEQADgHAFAAIABACIgEAGIgCAGIACAUIgCAYQAAADACADIgBACIgCABQgFgCAAgHgAAHgqIAFgOQAGgOAGgDQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgDAGQgFAGgCAEQgCAKgEAFQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(264.6,236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6E1E9").s().p("AgiBXQgEgDAAgKIABgKIAAgoQABgLAOgSQAPgXADgIIAEgQQABgJAHgGQAMgMAFgEQAOgJAAAQQAAAHgbAkQgFAOgHAZQgEAKgKAgQgHAbgHAMgAghAUQgCAEAAAEIACATIgCAYQAAAHAEACIADgBIABgCQgDgDAAgDIADgYIgDgUIADgGIADgGIgBgCQgFAAgDAHgAACgyIgCAOQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAEgFADgKQABgEAFgGIAEgGQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgHADgGAOg");
	this.shape_1.setTransform(265.5,235.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgICJQgEgHAAgDIAAgBIgBgGIAAgNQgCgKAAgPIAAgPIAGgUQABACABAGIgDAgQAAAZAKAOIAAAAIAAACQADAGADAAQADAAADgDIABACIgDAIQgBAEgGAAQgFgBgGgHgAgIB0IABAAIADALIAAABIABABIAAgBIgEgMIgBgCIAAACgAgKgzIAAgGQABgEABgGIABgMQgBgEAFgSQACgIAFgNIALgWIABAEIgHARQgIAQgBALIAAAWQAAAFgDAHIgEALIgBAAg");
	this.shape_2.setTransform(256.9,256.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6E1E9").s().p("AgxCqIgEglQAAgVABgDIANgiIAAhlQAAgkAlg1IALgVQAHgOgCgJQgCgOALgRQAMgRAKAFIAIAIIABAIQAAAGgDAIIgHAQQgHANACAQQABALgFASIgJAdIgIAdQgFARABANIgDAZIgCAfQAAAMAEAZQAFAZAAAMQgQBUgYAAQgUAAgHgigAgoB3IgBAOQAAAQADAKIgBAMIABAHIAAAAQAAAEAEAGQAGAIAHAAQAGAAACgDIACgIIgBgCQgDADgDAAQgDAAgEgHIgBgBIAAAAQgKgOAAgZIADghQAAgFgCgCIgFAUgAgUhHQgHANgCAJQgFASABAEIgBALQAAAHgCAEIAAAFIACAAIABAAIAEgKQADgHAAgFIADgXQAAgKAIgRIAHgQIgBgEIgLAVgAgdC0IAAgCIgEgKIAFAMIgBAAIAAAAgAgiCoIAAgCIABACg");
	this.shape_3.setTransform(259.4,251.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcDgIgEgcIAAgrQgDgGAAgHQABgEACgCQAFALAFAkIgDATQAAAIAHAQQAHAPADADQAIABABABIABACQAAAEgGAAQgRAAgHgagAgjAzIAAgbIADgkQADgVAEgMQADAHAAAUQAAASgCAIQgDAKgCAhIgDAAgAAIiwIAAgFQAAgIAFgJQAFgKAAgIIACgRQADgMAKgEQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIgFAJIgEAKIgDATQgEAIgDARQgCALgDAAQgDAAgBgEg");
	this.shape_4.setTransform(258.9,258.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A6E1E9").s().p("AgTEHQgegQAAhrQAAhRABgPQACgbANhaQABgJAJgRQAKgUACgJIAGgZQADgRADgMIAGgaIAHgcQAHgPANgIQAQgJgBAWIgSA9QgUBBgIAcQgCANgBA7IgBBQQAAAvALAhQAMAiAAAlQAAApgPALgAgnCPQABAHACAHIAAArIAFAcQAGAaARAAQAIAAAAgEIgBgCQgDgCgIAAQgCgDgIgPQgHgRAAgIIADgTQgFgkgFgLQgCACgBAEgAgkgIIgDAkIAAAaIADABIADgBQACghADgKQACgHAAgSQAAgVgDgHQgEAMgDAWgAAQjmIgCASQAAAHgEAKQgGAKAAAHIAAAFQABAFADAAQADAAACgMQADgRAEgIIADgTIAFgKIAEgIQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgKAFgEALg");
	this.shape_5.setTransform(259.3,257.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAE5QgMgGgDgMQgBgEAAgQIABgYIAHgXIAAgYQAAgPAGgIIACAOIAAAKQAAAMgDAaQgEAZAAALQgBAXATADIABACIgGAGgAgOA4IAAgVIgDgUIgBgPIACgZIgBgbQgBgRADgCQAFAUABAGIABAUIAAAPIgDALIAFAtIABALQAAAHgCAGQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgFAAgBgPgAgMjUIgBgDIAAgFQAAgEAJgbIAEgNIAPgwIACAAIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIABABQABAFgFAIIgGALIgBAMQgCAIgCAEQgEAIgCAOIgFAYQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_6.setTransform(256.5,273.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A6E1E9").s().p("AgVF2QgegJAAghQAAgRAFgzQAFgzAAgUQAAgXgFgSQgFgSAAgOIAFgyIgFhaQAAg+AOhNQAAAAABABQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAFgXQADgOAFgJQACgEACgHIABgMIAGgMQAFgHgBgFIgBgBQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgEIgCAAIgRAwIgEAMIAGgcQAgiNAqgFIABAHQAAAHgPAbQgRAegDAQQgDAMgBAaQgBAbgBANQgDANgLAbQgMAbgCAMQgGAegBALIAAAjQAAAqAIAhIAQBYQADAXAIBFIAGBIQAAA9gXAngAghEAIAAAYIgHAYIgBAYQAAAPABAFQADALANAHIAHAAIAGgGIgBgCQgVgDABgXQAAgMAEgYQAEgaAAgMIAAgKIgDgOQgGAIAAAOgAgqAAIABAaIgCAbIABAOIADAVIAAAVQABAPAFAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQACgGAAgIIgBgKIgFgtIADgOIAAgOIgBgUQgBgGgFgSQgDACABAQg");
	this.shape_7.setTransform(259,268.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNFmQgIgJgDgJQgCgHgBgKIABgGIAAgoQADgEgBgFIgCgKQABgGACgCQACACACALIABAPIgCAXIABANIACAOIAAAOQABAKAHAAQADAAADgCQACgCACAAIAEAAIAAACQAAAEgLAEgAgjgJQgEgTAAgFQAAgGACgHIADgMIAAgOQAAgHAIgBIAAACQAAAHgHAjQAAAHADAMQACAMAAAFIAAAIIgCABIgFgSgAAHkeIgBgCQAAgLAMgZQALgUAIgNQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABQgJAZgHAIIAAABIgDAFQgDAFgCAIQgCAMgFAFg");
	this.shape_8.setTransform(258.1,268.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A6E1E9").s().p("AgZFyQgSgOAAgZQADgcAAgMIgChdQgBgTAAgjIABglIgEhQIgEg+QAAgWAEgOQAEgNAAgnQAAgRAHgZQAJgcADgNQAVhYACgKQAUg6AcgHIACAAQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAFgTAtQgUAugBASQgCATgMAmQgMAkAAASIAFAtIgFBCIAIBIIgFBEQAAAkAMAqQANAsAABHQAAAcgBAJQgFAbgRACgAgfEDIABAKQABAGgCADIAAAoIgBAGQAAAKACAIQADAIAIAJIAIAAQALgEAAgEIAAgBIgDgBQgDAAgDACQgCACgDAAQgIAAgBgKIABgOIgCgOIgCgNIACgXIgBgPQgCgLgCgBQgCACAAAFgAgohHIABAOIgEANQgCAGAAAGQAAAGAEATIAFARIACgBIAAgJQAAgEgCgMQgDgMAAgHQAIgjAAgHIgBgCQgIABAAAHgAANlCQgMAYAAALIAAACIACABQAFgFADgMQABgIADgFIgCAHIAGgMQAGgJAJgZQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgJANgKAVg");
	this.shape_9.setTransform(258.6,268.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKExQgFgEgHgUQgKgUAAgIIABgNQADgLAFAAIABACIgCAHQgCAHAAAFQAAADAGAUQAIAUADAFIAFAAIAEAEIgBADgAgUAaQgCgEAAgLQAFgnAAgXIAAgBQAFgDABAHIAAAJIAEAAIABACQgCADgFASQgEARAAAIQAAAGAEAHQADAHAAALIgCAIIgBAAQgDgOgEgIgAAFjRQAAgMAEgQQAEgPAAgHIgCgXIAAgKIAKgMIACABIAAACIgGAUQAAAFAEANQAAALgMA0IgCABQgCgCAAgIg");
	this.shape_10.setTransform(256,274);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A6E1E9").s().p("AgRFxQgOgVgFgRQgGgRAAgVQAAgLAFg0IAFgzQAAgJgJgeQgJgfAAgNIADhoQAAghABgMQADgVALgbQAHgRABgbIACguQAThvAxhDQAFACAAAGQAAATgNAcQgOAhgDARIgDAwQgBAdgLASQgKATABAdQABAggFAPQgLAbgBAWIgBArQAAArAGAbQAEAZAQA3QAEAPABAXIAAAlQgBAgAEALQAEAMAAARQAAATgCAGQgCAFgOAYgAgjEmIgBANQAAAIAKAVQAJAUAFADIAJAAIABgDIgEgDIgFAAQgDgGgIgTQgIgUAAgEQAAgEACgHIACgIIgBgBQgFgBgDALgAgpAAIAAACQAAAWgFAqQAAAKACAEQAEAIADAPIABAAIACgIQAAgLgDgHQgEgIAAgGQAAgIAEgTQAFgSACgDIgBgBIgEAAIAAgJQgBgFgDAAIgCAAgAgLjtIAAAKIACAWQAAAHgEAQQgEAPAAAMQAAAJACABIACAAQAMg0AAgMQgEgNAAgFIAFgTIAAgCIgBgBIgKAMg");
	this.shape_11.setTransform(258.4,268.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKFZQgKgFgEgJIgFgQQgDgGAAgJIAAgOQAAgIgCgDIAAgGQAJADAAALIAAAVQABAIAMAOQAMANAAACIgEAEgAglCiIAAgFQAAgFAEgOIADgQIABghQAAgIgIgPQAJgBADAPIABAWIgCAeQgCARAAALIgBACIgCAAIACABIABACIgEADQgEgBgBgFgAgehVIgCgLIAGgTIABgJIAAgIQgBgKADgLQADgNAFABIABACQAAAJgGAhIgFAkIgCABgAAEkhQAAgKAMgUQAJgOAKgLQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIgSAcQgCADgDALQgDAIgGAFQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_12.setTransform(258.4,267.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A6E1E9").s().p("AgkFCQgFgWAAgYIAFgxQAAgIgFgTQgFgTAAgJQAHgoAAgYQgCgxAAgZQAAgOgDgaIgCgeQAAgqAJghQAPg0AGgmQAIg1AIgfQAQgxAcgYIACAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgTA6QgTA7gCAcQgCAigQByQAAAeAFAzIAGBSQACA9ADAWQACAVAAA7IAAAxQgCAqgLAAQgUAAgKglgAggESQACACAAAJIAAAOQAAAJACAGIAGAQQAEAJAJAFIAHAAIACgFQAAgBgKgNQgMgOgBgJIAAgUQgBgLgIgEgAgjBBQAHAPAAAHIgBAiIgCAQQgEAOAAAFIAAAFQABAFAEAAIAEgCIgBgCIgDgBIADgBIABgCQAAgKACgRIACgeIgBgWQgDgOgHAAIgCAAgAgViaQgDALABAJIAAAJIgBAJIgGATIABALIADABIADgBIAFgkQAFghABgJIgBgCIgBAAQgEAAgDAMgAARlAQgLATgBALQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAQAGgFACgHQAEgLACgEIASgcQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgKAKgKAPg");
	this.shape_13.setTransform(258.3,267.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRE4QgFgDgCgIIgBgKIgCgSQAAgIAEgNQAEgPAAgHIAGAAIAAAIQAAAGgDAMQgEAMAAALQAAAFACAHIADANIAJAAQACgCAEAAQABAAACABIABADQAAACgMAEgAgKgaQAAgFgDgJQgCgJAAgGQAAgHACgJQADgJAAgIQgDgNAAgHQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQADAHABAEIABALQAAALgDAHQgCAHAAAIQAAAEACALIADANIgBAJIgDACQgBAAAAgKgAAAjmIAEgTQAFgTADgEQAFgGADgOQACgOADgFQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAMgEAMQgDAMgFAGQgHAFgBAPQgBAOgGAFQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_14.setTransform(257.2,271.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A6E1E9").s().p("AgwFUIAAgWQAAgSADgaQAEgaAAgOQgIhJABgNQAAgRAEgSQAGgWACgZIAFhRIAAiWQADgOAPgiQANghACgSQgBgYAMgbQAMgbATgSQAGACAAAGQAAADgMAhQgLAjAAAQQABARgOAbQgOAcAAAOIAHAqQAAAGgGAYIgEAcIAFBqIgCAgQgBAfAAAQQAAAagFA0IAGA8QAFA6AAAMIAAAbQgFAUgSAAQgaAAgEgVgAglEkQgDANAAAHIACATIABAKQACAHAFAEIAJAAQANgEAAgDIAAgCQgCgBgDAAQgEAAgCACIgJAAIgDgNQgDgHAAgFQAAgLAFgMQADgMAAgGIgBgIIgFAAQgBAHgEAPgAgahEQAAAHACANQAAAIgCAJQgDAJABAHQgBAGADAJQACAGAAAGQAAAJACABIADgCIAAgJIgCgMQgDgKAAgEQAAgIADgHQACgIAAgKIAAgLQgBgFgEgGQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAgAAGj8QgCANgEAHQgCAEgGASIgEAUQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAQAGgFABgPQABgOAFgGQAFgFADgMQADgMABgMQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgDAEgDAPgAAZk/IAAACQAEgFgBgDQgDAFAAABg");
	this.shape_15.setTransform(258.5,267.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggExIgBgnQgBgIADgDQAGAZABAFIgCAXQAAAEAEAKQAFANAFAAQADAAADgDIADABIAAADQAAAEgLAEQgPAAgDgngAgnBEQABgMAMgfQAHgPAAgFIgCgIQgBgHAFgDQAEAGAAAEIAAAHQAAAJgDAHIgJAUIgFARQgCAMgCAGIgCAAQgCgDgBgEgAAEkDQABgGAHgQQAJgPAAgGQAAgPABgHQADgNAMgGQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAFgFAHQgGAIAAAUQgBAHgHANQgIAQgBAGIgGABQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(258,268.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A6E1E9").s().p("AgVFlQgSgFgFgrQgCgQAAguIAHhiQgHhCAAgJQAAgVAHgaQAIgaAAghIABg3QABggAGgWQACgKACgtQADgjAKgTQAGgMAHgvQAGgeAdgRIAEAAQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABIgJAhQgJAeABAKQAAAQgJAWQgJAWAAAMQAAALAEAhIAEAnQAAAQgNBWIgIAtQgHAqgBALQAAATAKAiQAKAhgBAaQgCATAFAkQAEAnAAAQQAAAdgaAdgAgkELIABAoQAEAnAOgBQAMgEAAgEIAAgCIgEgBQgDACgCAAQgFAAgFgMQgFgKAAgFIACgWQAAgFgGgaQgDAEAAAHgAgXgCIACAJQAAAEgIAQQgMAeAAANQAAADACADIACAAQADgFACgNIAEgRIAJgUQAEgHAAgJIAAgHQgBgDgEgHQgEADABAHgAAUlCQgCAGAAAPQAAAHgIAPQgIAPAAAGQAAABAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAFgBQACgGAHgPQAIgOAAgGQABgUAFgJQAGgHAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgLAFgDAOg");
	this.shape_17.setTransform(258.3,268);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEE1QgOgOgBgIQACgJAAgJIgDgOQgDgMAAgJIABgMQABgGAFgFQADADAAACIgFAXQAAAGAIAaQABAEgBAOQACAMAHAAIAKgGQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgMAKgAgRAYQAAgWAEgHIAAguQABgDAAgNQAAgLAEgDQAEACAAALQAAAXgDAvQAAAEgCAKQgDAIABAKIgDABQgDgCAAgJgAAAjkQAGghAAgHIAIgVQAEgOAEgFQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIgKAhQgJAhAAAPIgCABQgDgDAAgCg");
	this.shape_18.setTransform(256.8,271.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6E1E9").s().p("AgaFmQgQgGgFgrQgEgXAAgXQAAgPAFggQAFggAAgQQgIhNAAgMQAAgLAHgoIAGgpIgFgwQAAgTAGgLQAHgMACgjQADgogBgjQAGgIAShFQANgvAlgUIABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIgTAtQgVA0gFAnQgCALAAAWIgCAiQgBANgEAYQgEASAAAMIAFBTQAAAPgEAMQgDAMAAAPQgBAnAJBQQAKBQgBApQABAYgCAGQgEAOgPASgAgqD+IgBAMQABAJADAMIADAOQAAAJgCAJQABAIANAOIAGAAQAMgKAAgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgMAGQgIAAgBgMQAAgOgBgEQgIgaABgFIAEgYQABgCgDgCQgGAEgBAGgAgggjQABANgCADIAAAsQgDAKAAAVQAAAJACACIADgBQAAgJADgJQACgJAAgFQADgvgBgWQAAgMgDgCQgFADAAALgAgEkBIgHAVQAAAIgGAgQgBACADADIACgBQABgPAJggIAIgiQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgCAGgEANg");
	this.shape_19.setTransform(258.8,267.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdFIIgFgSQgDgLgGgIQgEgFAAgIIAEgoQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIADAFIAAAsQAHALAIAZQACAIANABIAEAAIABACQAAABgEACIgHACQgMAAgFgNgAgqEWIAAAGIABAAIgBgMgAglAFIgCgNQAAgGAHghQAHgkAFgLQAEACAAAJQAAAGgCAEIgFANQgDAHgBAPIgFAWQgDANAEAHQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAANkQQAAgFAHgPIAIgQIAFgSQAEgMAKgCIABACQgLAPgHAVIgNAkIgBABQgDgDAAgEg");
	this.shape_20.setTransform(258.9,266.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A6E1E9").s().p("AgRFfQgRgGgMgdQgLgaAAgRQAAgMACgXQADgXAAgPQAAgaAFgOQAFgOAAgRIgFhcQAAglANg2QANg3gBgxQgBgWAIgbQAIgaALgXQADgFAOgrQALggATgOIAHAHIgNAkQgOAmgFAZIgPAxQgKAgAAASQAAAKAEAPQADAOAAASQAAAZgIAQQgHAPAAAPQAAALACAGIAAB0QAIAsAABFQAAAGAFAjQAFAiAAALIAAASQgCAMgIAGgAgtETQAAAHAFAGQAGAHADAMIAEASQAFANANAAIAGgCQADgCAAgBIAAgCIgEgBQgMAAgDgJQgIgYgHgMIAAgsIgDgEQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAgAgegyQgGAhAAAGIABANIADABQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQgDgHADgNIAFgWQABgPACgHIAFgNQACgFAAgFQAAgJgDgDQgFAMgIAkgAAklJIgGASIgHAPQgHAPAAAGQAAADACADIACAAIAMgkQAIgWALgOIgBgCQgKACgEAMgAgnEZIgBgGIABgGIAAAMg");
	this.shape_21.setTransform(258.6,267.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSEJIgEgjQAAgCACgDQAFAIABAJIABARQAAAJAGAMQAFALACAAIABgCIAEgCIACAEQAAAJgHgBQgMABgGgjgAgUAWIABgHIgCgMQAAgIACgIQACgJAAgPQAAgHACgEQAEAFAAATQAAAFgCAKIgDAMIADANQAAALgEACQgEgCABgFgAgCjPIACgWQAEgUADgFQACgEADgTQADgPAGgGQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAADgHAUIgBAMQgBAIgDAEQgFAGgBARQgBAQgEAHQgCgCAAgCg");
	this.shape_22.setTransform(257,270.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6E1E9").s().p("AgYFhQghgXAGgzQADgegBgsIgEhvQgBgTAHgcQAGgcAAgIQAAgJgDgRQgFgSAAgKQAAhCAih+QAliNAeAdIACABQAAABAAAAQAAAAAAABQAAAAAAABQABABAAABQgIAFgIAJQgQASgGAWQgDAMgBARIgBAdIgBAeQgCASgDAMQgCALgIAVQgHAQAAALIAFAVQAFATAAATIgHBjQgIBrAABHQAAAWALAXQAJAYAAAQQAAAQgBAEQgCALgMALgAgqENIADAkQAHAiAMAAQAJAAAAgIIgDgFIgDACIgCACQgDAAgFgLQgHgMABgJIgBgRQgCgJgEgHQgDACABACgAgmAAQAAAPgBAJQgCAJAAAKIACALIgCAHQAAAGADACQAFgDAAgLIgDgNIADgOQACgKAAgEQAAgSgEgEQgDADAAAFgAgGjuQgDATgCAEQgDAGgEATIgFAWQABACACADQAFgIABgQQACgQAFgHQADgEABgIIAAgLQAGgVAAgDQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgEAGgDAPg");
	this.shape_23.setTransform(259,266.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUESIgEgfIACgUIAAgLQABgFADgBIACABIAAA2QACAEABAQQACAPAHAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgDACAAIAFABIABACQAAAEgIADQgDADgDAAQgKAAgEgegAgLAlIACgIQAAgNgEgLQgEgKAAgLQAAgNAGgCQABABAAAHQgBAOAFANQAFAPAAAJIgEAJIgDAHQgEgEABgDgAAAjdIAAgJIAFgNQAAgQABgFQABgEAHgRIACgLQACgHAHAAIAAACIgHASQgHATgBAHIgDAVQgCAOAAAJIgDABg");
	this.shape_24.setTransform(256.1,269);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A6E1E9").s().p("AgkFZQgSgXgBgkIABg9QgChOAAgnQAAgPAFgIQAFgLACgZQgCgnAAgRQAAgRAFgoQAFgnAAgUQgChDAXhDQAahOArgJIADAAIAAAEQgGAEgIAIQgPAPgEAYIgFAaIgDAZIgQA0QgJAfAAAUQABAGAGAZQAEAZAAALQAAAKgCAZQgDAZAAAIQAAARADAlIACAtQAAAagCAfQgBAfAAAkIABA+QgBAjgSAZgAguDzIAAAKIgCAUIADAfQAFAfAKAAQACAAAGgDQAHgEAAgDIgBgCIgEgCQgDAAgBADQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBAAQgHAAgCgPQgCgRgBgEIAAg1IgDgCQgDABAAAGgAgpANQAAAKAEAMQAEAMgBAMIgCAIQAAADADAFIAEgIIADgJQAAgJgEgPQgFgOAAgOQAAgGgBgBQgFABAAANgAgHkJIgCAKQgHARgBAFQgBAEAAARIgEAMIAAAKIACAIIACgBQAAgJACgNIAEgWQAAgGAIgTIAEgTIAAgCQgFABgCAHg");
	this.shape_25.setTransform(258.5,265.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQELQgFgOAAgDIAAgXQgBgNAFgHIACACIAAAvQABAEAHAIQAGAHABAFQAAACgEAAQgGAAgGgPgAgaARQAAgNAFgJQAEgKAAgWIAAgHIAGAAIAAAOQAAARgFAJQgFAIAAAYIgDAAQgCgBAAgKgAABjTQAAgYAKgMQAGgFACgNQADgMADgEQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAARgJANQgKAPgCAcIgCABQgDgCAAgFg");
	this.shape_26.setTransform(256.6,269.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A6E1E9").s().p("AgfFRQgTgWAAgjQAFgngBgSQgIhfAAgSQABgWAGghQAHgnABgSIAGhyQAAgUAOgmQAPgpABgQQAAggAJgaQAPgjAfgLIABgBQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAEgNAcIgMAdQgCAKgCAUIgCAeQgFAigKAiQgHAWAAAeIAFAsQAAANgHA2IgGA6QAAANAEAxQACAxAAARIAAA3QgCA3gOAUgAgmEPIAAAXQAAAEAGANQAGAPAFAAQAFAAABgCQgCgFgGgHQgHgIgBgDIAAgvIgCgDQgFAHAAANgAghAFQAAAWgFALQgFALABAMQAAAKACACIACgBQAAgYAGgKQAEgJAAgQIAAgNIgFAAgAADjcQgDAMgDAGQgKALAAAZQgBAEADADIACgBQACgdAJgOQAIgNABgSQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgCAEgDANg");
	this.shape_27.setTransform(258.3,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},7).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

	// Vrstva 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E5E5D").s().p("AgDAXQgQgBAAgGIAAAAIAAgBQAAgBAHgCIAGgFQAEgDADgFIAJgKIABgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAAgBIABAAIAEAAQADAEAAAOIgBAOIABABQAAAJgVACIgCAAg");
	this.shape_28.setTransform(346,218.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5E5E5D").s().p("AgOARIgDgDIAAgCIAAgBIABgEIAAAAIgBgCIADgCIABAAIABgBIAAABIADgBIAVgSQAEAAAAALIACAIQAAADgGAFQgHAGgFgBIAAABg");
	this.shape_29.setTransform(347.5,218.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5E5E5D").s().p("AgOARIgDgDIAAgBIAAgBIABgFIAAAAIgBgBIADgCIABAAIABgBIAAAAIADgBIAVgSQAEAAAAALIACAJQAAACgGAGQgHAGgFgCIAAABg");
	this.shape_30.setTransform(347.5,218.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E5E5D").s().p("AgJAQQgHAAAAgFQAAgHABgCQABgBAIgCIAIgGIACgFQABgDADAAQADAAAAAIIAAAKIAFgBIABABQAAADgGAFQgGAFgCAAgAAJAJIAAAAIACgDIgCADg");
	this.shape_31.setTransform(327.1,221.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E5E5D").s().p("AgJAQQgHAAAAgFQAAgHABgCQABgBAIgCIAIgHIACgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQADAAAAAIIAAALIAFgDIABADQAAACgGAFQgGAEgCABgAAJAIIAAABIACgDIgCACg");
	this.shape_32.setTransform(321.2,218.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5E5E5D").s().p("AgSAZIgBAAIAAgBIABgCIABAAIAAgCQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBIgCAAIAAgBIAFgEIAEgCIADgEIAEgEIABgEIACgVQABACAAAGIAAAHQAEAFABADIAAAHIAAAGIAEgDIABAAIABgBIACgEIABAAIAAgCIABABIADAAQAAAFgEAEIAAAAQAAAEgLAFIgFACQgGAEgGAAgAgOAWIABgBIgBgBg");
	this.shape_33.setTransform(314.4,213.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5E5E5D").s().p("Aj6FXIgBAAIAAgBIABgBIABAAIAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIgCAAIAAgBIAGgEIADgCIAEgFIADgGIABgDIAEgVQACABAAAGIgBAIQAEAEABAEIAAAJIAAAFIAEgDIABABIABgBIACgFIABAAIAAgCIABACIADAAQAAAEgEAFIAAAAQAAAEgLAEIgHADQgGADgGAAgAj2FUIACAAIgCgBgACVkPIgDgCQgRABgCgCQgCgBgEAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIAFgPIAFgQQAKgSAVgGQA0gSAYANQAQAJAAAUQAAAOgTAKQgJAGgWAIg");
	this.shape_34.setTransform(337.6,182);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E5E5D").s().p("Aj3FWIgBAAIAAgBIABgBIABgBIAAgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAgBIgCABIAAgBIAFgEIAEgDIADgEIADgGIACgDIADgVQACABAAAGIgBAIQAFAEABAEIAAAJIAAAFIADgDIABABIABgBIADgFIAAAAIABgCIABACIACAAQABAEgFAEIABABQAAAEgLAEIgHADQgHADgGAAgAj0FTIACAAIgCgBgACCj+QgIgKAAgKQAAgXARgRQATgWAmgGQA1gDAAApQABAigbATQgWAPgZAAQggAAgOgSg");
	this.shape_35.setTransform(337.4,182.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5E5E5D").s().p("Aj0FZIAAAAIgBgBIABgCIACAAIgBgCQAAgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAIgCAAIgBgBIAGgEIADgCIAEgEIADgHIACgDIADgVQACACAAAGIgBAHQAEAEABAEIABAJIgBAGIAEgDIABAAIABgBIACgEIABAAIABgCIABABIACAAQABAEgFAFIAAAAQAAAEgKAFIgIACQgGAEgGAAgAjwFWIACgBIgCgBgAB7kLIAAgGQAAgKAHgTQADgRAQgLQAbgUAlAIQAhAIAAAPQAAASgjATQglAVgpAAQgIAAgCgGg");
	this.shape_36.setTransform(337,181.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},12).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_33}]},1).wait(9));

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E6173").s().p("AgIAOQgDgGAAgIQAAgHADgGQAEgFAEgBQAFABADAFQAEAGAAAHQAAAIgEAGQgDAFgFABQgEgBgEgFg");
	this.shape_37.setTransform(293.4,208.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8DB2DB").s().p("AgLASQgFgIAAgKQAAgJAFgIQAFgHAGAAQAHAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgHAAQgGAAgFgHg");
	this.shape_38.setTransform(293.4,208.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C9BBD").s().p("AAdBXQghgbADgpQABgpgUgSQgHgGghgMQgEgIgBgKQgCgUATgJIASABQAVADARALQAQAJAPAlQAPAmANAGIgDBqQgSgGgRgNg");
	this.shape_39.setTransform(298.6,217);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4E6173").s().p("AhRglQBEAAAvAMQAwALAAAOQAAAPgwAMQgvALhEAAg");
	this.shape_40.setTransform(330.3,201);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7896B7").s().p("Ah6AeQg0gNAAgRQAAgQA0gNQAzgNBHAAQBIAAAzANQA0ANgBAQQABARg0ANQgzANhIAAQhHAAgzgNg");
	this.shape_41.setTransform(322.6,201);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#85AFDA","#A7C9E8","#83B6DE"],[0,0.565,1],-18.5,0.8,18.8,-1.8).s().p("Ah6C/Qg0gMAAgRIAAlsIFcAAIAAFsQABARg0AMQgzAMhIAAQhHAAgzgMg");
	this.shape_42.setTransform(322.6,221.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8DB2DB").s().p("AgoBGQAfgJAMgNQASgRAAgfQAAgdgSgPQgLgLgggKIAAgkQAiAAAWAeQAZAeAAApQAAAqgZAeQgWAegiAAg");
	this.shape_43.setTransform(342.7,219.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7D9DBF").s().p("AgEAJIgDgBIgBgBIgBgBIgBAAIAAAAIgBgBIgBgDIAAgCQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIABAAIAAgBIABgBIgBACIgBABIAAABQABgDAEgCIAAAAQAEgCAFABIABABIgEgCIADAAIADAAQAEABAAADIAAABIADACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgCAFgGACIgFABIgEAAgAgIgFIAAAAQAEgDAEAAQgEAAgEADIgBAAIABAAg");
	this.shape_44.setTransform(389.2,125.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#B3C3DE","#AEC0DC","#A3B8D8","#8FA9D1","#7196C7","#5183BD"],[0,0.192,0.396,0.608,0.824,1],-13.2,0,13.3,0).s().p("AgSBRIgtgLQgYgEgTgKQgWgLgCgMIAAAAQgDgHALgRIAQgVQAbgrAogRQAugTAtATQApARAZAoQAMATACAOQACAUgOAPIgPAPQgIAHgMACQgMADgkACIgdABIgHAAQgLAAgIgCg");
	this.shape_45.setTransform(388.5,132.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7D9DBF").s().p("AAJApQgrgBgvgOQgTgFgIgGQgLgJABgLQABgKAKgEIAWgGQAXgEALgEQAYgGAGgBIgKAAIAmgBIAcACQAPABALAEQAfAMARAQQAYAUghANQgjAPgvAAIgJgBg");
	this.shape_46.setTransform(378.5,139);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AB7A76").s().p("AgXARQgEgMgGAeIgGAfQgWgUgTgZQgmgwATgXQASgXAqgDQAUgBARAEIAwAaQA0AiAIAlIhFgIIADA9Qg5gpgGgTg");
	this.shape_47.setTransform(401.8,144.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4B4B4A").s().p("AgFAFQgDgDAAgCQAAgGAIAAQAJAAAAAGQAAAHgJAAQgCAAgDgCg");
	this.shape_48.setTransform(352.5,157);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4B4B4A").s().p("AgFAFQgDgDAAgCQAAgGAIAAQAJAAAAAGQAAAHgJAAQgCAAgDgCg");
	this.shape_49.setTransform(357,157.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4B4B4A").s().p("AgIAAQAAgGAIAAQADAAADACQADACAAACQAAADgDACQgDACgDAAQgIAAAAgHg");
	this.shape_50.setTransform(355.1,154.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4B4B4A").s().p("AgPADIgPgJIA8AGQgPAHgNAAQgIAAgJgEg");
	this.shape_51.setTransform(382.7,168);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4B4B4A").s().p("AgaAOIA1gbQgPAWgTAFg");
	this.shape_52.setTransform(395,165);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4B4B4A").s().p("AgMAHIgSgHIA8gGQgTANgRAAIgGAAg");
	this.shape_53.setTransform(389.8,169.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C6E6EF").s().p("AAAAGIgCgBIgBAAIAAAAIgCgBQgEgBACgDIAAAAIABAAIABAAQABgDAEgBQAFgCADAFQACAEgHACIAAAAIgBABIgCAAIAAAAIAAAAIAAAAg");
	this.shape_54.setTransform(386.7,152.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2B2B2A").s().p("AgMAHQgEgGADgFQAGgNAOAGQAEABACAFQAEAGgFAHQgGAGgHAAQgIAAgDgHg");
	this.shape_55.setTransform(385.7,154.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8DB2DB").s().p("AgaAPQgIgOAHgNQAMgZAfAMQAJADADAJQAJAPgMAOQgLAOgRAAQgPAAgIgPg");
	this.shape_56.setTransform(385.6,154.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLAwQgjgGgIgcQgJgaAegUQAfgUAhAHQAVAFAEAPQADALgFAXQgVAngpAAIgDAAg");
	this.shape_57.setTransform(385.9,154.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4B4B4A").s().p("AgBAtQgkAAgQgWIgIgVIBvguQAWALgRAmQgRAogmAAIgBAAg");
	this.shape_58.setTransform(386.7,155.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5E5E5D").s().p("Ah/B9QgLgGgCgKIABgKQAYglAFglIgBgbIDeh/IAUBCQALAlgBAWQgFA8h1ArQhPAfgpAAQgQAAgKgFg");
	this.shape_59.setTransform(400.4,174);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7D9DBF").s().p("AhKBwQgWhKABg+QACiCByAvIApA4QAoA+gHArQgPAXgdATQgmAYgnAAQgXAAgZgIg");
	this.shape_60.setTransform(422.1,196);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F6B09B").s().p("AgFAFIgNgFIASgGIAKAAIAHABQAFADgHAFQgFAEgHAAIgIgCg");
	this.shape_61.setTransform(343.7,159.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F6B09B").s().p("AgdAIQgFgIgCgJQgFgTAMACQAIACAXgGQAVgEAGAIQAIAMABAEQACAFgDAEQgHAQgMAKQgJAHgIAAQgOAAgQgYg");
	this.shape_62.setTransform(342.8,157);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F6B09B").s().p("AgNAWQgGgJgBgNQAAgLAGgKQAGgJAIgBQAHAAAHAJQAGAKAAAMQABAMgGAKQgGAJgJAAIAAABQgHAAgGgKg");
	this.shape_63.setTransform(344.8,157.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5E5E5D").s().p("AgEAEIgIgEQAEgFAKgBIALABIAAALIgGABQgGAAgFgDg");
	this.shape_64.setTransform(344.6,219.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5E5E5D").s().p("AANAiIAPgZQAIgNgnAEIgqAHQgNAMgFgKIgCgLQAVgsAuAIQAZAEATAMQAgAOgSAXQgQAWgVADIgFAAQgIAAADgGg");
	this.shape_65.setTransform(344,216.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5E5E5D").s().p("AiEBMIgUgJQBwg0CMhTQAegWAOAPQAIAIABAMQh6B8hnAMIgTABQgWAAgTgGg");
	this.shape_66.setTransform(361.6,209.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5E5E5D").s().p("AgFgDIAFgJIAKAIQgFALgOAFQgDgIAHgHg");
	this.shape_67.setTransform(423.5,250.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5E5E5D").s().p("AgrBAIgGgKQgCguAeglQAPgTAOgKQAegRAIAdQAIAagKATQgHAKgCgDIgKgVQgHgPgTAnIgUAsQgKAMgHAAQgDAAgCgBg");
	this.shape_68.setTransform(420.3,249.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5E5E5D").s().p("AgOgYIANhiQABglATgCQALgBALAHQAYCsg3BaQgPAcgXAQIgTALQARhMAQhug");
	this.shape_69.setTransform(426.2,230.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E5E5D").s().p("AgaBdQgLgnAAg2QABg1ALgnQAMgnANAAQAQAAALAnQALAmAAA2QgBA3gLAmQgLAngPAAQgPAAgLgng");
	this.shape_70.setTransform(427,207.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8DB2DB").s().p("AivF9QhRghgUgoQgGgNAAgLIACgJQAIjkBAizQAUg5AXgtQALgWAIgMIEOiQQChB+gCFOQgBCoghCOQgvAuiMAIIgvABQhuAAhQggg");
	this.shape_71.setTransform(401.1,210.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F0828E").s().p("ABZCVQgzgPAAgYQAAhPg2gYQgfgMgUAlIgOApQguAbgngGQgagEgUgRQgLgKAEhHIAHhIIAAhKIGoAAQAVBigdBrQgOA2gTAjQgRAPgbAAQgRAAgVgGg");
	this.shape_72.setTransform(401.1,253.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5E5E5D").s().p("AgkAcQgUgQALgVQAMgYAVAOQATANAMgHQAMgIgGgRIARACIAGASQAEASgJAMQgOASgWAGQgHADgHAAQgQAAgNgLg");
	this.shape_73.setTransform(383.9,297);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5E5E5D").s().p("AgWgVIgJgrQgDgPAEgQQAEgUAbAJQAcAIAEAYIgDAXQgDAgADAqIABAZQgDAggSAeQgZhagHgpg");
	this.shape_74.setTransform(385.4,285.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5E5E5D").s().p("AgbCiQgpg1AChvQgCgHABgOQADgcARgmQAVgvAigaQAlgaARAWIAGBBQABBXgaBsQgPA+gVAQQgGAFgFAAQgLAAgMgPg");
	this.shape_75.setTransform(385.9,263.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5E5E5D").s().p("AgkAcQgUgQALgVQAMgYAVAOQATANAMgHQAMgIgGgRIARACIAGASQAEASgJAMQgOASgWAGQgHADgGAAQgRAAgNgLg");
	this.shape_76.setTransform(410.5,298.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5E5E5D").s().p("AgWgVIgJgrQgDgPAEgQQAEgUAbAJQAcAIAEAYIgDAXQgDAgADAqIABAZQgDAggSAeQgYhagIgpg");
	this.shape_77.setTransform(412,287);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5E5E5D").s().p("AgbCiQgpg1AChvQgCgHABgOQADgcARgmQAVgvAigaQAlgaARAWIAGBBQABBXgaBsQgPA+gVAQQgGAFgFAAQgLAAgMgPg");
	this.shape_78.setTransform(412.5,264.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5E5E5D").s().p("AhPAwQgigUAAgcQAAgbAigVQAhgUAuAAQAvAAAhAUQAiAVAAAbQAAAdgiATQghAVgvAAQguAAghgVg");
	this.shape_79.setTransform(361.4,158.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5E5E5D").s().p("AhPAwQgigUAAgcQAAgcAigUQAhgUAuAAQAvAAAhAUQAiAVAAAbQAAAcgiAUQghAVgvAAQgtAAgigVg");
	this.shape_80.setTransform(369.4,161.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5E5E5D").s().p("ABzDEQg1gHgegbQgyguhVgZIhJgQQkDAECLhXQBFgsB5gtQDvi2CCCUQBCBKAQBtQgCBmh8AiQgjAKgjAAQgRAAgRgCg");
	this.shape_81.setTransform(376.9,154.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7D9DBF").s().p("AgzBDQgugjgCg6IAhgVQAmgXAegLQBmgjgEBpQgNAVgUAZQgnAxgiAHQgWgGgXgSg");
	this.shape_82.setTransform(382.5,195.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5E5E5D").s().p("AhiBXQgLgMAWgiQAWgiApgiQAogkAkgSQAlgRAKAMQAKAMgVAiQgWAigpAiQgnAkglASQgWAKgMAAQgJAAgEgFg");
	this.shape_83.setTransform(378.5,198.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5E5E5D").s().p("Ah7B6QgJgFAAgKIACgJQATgugKggIgOgUIDdh+QAhA/AGAOQAPAkgEAUQgJAyh9AtQhDAZgiAAQgQAAgIgFg");
	this.shape_84.setTransform(403.5,172.2,1,1,7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8DB2DB").s().p("AinF9QhRghgXgjQgIgLgBgJIABgIQAIjjBAjKQAVhAAXg2IATgpIEUhtQChB+gNFNQgHCognCPQgvAtiBAIIgtACQhlAAhPggg");
	this.shape_85.setTransform(401.9,212.8,1,1,2.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8DB2DB").s().p("AiiF8QhRghgYgiQgHgLgBgKIABgHQAIjkBAjKQAUhAAXg1IAUgpIEChtQChB+gEFNQgDCogiCOQgwAuiAAIIguACQhkAAhPghg");
	this.shape_86.setTransform(401.3,212.6,1,1,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F0828E").s().p("ABaCUQgzgPgGgYQgEgkgGgTQgKghgdgOQgfgLgZAlIgTAqQguAbgigHQgUgEgVgSQgLgJAEhIIAHhHIAAhKIGoAAQAVBigdBqQgOA3gTAiQgQAOgaAAQgRAAgWgGg");
	this.shape_87.setTransform(401.7,253.8,1,1,3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8DB2DB").s().p("AhkFxQhYgogUgRQgNgLgLgfQhMjPAci+QAJg7ASg0IAQgnIEZhrQChB9A6EKQAdCFgDBtQhAA9hrArQhQAgg7AAQgsAAgjgQg");
	this.shape_88.setTransform(394,211.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F0828E").s().p("AB+CkQg0gOAAgYQAAhQg4gYQgdgNgUAmIgNApQgxAdgxADQgsACgKgRQgrhPgJg+IAAgwIAcg8IHMgZQAVBigZB6QgMA+gQAqQgSAPgbAAQgRAAgUgGg");
	this.shape_89.setTransform(397,251.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7D9DBF").s().p("AgzBDQgugjgCg6IAhgVQAmgXAegLQBmgjgEBpQgNAVgUAZQgnAxgiAHQgWgGgXgSg");
	this.shape_90.setTransform(370.7,195.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8DB2DB").s().p("AhTF4QhYgpgVgRQgMgKgMggQhLjPgNi9QgEg8ADg0IADgnIEbh3QDiBUBIEiQAkCPgKCAQg/A9hsAsQhPAfg8AAQgrAAgjgPg");
	this.shape_91.setTransform(392.3,212.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8DB2DB").s().p("Ah4F4QhRghgdgdQgJgKgDgHIgBgGQhDjhAPjUQAFhEAMg6IAMgsIEwhMQC9BfA1EqQAbCWgMCCQg3A2iAAkQhOAWg7AAQg2AAgpgRg");
	this.shape_92.setTransform(387.8,210.6,1,1,-10.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F0828E").s().p("AB7CzQg0gOAAgYQAAhQg4gYQgdgNgUAmIgNApQgwAcg3ADQgwADgQgOQgIgHgZhmIAKiPIHbg3QAVBigZCJQgMBGgRAxQgSAPgbAAQgQAAgVgGg");
	this.shape_93.setTransform(397.4,250.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5E5E5D").s().p("AgjAbQgUgQALgVQAMgYAVAOQATANAJgEQAIgFgGgRIAQgDIAKARQAIATgJALQgOASgWAGQgIACgGAAQgQAAgNgKg");
	this.shape_94.setTransform(383.8,297.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5E5E5D").s().p("AgYgWIgJgrQgDgPADgQQAFgUAcAJQAaAIAFAYIgEAXQgCAgADAqIAHAkQAEAngNAOQgrhcgHgpg");
	this.shape_95.setTransform(383.8,285.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5E5E5D").s().p("AgsCmQgPgYgFgvQgGgyAJgzQgDgJABgPQADgeASghQAZgvAggZQAjgbARAWIgHBFQgNBbgaBsQgPA+gRAQQgHAFgGAAQgKAAgKgPg");
	this.shape_96.setTransform(383,262.8,1,1,-10.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5E5E5D").s().p("AiCBJIgKgDQADgHALgDIAJgCIAEgKIADgKQACgLgNACQgJABgPAFIgnARQgKAOgHgIIgFgNQAHgaASgMQAJgGAKgBQAIgCAJAAIAJgBQATABASAEQAFABAEACIAIABIAAABQBqgaCFguQAigPAKASQAGAJgBAMQiRBhhngLQgTgCgRgFQgJAVgRAJIgEACIgGABQgFACgGAAIgFAAg");
	this.shape_97.setTransform(325.2,209.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83,p:{rotation:0,x:378.5,y:198.7}},{t:this.shape_82,p:{rotation:0,x:382.5,y:195.9}},{t:this.shape_81,p:{rotation:0,x:376.9,y:154.6}},{t:this.shape_80,p:{rotation:0,x:369.4,y:161.6}},{t:this.shape_79,p:{rotation:0,x:361.4,y:158.4}},{t:this.shape_78,p:{rotation:0,x:412.5,y:264.3}},{t:this.shape_77,p:{rotation:0,y:287,x:412}},{t:this.shape_76,p:{y:298.1,rotation:0,x:410.5}},{t:this.shape_75,p:{rotation:0,x:385.9,y:263.2}},{t:this.shape_74,p:{rotation:0,y:285.9,x:385.4}},{t:this.shape_73,p:{y:297}},{t:this.shape_72,p:{rotation:0,x:401.1,y:253.6}},{t:this.shape_71},{t:this.shape_70,p:{rotation:0,x:427,y:207.6}},{t:this.shape_69,p:{rotation:0,x:426.2,y:230.8}},{t:this.shape_68,p:{rotation:0,x:420.3,y:249.8,regX:0,scaleX:1,skewX:0,skewY:0}},{t:this.shape_67,p:{rotation:0,x:423.5,y:250.4}},{t:this.shape_66,p:{rotation:0,x:361.6,y:209.5}},{t:this.shape_65,p:{rotation:0,x:344,y:216.5}},{t:this.shape_64,p:{rotation:0,x:344.6,y:219.9}},{t:this.shape_63,p:{rotation:0,x:344.8,y:157.1}},{t:this.shape_62,p:{rotation:0,x:342.8,y:157}},{t:this.shape_61,p:{rotation:0,x:343.7,y:159.9}},{t:this.shape_60,p:{rotation:0,x:422.1,y:196}},{t:this.shape_59,p:{x:400.4,y:174}},{t:this.shape_58,p:{rotation:0,x:386.7,y:155.3}},{t:this.shape_57,p:{rotation:0,x:385.9,y:154.1}},{t:this.shape_56,p:{rotation:0,x:385.6,y:154.1}},{t:this.shape_55,p:{rotation:0,x:385.7,y:154.1}},{t:this.shape_54,p:{rotation:0,x:386.7,y:152.1}},{t:this.shape_53,p:{rotation:0,x:389.8,y:169.5}},{t:this.shape_52,p:{rotation:0,x:395,y:165}},{t:this.shape_51,p:{rotation:0,x:382.7,y:168}},{t:this.shape_50,p:{rotation:0,x:355.1,y:154.6}},{t:this.shape_49,p:{rotation:0,x:357,y:157.1}},{t:this.shape_48,p:{rotation:0,x:352.5,y:157}},{t:this.shape_47,p:{rotation:0,x:401.8,y:144.1}},{t:this.shape_46,p:{rotation:0,x:378.5,y:139}},{t:this.shape_45,p:{rotation:0,x:388.5,y:132.8}},{t:this.shape_44,p:{rotation:0,x:389.2,y:125.8}},{t:this.shape_43,p:{x:342.7,y:219.1,rotation:0}},{t:this.shape_42,p:{x:322.6,y:221.6,rotation:0}},{t:this.shape_41,p:{x:322.6,y:201,rotation:0}},{t:this.shape_40,p:{x:330.3,y:201,rotation:0}},{t:this.shape_39,p:{x:298.6,y:217,rotation:0}},{t:this.shape_38,p:{x:293.4,y:208.9,rotation:0}},{t:this.shape_37,p:{x:293.4,y:208.9,rotation:0}}]}).to({state:[{t:this.shape_83,p:{rotation:2.7,x:380.7,y:199.6}},{t:this.shape_82,p:{rotation:2.7,x:384.8,y:197}},{t:this.shape_81,p:{rotation:7,x:380.2,y:150.5}},{t:this.shape_80,p:{rotation:7,x:371.9,y:156.6}},{t:this.shape_79,p:{rotation:7,x:364.3,y:152.4}},{t:this.shape_78,p:{rotation:3.7,x:412.6,y:265.3}},{t:this.shape_77,p:{rotation:-6.7,y:287.5,x:412}},{t:this.shape_76,p:{y:298.4,rotation:0,x:410.5}},{t:this.shape_75,p:{rotation:3.7,x:386.2,y:262.6}},{t:this.shape_74,p:{rotation:-5.9,y:285.7,x:385.4}},{t:this.shape_73,p:{y:297.4}},{t:this.shape_72,p:{rotation:3.7,x:402,y:253.9}},{t:this.shape_85},{t:this.shape_70,p:{rotation:2.7,x:428.7,y:210.8}},{t:this.shape_69,p:{rotation:2.7,x:426.7,y:234.1}},{t:this.shape_68,p:{rotation:2.7,x:420,y:252.8,regX:0,scaleX:1,skewX:0,skewY:0}},{t:this.shape_67,p:{rotation:2.7,x:423.1,y:253.5}},{t:this.shape_66,p:{rotation:2.7,x:363.2,y:209.7}},{t:this.shape_65,p:{rotation:2.7,x:345.3,y:215.9}},{t:this.shape_64,p:{rotation:2.7,x:345.8,y:219.3}},{t:this.shape_63,p:{rotation:7,x:347.9,y:149.1}},{t:this.shape_62,p:{rotation:7,x:346,y:148.8}},{t:this.shape_61,p:{rotation:7,x:346.5,y:151.7}},{t:this.shape_60,p:{rotation:2.7,x:424.4,y:198.9}},{t:this.shape_84,p:{rotation:7,x:403.5,y:172.2}},{t:this.shape_58,p:{rotation:7,x:389.7,y:152}},{t:this.shape_57,p:{rotation:7,x:389.2,y:151.1}},{t:this.shape_56,p:{rotation:7,x:388.9,y:151.1}},{t:this.shape_55,p:{rotation:7,x:388.9,y:151.1}},{t:this.shape_54,p:{rotation:7,x:390.1,y:149.3}},{t:this.shape_53,p:{rotation:7,x:391,y:166.4}},{t:this.shape_52,p:{rotation:7,x:396.7,y:162.6}},{t:this.shape_51,p:{rotation:7,x:384.2,y:164}},{t:this.shape_50,p:{rotation:7,x:358.4,y:147.4}},{t:this.shape_49,p:{rotation:7,x:360,y:150.1}},{t:this.shape_48,p:{rotation:7,x:355.5,y:149.5}},{t:this.shape_47,p:{rotation:7,x:406,y:142.7}},{t:this.shape_46,p:{rotation:7,x:383.6,y:135.2}},{t:this.shape_45,p:{rotation:7,x:394.3,y:130.3}},{t:this.shape_44,p:{rotation:7,x:395.8,y:123.4}},{t:this.shape_43,p:{x:344,y:218.9,rotation:0}},{t:this.shape_42,p:{x:323.8,y:221.4,rotation:0}},{t:this.shape_41,p:{x:323.8,y:200.8,rotation:0}},{t:this.shape_40,p:{x:331.6,y:200.8,rotation:0}},{t:this.shape_39,p:{x:299.9,y:216.8,rotation:0}},{t:this.shape_38,p:{x:294.7,y:208.7,rotation:0}},{t:this.shape_37,p:{x:294.7,y:208.7,rotation:0}}]},2).to({state:[{t:this.shape_83,p:{rotation:2,x:380.4,y:199.7}},{t:this.shape_82,p:{rotation:2,x:384.5,y:197}},{t:this.shape_81,p:{rotation:3.2,x:377.6,y:152.4}},{t:this.shape_80,p:{rotation:3.2,x:369.7,y:159}},{t:this.shape_79,p:{rotation:3.2,x:361.9,y:155.3}},{t:this.shape_78,p:{rotation:3.7,x:412.6,y:265.3}},{t:this.shape_77,p:{rotation:-6.7,y:287.5,x:412}},{t:this.shape_76,p:{y:298.4,rotation:0,x:410.5}},{t:this.shape_75,p:{rotation:3.7,x:386.2,y:262.6}},{t:this.shape_74,p:{rotation:-5.9,y:285.7,x:385.4}},{t:this.shape_73,p:{y:297.4}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_70,p:{rotation:2,x:427.6,y:208}},{t:this.shape_69,p:{rotation:2,x:425.8,y:231.4}},{t:this.shape_68,p:{rotation:2,x:419.3,y:250.2,regX:0,scaleX:1,skewX:0,skewY:0}},{t:this.shape_67,p:{rotation:2,x:422.4,y:250.9}},{t:this.shape_66,p:{rotation:2,x:363,y:210.1}},{t:this.shape_65,p:{rotation:2,x:345.2,y:216.5}},{t:this.shape_64,p:{rotation:2,x:345.7,y:219.9}},{t:this.shape_63,p:{rotation:3.2,x:345.4,y:153.1}},{t:this.shape_62,p:{rotation:3.2,x:343.5,y:152.9}},{t:this.shape_61,p:{rotation:3.2,x:344.1,y:155.8}},{t:this.shape_60,p:{rotation:2,x:423.1,y:196.2}},{t:this.shape_84,p:{rotation:3.2,x:401.9,y:173.1}},{t:this.shape_58,p:{rotation:3.2,x:386.8,y:153.8}},{t:this.shape_57,p:{rotation:3.2,x:386.7,y:152.4}},{t:this.shape_56,p:{rotation:3.2,x:386.4,y:152.4}},{t:this.shape_55,p:{rotation:3.2,x:386.4,y:152.4}},{t:this.shape_54,p:{rotation:3.2,x:387.5,y:150.5}},{t:this.shape_53,p:{rotation:3.2,x:389.1,y:168.1}},{t:this.shape_52,p:{rotation:3.2,x:394.6,y:163.9}},{t:this.shape_51,p:{rotation:3.2,x:382.1,y:166.2}},{t:this.shape_50,p:{rotation:3.2,x:355.3,y:151.2}},{t:this.shape_49,p:{rotation:3.2,x:357.1,y:153.8}},{t:this.shape_48,p:{rotation:3.2,x:352.6,y:153.5}},{t:this.shape_47,p:{rotation:3.2,x:402.5,y:143.4}},{t:this.shape_46,p:{rotation:3.2,x:380.1,y:136.9}},{t:this.shape_45,p:{rotation:3.2,x:390.4,y:131.4}},{t:this.shape_44,p:{rotation:3.2,x:391.5,y:124.3}},{t:this.shape_43,p:{x:343.7,y:218.3,rotation:-1.4}},{t:this.shape_42,p:{x:323.6,y:221.3,rotation:-1.4}},{t:this.shape_41,p:{x:323.1,y:200.7,rotation:-1.4}},{t:this.shape_40,p:{x:330.8,y:200.5,rotation:-1.4}},{t:this.shape_39,p:{x:299.6,y:217.3,rotation:-1.4}},{t:this.shape_38,p:{x:294.2,y:209.4,rotation:-1.4}},{t:this.shape_37,p:{x:294.2,y:209.4,rotation:-1.4}}]},2).to({state:[{t:this.shape_83,p:{rotation:0,x:378.5,y:198.7}},{t:this.shape_82,p:{rotation:0,x:382.5,y:195.9}},{t:this.shape_81,p:{rotation:0,x:376.9,y:154.6}},{t:this.shape_80,p:{rotation:0,x:369.4,y:161.6}},{t:this.shape_79,p:{rotation:0,x:361.4,y:158.4}},{t:this.shape_78,p:{rotation:0,x:412.5,y:264.3}},{t:this.shape_77,p:{rotation:0,y:287,x:412}},{t:this.shape_76,p:{y:298.1,rotation:0,x:410.5}},{t:this.shape_75,p:{rotation:0,x:385.9,y:263.2}},{t:this.shape_74,p:{rotation:0,y:285.9,x:385.4}},{t:this.shape_73,p:{y:297}},{t:this.shape_72,p:{rotation:0,x:401.1,y:253.6}},{t:this.shape_71},{t:this.shape_70,p:{rotation:0,x:427,y:207.6}},{t:this.shape_69,p:{rotation:0,x:426.2,y:230.8}},{t:this.shape_68,p:{rotation:0,x:420.3,y:249.8,regX:0,scaleX:1,skewX:0,skewY:0}},{t:this.shape_67,p:{rotation:0,x:423.5,y:250.4}},{t:this.shape_66,p:{rotation:0,x:361.6,y:209.5}},{t:this.shape_65,p:{rotation:0,x:344,y:216.5}},{t:this.shape_64,p:{rotation:0,x:344.6,y:219.9}},{t:this.shape_63,p:{rotation:0,x:344.8,y:157.1}},{t:this.shape_62,p:{rotation:0,x:342.8,y:157}},{t:this.shape_61,p:{rotation:0,x:343.7,y:159.9}},{t:this.shape_60,p:{rotation:0,x:422.1,y:196}},{t:this.shape_59,p:{x:400.4,y:174}},{t:this.shape_58,p:{rotation:0,x:386.7,y:155.3}},{t:this.shape_57,p:{rotation:0,x:385.9,y:154.1}},{t:this.shape_56,p:{rotation:0,x:385.6,y:154.1}},{t:this.shape_55,p:{rotation:0,x:385.7,y:154.1}},{t:this.shape_54,p:{rotation:0,x:386.7,y:152.1}},{t:this.shape_53,p:{rotation:0,x:389.8,y:169.5}},{t:this.shape_52,p:{rotation:0,x:395,y:165}},{t:this.shape_51,p:{rotation:0,x:382.7,y:168}},{t:this.shape_50,p:{rotation:0,x:355.1,y:154.6}},{t:this.shape_49,p:{rotation:0,x:357,y:157.1}},{t:this.shape_48,p:{rotation:0,x:352.5,y:157}},{t:this.shape_47,p:{rotation:0,x:401.8,y:144.1}},{t:this.shape_46,p:{rotation:0,x:378.5,y:139}},{t:this.shape_45,p:{rotation:0,x:388.5,y:132.8}},{t:this.shape_44,p:{rotation:0,x:389.2,y:125.8}},{t:this.shape_43,p:{x:342.7,y:219.1,rotation:0}},{t:this.shape_42,p:{x:322.6,y:221.6,rotation:0}},{t:this.shape_41,p:{x:322.6,y:201,rotation:0}},{t:this.shape_40,p:{x:330.3,y:201,rotation:0}},{t:this.shape_39,p:{x:298.6,y:217,rotation:0}},{t:this.shape_38,p:{x:293.4,y:208.9,rotation:0}},{t:this.shape_37,p:{x:293.4,y:208.9,rotation:0}}]},1).to({state:[{t:this.shape_83,p:{rotation:0,x:359.3,y:201.4}},{t:this.shape_90,p:{x:370.7,y:195.9}},{t:this.shape_82,p:{rotation:0,x:382.5,y:195.9}},{t:this.shape_81,p:{rotation:0,x:360.7,y:154.4}},{t:this.shape_80,p:{rotation:0,x:353.2,y:161.4}},{t:this.shape_79,p:{rotation:0,x:345.2,y:158.2}},{t:this.shape_78,p:{rotation:0,x:412.5,y:264.3}},{t:this.shape_77,p:{rotation:-10.5,y:287.3,x:413.4}},{t:this.shape_76,p:{y:298.5,rotation:-10.5,x:413.9}},{t:this.shape_75,p:{rotation:0,x:384.8,y:263.3}},{t:this.shape_74,p:{rotation:-5.8,y:286.3,x:384.9}},{t:this.shape_73,p:{y:297}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_70,p:{rotation:-9.2,x:407,y:205.2}},{t:this.shape_69,p:{rotation:-9.2,x:409.9,y:227.9}},{t:this.shape_68,p:{rotation:-9.2,x:407.1,y:247.6,regX:0,scaleX:1,skewX:0,skewY:0}},{t:this.shape_67,p:{rotation:-9.2,x:410.3,y:247.6}},{t:this.shape_66,p:{rotation:0,x:342.4,y:212.1}},{t:this.shape_65,p:{rotation:0,x:324.8,y:219.1}},{t:this.shape_64,p:{rotation:0,x:325.4,y:222.6}},{t:this.shape_63,p:{rotation:0,x:328.5,y:156.9}},{t:this.shape_62,p:{rotation:0,x:326.6,y:156.8}},{t:this.shape_61,p:{rotation:0,x:327.4,y:159.7}},{t:this.shape_60,p:{rotation:-9.2,x:400.3,y:194.5}},{t:this.shape_59,p:{x:384.1,y:173.8}},{t:this.shape_58,p:{rotation:0,x:370.4,y:155.1}},{t:this.shape_57,p:{rotation:0,x:369.7,y:153.9}},{t:this.shape_56,p:{rotation:0,x:369.4,y:153.9}},{t:this.shape_55,p:{rotation:0,x:369.4,y:153.9}},{t:this.shape_54,p:{rotation:0,x:370.4,y:151.9}},{t:this.shape_53,p:{rotation:0,x:373.6,y:169.3}},{t:this.shape_52,p:{rotation:0,x:378.7,y:164.8}},{t:this.shape_51,p:{rotation:0,x:366.5,y:167.8}},{t:this.shape_50,p:{rotation:0,x:338.9,y:154.4}},{t:this.shape_49,p:{rotation:0,x:340.7,y:156.9}},{t:this.shape_48,p:{rotation:0,x:336.2,y:156.8}},{t:this.shape_47,p:{rotation:0,x:385.5,y:143.9}},{t:this.shape_46,p:{rotation:0,x:362.2,y:138.8}},{t:this.shape_45,p:{rotation:0,x:372.2,y:132.6}},{t:this.shape_44,p:{rotation:0,x:372.9,y:125.6}},{t:this.shape_43,p:{x:323.6,y:220,rotation:-13.4}},{t:this.shape_42,p:{x:304.6,y:227.1,rotation:-13.4}},{t:this.shape_41,p:{x:299.8,y:207,rotation:-13.4}},{t:this.shape_40,p:{x:307.3,y:205.2,rotation:-13.4}},{t:this.shape_39,p:{x:280.3,y:228.2,rotation:-13.4}},{t:this.shape_38,p:{x:273.3,y:221.5,rotation:-13.4}},{t:this.shape_37,p:{x:273.3,y:221.5,rotation:-13.4}}]},1).to({state:[{t:this.shape_83,p:{rotation:0,x:353.4,y:198.6}},{t:this.shape_90,p:{x:358.3,y:194.7}},{t:this.shape_82,p:{rotation:0,x:382.5,y:195.9}},{t:this.shape_81,p:{rotation:0,x:352.6,y:154.4}},{t:this.shape_80,p:{rotation:0,x:345.1,y:161.4}},{t:this.shape_79,p:{rotation:0,x:337.1,y:158.2}},{t:this.shape_78,p:{rotation:0,x:412.5,y:264.3}},{t:this.shape_77,p:{rotation:-10.5,y:287.3,x:413.4}},{t:this.shape_76,p:{y:298.5,rotation:-10.5,x:413.9}},{t:this.shape_75,p:{rotation:0,x:384.8,y:263.3}},{t:this.shape_74,p:{rotation:-5.8,y:286.3,x:384.9}},{t:this.shape_73,p:{y:297}},{t:this.shape_89},{t:this.shape_91},{t:this.shape_70,p:{rotation:-9.2,x:404,y:205.2}},{t:this.shape_69,p:{rotation:-9.2,x:406.9,y:227.9}},{t:this.shape_68,p:{rotation:-9.2,x:404.1,y:247.6,regX:0,scaleX:1,skewX:0,skewY:0}},{t:this.shape_67,p:{rotation:-9.2,x:407.3,y:247.6}},{t:this.shape_66,p:{rotation:0,x:336.5,y:209.4}},{t:this.shape_65,p:{rotation:0,x:318.9,y:216.4}},{t:this.shape_64,p:{rotation:0,x:319.6,y:219.8}},{t:this.shape_63,p:{rotation:0,x:320.4,y:156.9}},{t:this.shape_62,p:{rotation:0,x:318.5,y:156.8}},{t:this.shape_61,p:{rotation:0,x:319.3,y:159.7}},{t:this.shape_60,p:{rotation:-9.2,x:397.3,y:194.5}},{t:this.shape_59,p:{x:376,y:173.8}},{t:this.shape_58,p:{rotation:0,x:362.3,y:155.1}},{t:this.shape_57,p:{rotation:0,x:361.6,y:153.9}},{t:this.shape_56,p:{rotation:0,x:361.3,y:153.9}},{t:this.shape_55,p:{rotation:0,x:361.3,y:153.9}},{t:this.shape_54,p:{rotation:0,x:362.3,y:151.9}},{t:this.shape_53,p:{rotation:0,x:365.5,y:169.3}},{t:this.shape_52,p:{rotation:0,x:370.6,y:164.8}},{t:this.shape_51,p:{rotation:0,x:358.4,y:167.8}},{t:this.shape_50,p:{rotation:0,x:330.8,y:154.4}},{t:this.shape_49,p:{rotation:0,x:332.6,y:156.9}},{t:this.shape_48,p:{rotation:0,x:328.1,y:156.8}},{t:this.shape_47,p:{rotation:0,x:377.4,y:143.9}},{t:this.shape_46,p:{rotation:0,x:354.1,y:138.8}},{t:this.shape_45,p:{rotation:0,x:364.1,y:132.6}},{t:this.shape_44,p:{rotation:0,x:364.8,y:125.6}},{t:this.shape_43,p:{x:317.6,y:216.8,rotation:-23.4}},{t:this.shape_42,p:{x:300.1,y:227.1,rotation:-23.4}},{t:this.shape_41,p:{x:291.9,y:208.2,rotation:-23.4}},{t:this.shape_40,p:{x:299,y:205.1,rotation:-23.4}},{t:this.shape_39,p:{x:276.3,y:232.4,rotation:-23.4}},{t:this.shape_38,p:{x:268.3,y:227.1,rotation:-23.4}},{t:this.shape_37,p:{x:268.3,y:227,rotation:-23.4}}]},1).to({state:[{t:this.shape_97},{t:this.shape_83,p:{rotation:11.8,x:347.7,y:199.8}},{t:this.shape_82,p:{rotation:3.5,x:352.8,y:197.5}},{t:this.shape_81,p:{rotation:0,x:346.9,y:154.4}},{t:this.shape_80,p:{rotation:0,x:339.4,y:161.4}},{t:this.shape_79,p:{rotation:0,x:331.4,y:158.2}},{t:this.shape_75,p:{rotation:0,x:412.5,y:264.3}},{t:this.shape_77,p:{rotation:-20.2,y:287.9,x:415.2}},{t:this.shape_76,p:{y:298.8,rotation:-20.2,x:417.6}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_70,p:{rotation:-10.4,x:400.4,y:206.1}},{t:this.shape_69,p:{rotation:-10.4,x:404.3,y:229}},{t:this.shape_68,p:{rotation:0,x:401.8,y:249.6,regX:-0.1,scaleX:0.846,skewX:52,skewY:-128}},{t:this.shape_63,p:{rotation:0,x:314.8,y:156.9}},{t:this.shape_62,p:{rotation:0,x:312.8,y:156.8}},{t:this.shape_61,p:{rotation:0,x:313.7,y:159.7}},{t:this.shape_60,p:{rotation:-10.4,x:393.6,y:195.5}},{t:this.shape_59,p:{x:370.4,y:173.8}},{t:this.shape_58,p:{rotation:0,x:356.7,y:155.1}},{t:this.shape_57,p:{rotation:0,x:355.9,y:153.9}},{t:this.shape_56,p:{rotation:0,x:355.6,y:153.9}},{t:this.shape_55,p:{rotation:0,x:355.7,y:153.9}},{t:this.shape_54,p:{rotation:0,x:356.7,y:151.9}},{t:this.shape_53,p:{rotation:0,x:359.8,y:169.3}},{t:this.shape_52,p:{rotation:0,x:365,y:164.8}},{t:this.shape_51,p:{rotation:0,x:352.7,y:167.8}},{t:this.shape_50,p:{rotation:0,x:325.1,y:154.4}},{t:this.shape_49,p:{rotation:0,x:327,y:156.9}},{t:this.shape_48,p:{rotation:0,x:322.5,y:156.8}},{t:this.shape_47,p:{rotation:0,x:371.8,y:143.9}},{t:this.shape_46,p:{rotation:0,x:348.5,y:138.8}},{t:this.shape_45,p:{rotation:0,x:358.5,y:132.6}},{t:this.shape_44,p:{rotation:0,x:359.2,y:125.6}},{t:this.shape_43,p:{x:309.8,y:213,rotation:-34.2}},{t:this.shape_42,p:{x:294.5,y:226.4,rotation:-34.2}},{t:this.shape_41,p:{x:282.9,y:209.4,rotation:-34.2}},{t:this.shape_40,p:{x:289.4,y:205,rotation:-34.2}},{t:this.shape_39,p:{x:272.2,y:236.1,rotation:-34.2}},{t:this.shape_38,p:{x:263.3,y:232.3,rotation:-34.2}},{t:this.shape_37,p:{x:263.3,y:232.3,rotation:-34.2}}]},1).to({state:[{t:this.shape_97},{t:this.shape_83,p:{rotation:11.8,x:347.7,y:199.8}},{t:this.shape_82,p:{rotation:3.5,x:352.8,y:197.5}},{t:this.shape_81,p:{rotation:0,x:346.9,y:154.4}},{t:this.shape_80,p:{rotation:0,x:339.4,y:161.4}},{t:this.shape_79,p:{rotation:0,x:331.4,y:158.2}},{t:this.shape_75,p:{rotation:0,x:412.5,y:264.3}},{t:this.shape_77,p:{rotation:-20.2,y:287.9,x:415.2}},{t:this.shape_76,p:{y:298.8,rotation:-20.2,x:417.6}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_70,p:{rotation:-10.4,x:400.4,y:206.1}},{t:this.shape_69,p:{rotation:-10.4,x:404.3,y:229}},{t:this.shape_68,p:{rotation:0,x:401.8,y:249.6,regX:-0.1,scaleX:0.846,skewX:52,skewY:-128}},{t:this.shape_63,p:{rotation:0,x:314.8,y:156.9}},{t:this.shape_62,p:{rotation:0,x:312.8,y:156.8}},{t:this.shape_61,p:{rotation:0,x:313.7,y:159.7}},{t:this.shape_60,p:{rotation:-10.4,x:393.6,y:195.5}},{t:this.shape_59,p:{x:370.4,y:173.8}},{t:this.shape_58,p:{rotation:0,x:356.7,y:155.1}},{t:this.shape_57,p:{rotation:0,x:355.9,y:153.9}},{t:this.shape_56,p:{rotation:0,x:355.6,y:153.9}},{t:this.shape_55,p:{rotation:0,x:355.7,y:153.9}},{t:this.shape_54,p:{rotation:0,x:356.7,y:151.9}},{t:this.shape_53,p:{rotation:0,x:359.8,y:169.3}},{t:this.shape_52,p:{rotation:0,x:365,y:164.8}},{t:this.shape_51,p:{rotation:0,x:352.7,y:167.8}},{t:this.shape_50,p:{rotation:0,x:325.1,y:154.4}},{t:this.shape_49,p:{rotation:0,x:327,y:156.9}},{t:this.shape_48,p:{rotation:0,x:322.5,y:156.8}},{t:this.shape_47,p:{rotation:0,x:371.8,y:143.9}},{t:this.shape_46,p:{rotation:0,x:348.5,y:138.8}},{t:this.shape_45,p:{rotation:0,x:358.5,y:132.6}},{t:this.shape_44,p:{rotation:0,x:359.2,y:125.6}},{t:this.shape_43,p:{x:309.8,y:213,rotation:-34.2}},{t:this.shape_42,p:{x:294.5,y:226.4,rotation:-34.2}},{t:this.shape_41,p:{x:282.9,y:209.4,rotation:-34.2}},{t:this.shape_40,p:{x:289.4,y:205,rotation:-34.2}},{t:this.shape_39,p:{x:272.2,y:236.1,rotation:-34.2}},{t:this.shape_38,p:{x:263.3,y:232.3,rotation:-34.2}},{t:this.shape_37,p:{x:263.3,y:232.3,rotation:-34.2}}]},12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(566.7,324.6,140.2,177.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
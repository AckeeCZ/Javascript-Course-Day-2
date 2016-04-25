/**
 * Created by baji on 01.10.14.
 */

var canvas, stage, krtekRoot;

function canvasUpdate(callback) {
    this.canvas = document.getElementById("canvas");

    krtekRoot = new lib.krtek();
    krtekRoot.setTransform(0,0,1,1,0,0,0,0,0);
    krtekRoot.scaleX = 3; krtekRoot.scaleY *= 3;

    this.stage = new createjs.Stage(this.canvas);
    this.stage.addChild(krtekRoot);

    this.stage.update();
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", this.stage);

}



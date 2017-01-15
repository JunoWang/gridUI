/**
 * Created by Juno on 1/15/17.
 * Inspired by circuit-simulator- simple schematic capture
 *  Simple schematic capture's Copyright (C) 2011 Massachusetts Institute of Technology
 *  Also inspired by "drawpicture" online html canvas
 */
// get canvas
var canvas=document.getElementById('canvas');
var bg_context=canvas.getContext('2d');
this.highlights = null;
setup_grid(bg_context, this.highlights);

//set up variable
var flag=0;
var startX;
var startY;
var endX;
var endY;

//set up buttons
var Bus = document.getElementById('Bus');
var Generator = document.getElementById('Generator')
var Line = document.getElementById('Line')
var Load = document.getElementById('Load')
var Transformer = document.getElementById('Transformer')
// put all buttons in an array to avoid conflicts
var actions = [Bus,Generator,Line,Load,Transformer]
this.components = [];
this.wires = [];
this.branches = [];

//attributes specifically for dragging
this.dragging = false;
this.xOffset = 0;
this.yOffset = 0;

var bus_cover = new Image();
bus_cover.src = "/images/bus.png";
bus_cover.onload = function() {
    bg_context.drawImage(bus_cover, 730, 10);
};

var gen_cover = new Image();
gen_cover.src = "./images/Generator.png";
gen_cover.onload = function () {
    bg_context.drawImage(gen_cover,730,10);
}

var line_cover =  new Image()
line_cover.src ="./images/line.png"
line_cover.onload = function () {
    bg_context.drawImage(line_cover,730,10)
}

var Load_cover =  new Image()
Load_cover.src ="./images/Load.png"
Load_cover.onload = function () {
    bg_context.drawImage(Load_cover,730,10)
}
var trans_cover =  new Image()
trans_cover.src ="./images/line.png"
trans_cover.onload = function () {
    bg_context.drawImage(trans_cover,730,10)
}
// figuring out the drag stuff
// help link : http://blog.csdn.net/xsc_c/article/details/10857859
//  http://www.tuicool.com/articles/bMBVzu
// also helped document  circuit-simulator-master2/schematic.js
// electricjs-master/elecetric.js(canvasState)

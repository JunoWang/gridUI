/**
 * Created by Juno on 1/15/17.
 * Inspired by circuit-simulator- simple schematic capture
 *  Simple schematic capture's Copyright (C) 2011 Massachusetts Institute of Technology
 *  Also inspired by "drawpicture" online html canvas
 */
// get canvas
var canvas = new fabric.Canvas('canvas')
var bus = document.getElementById('bus');
var gen = document.getElementById('generator');
var line = document.getElementById('line');
var Load = document.getElementById('load');
var trans = document.getElementById('trans');

var busInstance = new fabric.Image(bus, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85
});
canvas.add(busInstance);

var genInstance = new fabric.Image(gen, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85,

});
canvas.add(genInstance);

var lineInstance = new fabric.Image(line, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85
});
canvas.add(lineInstance);

var loadInstance = new fabric.Image(Load, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85,
    size: 50
});
canvas.add(loadInstance);

var transInstance = new fabric.Image(trans, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85
});
canvas.add(transInstance);

canvas.on('mouse:down', function(options) {
    console.log(options.e.clientX, options.e.clientY);
});
canvas.on('mouse:up');
canvas.on('mouse: move');
busInstance.on('select');
busInstance.on('modified');
busInstance.on('moving');
genInstance.on('select');
genInstance.on('modified');
genInstance.on('moving');
lineInstance.on('select');
lineInstance.on('modified');
lineInstance.on('moving');
loadInstance.on('select');
loadInstance.on('modified');
loadInstance.on('moving');
transInstance.on('select');
transInstance.on('modified');
transInstance.on('moving');




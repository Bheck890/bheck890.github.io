// JavaScript Document

//This whole Document is SVG Drawing

//Call HTML Elements
var c = document.getElementById('myCanvas');

//Content Type
var ctx = c.getContext("2d");

//Actions
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);

//Draw the element
ctx.stroke();

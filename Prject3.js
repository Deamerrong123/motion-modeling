<scripts>
var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");

var box = {
	width : 75,
	high : 50,
}
ctx.beginPath();
ctx.moveTo(25,25);
ctx.lineTo(25,275);
ctx.lineTo(625,275);
ctx.closePath();
ctx.fillStyle = "#FFCC00";
ctx.fill();


</scripts>
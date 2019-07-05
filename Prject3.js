// declare canvas for drawing

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var box_x , box_y;
var Ang_x = 12/13;
var Ang_y = 5/13;

// need to draw the fixed triangle in the edage, first.

function triangle(w,h){
	this.ini_x = 625;
	this.ini_y = 275;
	this.width = w;
	this.height = h;

	draw = function(){
		ctx.beginPath();
		ctx.moveTo(ini_x,ini_y);
		ctx.lineTo(ini_x-width,ini_y);
		ctx.lineTo(ini_x-width, ini_y - height);
		ctx.fillStyle = "#FFCC00";
		ctx.fill();
	}

	get_x = function(){
		return ini_x;
	}
	get_y = function(){
		return ini_y;
	}
	draw();	
}
// ini_point = (triangle.ini_x,triangle.ini_y);

// second. need to have the rectangle box lie on the edage of the triangle.

function rec(x,y){
	this.x = x;
	this.y = y;
	w = 50;
	l = 75;
	Ang_x = (12/13);
	Ang_y = 5/13;
	
	draw1 = function(){
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo((x+w*Ang_y),(y-w*Ang_x));
		ctx.lineTo(((x+w*Ang_y)-l*Ang_x),((y-w*Ang_x)-l*Ang_y));
		ctx.lineTo((x-l*(Ang_x)),(y-l*(Ang_y)));
		// ctx.closePath();
		ctx.fillStyle = "#7FFF00";
		ctx.fill();

	}
	draw1();
	draw2 = function(){
		// ctx.rotate(Math.atan(250/600));
		ctx.fillStyle = "#7FFF00";
		ctx.fillRect(this.x,this.y,this.w,this.l);
	}
	//draw2();
	
}


var t = triangle(600,250);

var R = rec(625,275);

function warning() {
	window.alert("not working.");
}

function start(){
	document.body.appendChild(canvas);

	var w = 50;
	var l = 75;
	var Ang_x =  12/13;
	var Ang_y = 5/13;
	var g = 9.8; //m/s**2
	var Vx = 10.419*.944;
	var Vy = 4.341 * .944;
	var t = 0;

	Tri = triangle(625,275);

	var x0 = 625;
	var y0 = 275;


}

function move(){
	//
}

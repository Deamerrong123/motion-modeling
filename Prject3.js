// declare canvas for drawing

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var box_x , box_y;
var Ang_x = 12/13;
var Ang_y = 5/13;

var x = 625;
var Vx;
var y = 275;

var g = 9.8; //m/s**2
var t = 0;

var T; // the first animation
var T2; // animation for part 2
var T3; // animatin for part 3

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
} // Triangle

function rec(x,y){
	this.x = x;
	this.y = y;
	w = 50;
	l = 75;
	// Ang_x = (12/13);
	// Ang_y = 5/13;
	
	draw1 = function(){
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo((x+w*Ang_y),(y-w*Ang_x));
		ctx.lineTo(((x+w*Ang_y)-l*Ang_x),((y-w*Ang_x)-l*Ang_y));
		ctx.lineTo((x-l*(Ang_x)),(y-l*(Ang_y)));
		ctx.closePath();
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


var tri = triangle(600,250);

var R = rec(x,y);

function warning() {
	window.alert("not working.");
}

var o = setInterval(function (){
		 
		    
	//y0 -=(Vy - g*Ang_y*t);
	//x0 -= (Vx - g*Ang_x*t);
	
	 
	 ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
	 var tri = triangle(600,250);
	
	 var R = rec(x,y);
	},40);


function move(){
	T = setInterval(Part1_move,40);
}

function stop(){
	clearInterval(T);
}

function Part1_move(){
	x , y = Part1();
	if ( x >= 622 || y >= 272)
	{
		x = 625;
		y = 275;
		T2 = setInterval(Part2_move,40);
		stop()
	}
		
	var str = document.getElementById("demo").innerHTML; 
	var txt = str.replace("Running","W3Schools");
	document.getElementById("demo").innerHTML = txt;
	
	document.getElementById("cd").innerHTML = "("+x+","+y+")";
	document.getElementById("di").innerHTML = "t = " + t;
	document.getElementById("ang").innerHTML = "("+Ang_x+","+Ang_y+")";
	
}
function Part2_move(){
	x , y = Part2();
	if(  Ang_y <= 0|| Ang_x == 1){
		T3 = setInterval(part3,40);
		clearInterval(T2);
		}
		
	var str = document.getElementById("demo").innerHTML; 
	var txt = str.replace("Running","W3Schools");
	document.getElementById("demo").innerHTML = txt;
	
	document.getElementById("cd").innerHTML = "("+x+","+y+")";
	document.getElementById("di").innerHTML = "t = " + t;
	document.getElementById("ang").innerHTML = "("+Ang_x+","+Ang_y+")";
	document.getElementById("vx").innerHTML = "Vx = " + Vx;
	
}

function Part1() {
	var dt = .01;
	t += dt;
	Vx = 10.419*.944 - g*Ang_x*t; 
	var Vy = 4.341*.944 - g*Ang_y*t;
	
	y -= Vy ;
	x -= Vx ;

	return x, y;
}

function Part2(){
	
	dt = .01;
	t += dt;
	

	var K = l / (5/13);
	var dx = Math.abs(Vx);

	var sinA = (x-625)/K;
	var cosA = Math.sqrt(1 - sinA*sinA);

	var sinB =Math.sin(Math.PI - Math.asin(sinA) - Math.PI + Math.asin(5/13));
	var cosB = Math.cos(Math.PI - Math.asin(sinA) - Math.PI + Math.asin(5/13));

	Ang_x = cosB;
	Ang_y = sinB;
	
	x += dx;
	y += 0;

	return x, y;
}

function part3(){
	dt = .01;
	t += dt;
	//t -= 75;
	Ang_y = 0 ;
	Ang_x = 1 ;
	x += Math.abs(Vx);
	y += 0;
	
	if(x >=1000){
	clearInterval(T3);
	}
}
//Load Canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var clear = document.getElementById('clear');
//Set variables
var radius = 10;
var dragging = false;

//Retrieve canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set Linewidth
context.lineWidth = radius*2;

var putPoint = function(e){
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, 
				radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);	
	}
	
}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disEngage = function(){
	dragging = false;
	context.beginPath();
}


function test() {
	context.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disEngage)


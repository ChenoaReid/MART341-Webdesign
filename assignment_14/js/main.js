var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

// blue triangle
ctx.beginPath();
ctx.lineTo(145, 405);
ctx.lineTo(195, 305);
ctx.lineTo(245, 405);
ctx.closePath();
ctx.fillStyle = '#0F2F50';
ctx.fill();
ctx.stroke();


// blue triangle 2
ctx.beginPath();
ctx.lineTo(200, 300);
ctx.lineTo(250, 400);
ctx.lineTo(300, 300);
ctx.closePath();
ctx.fillStyle = '#0F2F50';
ctx.fill();
ctx.stroke();


//blue triangle 3
ctx.beginPath();
ctx.lineTo(255,405);
ctx.lineTo(305,305);
ctx.lineTo(355,405);
ctx.closePath();
ctx.fillStyle = '#0F2F50';
ctx.fill();
ctx.stroke();

//blue triangle 4
ctx.beginPath();
ctx.lineTo(200,295);
ctx.lineTo(250,195);
ctx.lineTo(300,295);
ctx.closePath();
ctx.fillStyle = '#0F2F50';
ctx.fill();
ctx.stroke();

//fill text
ctx.font = '30pt Courier';
ctx.strokeText('DICEBERG Ahead!', 100, 100);
ctx.lineWidth = 5;

//Author
ctx.font = '15pt Courier';
ctx.fillStyle = 'black';
ctx.fillText('Making TTRPG Content', 100, 150);

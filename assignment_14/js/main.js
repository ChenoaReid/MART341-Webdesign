var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

const image = new Image();
image.src = "C:\Users\cnoaa\Documents\GitHub\MART341-Webdesign\assignment_13\images\IMG_0481.PNG";

image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
canvas.setAttribute("DBA Logo");

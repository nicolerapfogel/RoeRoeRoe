var x = 100; 
var y = 420;
var speed = 2.5;
var a = 100
var b = 270
var c = 90
var d = 270
var e = 180
var f = 390
var g = 180
var h = 390
var i = 310
var j = 280
var k = 320
var l = 280
var m = 380
var n = 395
var o = 380
var p = 380


let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let xpos, ypos;
let xspeed = 4;
let yspeed = 3.5;
let xdirection = 1;
let ydirection = 1;
let bounce = 3;

let new_z = -500;


function preload(){
  img1=loadImage('images/rowboat.png') 
  img2=loadImage('images/waves.png')
  img3=loadImage('images/vote.png')
  img4=loadImage('images/blm.png')
  img5 = loadImage('images/lgbtqflag.jpeg')
  img6 = loadImage('images/intersectional.png')
  img7 = loadImage('images/refugees.png')
  
}

function setup(){
createCanvas(800, 600);
textAlign(CENTER, CENTER);
xpos = width / 2;
ypos = height / 2;

 
}

function draw(){
    background(182, 213, 239);
    //from p5.js bounce example, but image instead of ellipse
    xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
    if (xpos > width - bounce || xpos < bounce) {
    xdirection *= -1;}
    if (ypos > height - bounce || ypos < bounce) {
       ydirection *= -1;}
image(img3, xpos, ypos, 65, 65);


  x += speed; 
  if(x > width){
    x = new_z; }
 
  image(img1, x, y, 330,150);
  image(img2, 0, 450, 800, 150)
  fill(0)
  textSize(50)
  textAlign(CENTER, CENTER)
  

  fill(255,0,0);
text('Roe Roe Roe', 400, 150);
fill(0, 0, 255);
text('Your Vote', 400, 200)
fill(255, 0, 0);
textSize(20);
noStroke()
if(mouseIsPressed)
fill(0, 0, 255);
text('2020', mouseX, mouseY);


stroke(0)
a += speed; 

  if(a > width){
    a = new_z; 
}
fill(122, 68, 20);
rect (a, b, 8, 200);

c += speed; 

  if(c > width){
    c = new_z; }
image(img4, c, d, 100, 70)

e += speed; 

  if(e > width){
    e = new_z; }
rect(e, f, 8, 130)
g += speed; 

  if(g > width){
    g = new_z; }
image(img5, g, h, 90, 70)

i += speed; 

  if(i > width){
    i = new_z; }
rect(i, j, 8, 150)
k += speed; 

  if(k > width){
    k = new_z; }
image(img6, k, l, 120, 90)

m += speed; 

  if(m > width){
    m = new_z; }
rect(m, n, 8, 100)
o += speed; 

  if(o > width){
    o = new_z; }
image(img7, o, p, 100, 90)


} 
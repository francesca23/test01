function setup() {
  createCanvas(600,400);
  background(228,228,228);
}

function draw() {
  line(pmouseX,pmouseY,mouseX,mouseY);
}
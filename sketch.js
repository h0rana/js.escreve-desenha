function setup() {
  createCanvas(600, 600);
  background("pink");
}

function draw() {
  stroke("green");
fill("white");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
  
}
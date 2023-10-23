let yPos = 200;
let y = 600;
let c = -200;
let s = -100

function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(110, 201, 250); 
  
  //sun
  noStroke()
  fill(235, 125, 52);
  ellipse (300,s,200,200);
  s = s + 2;
  
  //clouds
  noStroke();
  fill(255, 253, 242);
  ellipse(0,yPos,200,200);
  ellipse(200,yPos,200,200);
  ellipse(400,yPos,200,200);
  ellipse(100,yPos,200,100);
  ellipse(300,yPos,200,100);
  yPos = yPos + 2;
 if(yPos > 800)
    {
      yPos = -100
    }
  
  ellipse(0,c,200,200);
  ellipse(200,c,200,200);
  ellipse(400,c,200,200);
  ellipse(100,c,200,100);
  ellipse(300,c,200,100);
 c = c + 2;
  if(c > 800)
    {
      c = -100
    }
  
  //grass
  fill(62, 173, 86)
  rect(0,y,400,200);
  y = y + 2
 
  
  //wings
  noStroke();
  fill(180,30,80);
  triangle(50,75,50,175,185,175);
  triangle(50,350,30,175,185,200);
  triangle(215,175,350,75,350,175);
  triangle(215,200,350,350,370,175);
  triangle(295,370,300,290,350,350);
  triangle(105,370,100,290,50,350);
  triangle(50,175, 20,100,50,75);
  triangle(350,175,380,100,350,75);
  
  
  //body
  stroke(0);
  strokeWeight(5);
  fill(300,200,0)
  ellipse(200,275,50,70);
  ellipse(200,300,50,70);
  ellipse(200,325,50,70);
  rect(175,100,50,150,10);
  
    //head
  fill(250,50,150);
  stroke(0);
  ellipse(200,100,75,75);
  
  
  //bottom wingdecor
  fill(250,50,150);
  stroke(300,200,0);
  strokeWeight(5);
  ellipse(75,330,25,25);
  ellipse(325,330,25,25);
  ellipse(65,300,30,30);
  ellipse(335,300,30,30);
  ellipse(75,250,50,50);
  ellipse(325,250,50,50);
  ellipse(120,225,40,40);
  ellipse(280,225,40,40);
  
  //top wingdecor
  ellipse(75,140,50,50);
  ellipse(325,140,50,50);
    
    //antennas
  stroke(0)
  line(100,45,175,100);
  line(300,45,225,100);
}
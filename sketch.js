function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hour = hour();
  minute = minute();
  second = second();
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-90)

  

  scAngle = map(second,0,60,0,360);
  minAngle=map(minute,0,60,0,360)
  hourAngle=map(hour%12,0,12,0,360)



  // stroke(255,0,0);
  // strokeWeight(7);
  // line(0,0,100,0);
  // translate(0,0)

  push()
  rotate( scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  
  push()
  rotate(minAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  
  push()
  rotate(hourAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)

  stroke(0,255,0)
  arc(0,0,280,280,0,minAngle)

  stroke(0,0,255)
  arc(0,0,260,260,0,hourAngle)


  drawSprites();
}










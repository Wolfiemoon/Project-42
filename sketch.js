var iss, spacecraft, bg
var hasDocked=false
var sci1, sci2, sci3, sci4 
function preload(){
bg=loadImage("spacebg.jpg")
iss1=loadImage("iss.png")
sci1=loadImage("spacecraft1.png")
sci2=loadImage("spacecraft2.png")
sci3=loadImage("spacecraft3.png")
sci4=loadImage("spacecraft4.png")

}


function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(280, 240);
  spacecraft.addImage(sci1)
  spacecraft.scale=0.2
  iss=createSprite(330,130)
  iss.addImage(iss1)
  iss.scale=0.5
}

function draw() {
  background(bg);
  spacecraft.addImage(sci1)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-5
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sci3)
      spacecraft.x=spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sci2)
      spacecraft.x=spacecraft.x+1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sci1)
      spacecraft.y=spacecraft.y+5
    }
  }  
    if(spacecraft.y <= (iss.y+70)&&spacecraft.x <= (iss.x-10)){
      hasDocked=true
      textSize(25)
      fill(255)
      text("Docking Successful", 200, 300)
    }  
  drawSprites();
}
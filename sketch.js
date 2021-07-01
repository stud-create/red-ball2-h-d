const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//variables
var engine, world
var ball,box,homebg,lives,bg
var ballimg1,ballimg2,ballimg3,ballimg4,ballimg5,ballimg6,ballimg7,bgimg,boximg1,boximg2,homebgimg,livesimg,arrowimg1,arrowimg2,arrowimg3
var ground
var arrow1,arrow2,arrow3
function preload(){
ballimg1=loadImage("ballbasic.png")
ballimg2=loadImage("ball2.png")
ballimg3=loadImage("ball3.png")
ballimg4=loadImage("ball4.png")
ballimg5=loadImage("ball5.png")
ballimg6=loadImage("ball6.png")
ballimg7=loadImage("ball7.png")
bgimg=loadImage("bgimg.png")
boximg1=loadImage("box1.png")
boximg2=loadImage("box2.png")
homebgimg=loadImage("homebg.jpg")
livesimg=loadImage("lives.png")
arrowimg1=loadImage("leftarrow.png")
arrowimg2=loadImage("rightarrow.png")
arrowimg3=loadImage("circlepng")
}
function setup(){
  createCanvas(1000,500)
  engine = Engine.create();
  world = engine.world;

//bg = createSprite(500,220,20,20)
//bg.addImage(bgimg)
//bg.velocityX=-1

ball = new Ball(100,50,20);
ground = new Ground(500,325,1000,20)

}
function draw(){
  background(bgimg);
 Engine.update(engine);
//making bg infinite
 //if(bg.x<200){
//bg.x=500
 //}
 ball.display()
 ground.display()
 drawSprites()
  
}

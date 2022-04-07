var database;
var fundo;
var gamestate = 0;
var playercount;
var distance = 0;
var allPlayers;

var form, player, game;
var img1,img2,img3,img4,track1
var cars, car1, car2, car3, car4;

function preload(){
  
  img1=loadImage("car1.png")
  img2=loadImage("car2.png")
  img3=loadImage("car3.png")
  img4=loadImage("car4.png")
  track1=loadImage("track.jpg")

}






function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth ,displayHeight);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("grey");

  if(playercount === 4){
    game.update(1);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
  if(gamestate=== 2){
    game.end();
  }
  drawSprites();
}


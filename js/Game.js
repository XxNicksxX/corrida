class Game {
    constructor(){

    }

    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gamestate: state
        });
    }

    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercountref = await database.ref("playercount").once("value");
            if(playercountref.exists()){
                playercount = playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        car1.addImage(img1)
        car2.addImage(img2)
        car3.addImage(img3)
        car4.addImage(img4)


        cars = [car1,car2,car3,car4];
   
   
      
   
   
    }

    play(){
        form.hide();
        textSize(30);
        text("Começou!",150,100);
        Player.getPlayerInfo();
        player.getCarsend();
        if(allPlayers !== undefined){
            //var display_pos = 130;
             image(track1,0,-displayHeight*4,displayWidth,displayHeight*5)

            //endereço da matriz dos carros
            var index = 0;
            
            // posicao x e y do carros
            var x = 200;
            var y;

            
            for(var plr in allPlayers){

                //adicione 1 para o endereço
                index = index + 1;

                // distancia de cada carro
                x = x + 200;

                //use o banco de dados p armaxenar os carros na pos y
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                    fill("black")
                    text(player.name,cars[index-1].x-20,cars[index-1].y+70)

                    
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;

                }else{
                    cars[index-1].shapeColor = "black";
                    //display_pos +=20;

                     //textSize(15);
                     //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
                }
            }

            
        }

        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50;
            player.update();
      }
      
      if (keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=20;
        player.update();
    }
      
   
      
      
      
      if(player.distance>4000){
        gamestate=2
        player.ranked+=1
        Player.updateCarsend(player.ranked)
      }
    
    }
  end(){
    text("o jogo acabou")
     console.log(player.ranked) 
  }

}
class Form {
    constructor(){
        this.input = createInput("nome");
        this.button = createButton("vai!");
        this.greeting = createElement("h2");
        this.reset = createButton("recomeçar")
    }

    display(){
        var title = createElement('h2');
        title.html("Seven Run");
        title.position(displayWidth/2-30,0);
        this.input.position (displayWidth/2,displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 70,displayHeight/2);
        this.reset.position(displayWidth-100,20)
       
       this.reset.mousePressed(()=>{
       location.reload()
       player.updateCount(0)
       game.update(0)
       Player.updateCarsend(0)
      })
    
       
       
       
       
       
       
       
       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            
            playercount +=1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);

            this.greeting.html("preparado para correr "+player.name+"?");
            this.greeting.position(displayWidth/2+20,displayHeight/2);
        });
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}
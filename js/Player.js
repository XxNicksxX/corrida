class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.ranked = null
    }

    getCount(){
        var playerCountRef = database.ref('playercount');
        playerCountRef.on("value",(data)=>{
            playercount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playercount: count
        })
    }

    update(){
        var playerIndex = "players/player "+ this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance: this.distance
        });
    }

    static getPlayerInfo(){
        var playerInforRef = database.ref("players");
        playerInforRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

    getCarsend(){
        database.ref("carsend").on("value",(data)=>{
            this.ranked=data.val()
        })
    }

    static updateCarsend(ranked){
        database.ref("/").update({
            carsend:ranked
        })
        
    }


}
let IsFragrant = true;

class Flower{
    constructor (Name, Season, Color){
        this.name = Name;
        this.color = Color;
        this.season = Season;
    }
    NAME(){
        console.log(`The ${this.name} blooms in ${this.season}.`);
        document.getElementById("output").innerHTML +=`The ${this.name} blooms in ${this.season}.<br>`;
    }
    
    isFragrant(){
        if(IsFragrant = true){
            console.log(`The ${this.name} is fragrant.`);
            document.getElementById("output").innerHTML +=`The ${this.name} is fragrant.<br>`;
        }else if(IsFragrant = false){
            console.log(`The ${this.name} is not fragrant.`);
            document.getElementById("output").innerHTML +=`The ${this.name} is not fragrant.<br>`;
        }
    }

    COLOR(){
        console.log(`The ${this.name} a beautiful ${this.color} color.`);
        document.getElementById("output").innerHTML +=`The ${this.name} a beautiful ${this.color} color.<br>`;
    }

}

const FLOWER = new Flower("Rose", "Spring", "Red");
FLOWER.NAME();
FLOWER.isFragrant();
FLOWER.COLOR();


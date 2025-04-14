class Warrior {
    constructor(life,power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        return this.power; 
    }
    defend(damage) {
        this.life -= damage;
        console.log(`Vida restante: ${this.life}`);
    }
     
}

export default Warrior; 





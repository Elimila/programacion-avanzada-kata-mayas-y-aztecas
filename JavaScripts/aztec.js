
import Warrior from "./warrior.js";

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkNesquik() {
        this.life += 10;
        console.log(`El azteca ha bebido Nesquik. Nueva vida: ${this.life}`);
        

    }
}

export default Aztec; 



import Warrior from './warrior.js';

class Maya extends Warrior {
    constructor(life, power) {
        super(life,power);
    }

    drinkColaCao() {
        this.power += 10; 
        console.log(`El maya ha bebido Cola Cao. Nuevo Poder: ${this.power}`);

    }
}

export default Maya; 

import Warrior from './warrior.js';
import Maya from './maya.js';
import Aztec from './aztec.js';

// prueba  Warrior 

const warrior1 = new Warrior(100, 20);
console.log(warrior1);
console.log(`El guerrrero vuelve a atacar con un poder de: ${warrior1.attack()}`);
warrior1.defend(30);
console.log(`El guerrero vuelve a atacar con un poder de:  ${warrior1.attack()}`)
warrior1.defend(50);

// Prueba Maya 

const maya1 = new Maya(100,15);
console.log(`El maya ataca con un poder de: ${maya1.attack()}`);
maya1.drinkColaCao(); 
console.log(`El maya ataca otra vez con un poder de: ${maya1.attack()}`);
maya1.defend(40); 

// Prueba Azteca

const aztec1 = new Aztec(120,18);
console.log(aztec1);
console.log(`El azteca ataca con un golpe de: ${aztec1.attack()}`);
aztec1.drinkNesquik();
console.log(`El azteca ataca otra vez con un poder de: ${aztec1.attack()}`);
aztec1.defend(60);


// Pelea Final 

console.log('-----COMIENZA LA PELEA-----')

const mayaFinal = new Maya(100, 20); 
const aztecFinal = new Aztec(120,18); 


console.log('Vida inicial del azteca:', aztecFinal.life);
console.log('Poder inicial del mya:', mayaFinal.power);


// maya bebe Cola Cao

mayaFinal.drinkColaCao(); 

const damaByMaya = mayaFinal.attack();
console.log(`Maya ataca con poder: ${damaByMaya}`); 
mayaFinal.defend(damaByMaya);

console.log('-----FIN DE LA PELEA-----')





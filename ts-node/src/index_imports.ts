//para usar un alias para renomnrar la clase, en realidad no se renomnbra
//de igual forma usar asterisco para importar todos los exports
//import  * as HeroClases  from "./classes/Hero";
import  {Hero}  from "./classes/Hero";
//en las exportaciones por defecto no se usan llaves, but se agrega el export default en el ts
//import powers,{Power} from './data/powers';


console.log('Hola Mundo!!!');



const ironMan = new Hero('Iron Man', 600, 38);

console.log(ironMan);
console.log(ironMan.power);




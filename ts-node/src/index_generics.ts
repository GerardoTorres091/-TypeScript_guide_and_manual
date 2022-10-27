import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
import { Hero,Villain } from './interfaces';



/* printObject( 123 );
printObject( new Date() );
printObject( {a:1,b:2,c:3} );
printObject( [1,2,3,4,5,6,7] );
printObject( 'hola mundo' ); */


//yo puedo indicarle a una funcion generica que tipo debe retornar
/* console.log(genericFunction(3.1416456787));
console.log(genericFunction('HOLA Mundo')); */


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel );
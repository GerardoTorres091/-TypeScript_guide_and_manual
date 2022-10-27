function printToConsole( constructor: Function ){
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false):Function => {
    if (print){
        return printToConsole
    }else{
        return () => {}
    }
}


const bloquearPrototipo = function(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


//decorador es una funcion que se va a ejecutar en el momento de transpilacion del código
@bloquearPrototipo
@printToConsoleConditional( true )
export class Pokemon {
    public publicApi:string = 'https://pokeapi.co/api/v2/';

    constructor(
        public name: string
    ){}
}
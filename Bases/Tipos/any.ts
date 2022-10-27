//funcion anonima autoinvocada
(() => {

    //tratar de evitarlo siempre
    //al usar let y no asignar valor, ES DE TIPO ANY, al usar const no puede declararse sin inicializarse
    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    //al usar any se pierde toda la ayuda de autocompletar de TS  
    console.log(avenger.charAt(0));
    //podemos hacer casting para tratarlo como un string pero realmente no se está cambiando el tipo
    console.log((avenger as string).charAt(1));

    avenger = 150.23121212;  
    //de igual forma no tenemos la ayuda de ts
    console.log(avenger.toFixed(2));
    //tenemos otro tipo de casteo que es entre <>
    console.log(<number>avenger.toFixed(2));

})()
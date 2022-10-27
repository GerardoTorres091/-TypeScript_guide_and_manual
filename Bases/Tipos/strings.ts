//funcion anínima autoinvocada
(() => {

    const batman:string = 'Batman'; //comilla simple suele ser mas ligero 
    const linternaVerde:string = "Linterna Verde"; //ventaja se puede escribir comilla simple dentro
    const volcanNegro:string = `Héroe Volcan Negro`;//usando ´backticks´

    //nos permite hacer concatenaciones interesantes
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    //checar posibles errores
    //acepta el toUpperCase apesar de que sabe que batman no tiene más de 6 caracteres batman[10].toUpperCase()
    //se puede usar nullCheck ? si batman[10] tiene algo entonces has el toUpperCase sino no hagas nada batman[10]?.toUpperCase()
    //al ser undefined se puede usar || para pasar al siguiente fragmento de codigo 
    console.log(batman[10]?.toUpperCase() || 'no está presente');

})()
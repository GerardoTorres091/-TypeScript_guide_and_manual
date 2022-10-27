//funcion anónima autoinvocada
(() => {

    let isSuperman:boolean = true;
    let isBatman:boolean   = false;

    //puedo usar ternarios siempre y cuando el valor que se le asigne sea boolean
    isSuperman = ( isBatman ) ? true : false;

    console.log({ isBatman });

})()
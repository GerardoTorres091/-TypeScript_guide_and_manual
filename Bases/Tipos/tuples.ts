//funcion anínima autoinvocada
(() => {

    const hero:[string, number, boolean] = ['Dr Strange',100, true];

    //hero en la posicion 0 deber string gracias a que asi se definió la tupla
    //hero[0] = 50;

    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero);

})()
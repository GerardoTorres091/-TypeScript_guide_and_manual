(() => {

    //una function que no esta el return inplicito va a regresar undefined, undefined no es lo mismo que null
    //void se usa para indicar que no regresa nada, por lo cual no puedo usar return en la funcion pero si usar return;
    function callBatman():void{
        return;
    }

    //arrow function
    const callSuperman = ():void => {
        return;
    };

    const a = callBatman();
    console.log(a);

})()
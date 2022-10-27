//crear funcion anonima autoinvocada
(() => {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const avtivateBatiSignal = ():string => {
        return 'Batiseñal activada';
    }


    const heroName = returnName();
    

})()
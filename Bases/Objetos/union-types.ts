(() => {
    //type se usa para definir un tipo, obligar o poner reglas 
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    };

    let myCustomVariable: (string | number | Hero) = 'Gerardo';

})()
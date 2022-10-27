(() => {
    //type se usa para definir un tipo, obligar o poner reglas 
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    };

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['súper velocidad','viajar en el tiempo']
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['súper velocidad'],
        getName() {
            return this.name;
        },
    };

})()
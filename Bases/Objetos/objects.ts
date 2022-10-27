(() => {
    //definirle el tipo a un objeto además definirle una funcion que asu vez tambien tiene definicion
    let flash: { name: string, age?: number, powers: string[], getName?: ()=>string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['súper velocidad','viajar en el tiempo']
    };

    flash = {
        name: 'Clark Knet',
        //age: 60,
        powers: ['super fuerza'],
        getName(){
            return this.name
        }
    };

})()
(() => {

    //una interfaz funciona muy parecido a un type, esta eccha para ayudarnos a restringir como lucen nuestos objetos
    //las interfaces y los tipos han crecido de forma similar 
    //los tipos type no son expandibles
    //las interfaces si se pueden expandir 
    //son mucho mas usadas para definir peticiones http o como lucen peticiones http
    //los types son mas usados en patrones como redux para definir que tipos de aciones son las permitidas en algun objeto
    interface Hero  {
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
(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    //la desestructuracion consiste en tomar el objeto anterior y sacar las propiedades que me interesan
    const { poder, vision } = avengers
    console.log(poder, vision.toUpperCase());

    //desestructuracion desde una funcion
    const printAvenger = ({ ironman, ...resto }: Avengers) => {
        console.log(ironman, resto.vision);
    }


    //desestructuracion de arreglos
    const avengersArr: [string, string, string] = ['cap. america', 'Ironman', 'Hulk'];
    //al momento de la desestructuracion se le puede asignar el nombre que se quiera
    const [capitan, ironman,] = avengersArr;
    console.log(ironman, capitan);

})()
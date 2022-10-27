(() => {

    const addNumber = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = () => `el mundo está salvado`;

    //se puede definir para que sea de tipo function ya que tambien seria un tipo
    //let myFunction: Function;

    //declarar que es una funcion que regresa un numero y que recibe
    let myFunction: () => number;

    //myFunction = 10;

    /* myFunction = addNumber;

    myFunction = greet;

    myFunction = saveTheWorld; */

})()
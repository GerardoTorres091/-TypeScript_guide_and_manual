//funcion anínima autoinvocada
(() => {

    let avengers:number = 10;
    const villians:number = 10;
    
    if(avengers < villians){
        console.log('Estamos en problemas');
    }else{
        console.log('Nos salvamos');
    }

    //tener cuidado con NaN ya que para js NaN es un número y TS lo considera igual
    avengers = Number('55A');
    console.log({ avengers }); //NaN pero TS el código como válido

})()
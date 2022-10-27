(() => {

    //requiero que solo clarck sea obligatorio, osea solo el primer elemento sea requerido y todo lo demas no y 
    //recibir cualquier cantidad de parametros
    //aqui podemos usar rest arguments -- operador rest ...
    const fullName = (firstName: string, ...restArgs: string[]) => {

        //puedo usar join para unir todos los elementos que vienen de rest ...
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clarck','Joseph','Knet');

    console.log({ superman });
    

})()
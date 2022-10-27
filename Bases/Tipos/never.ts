(() => {

    //indico que el valor de tipo de dato de retorno debe ser never
    //despues de llamar esta funcion ya no va a seguir su código, "va a reventar"
    const error = (message: string):never => {

        throw new Error(message);

    }

    error('auxilio')

})()
(() => {

    //el objetivo de un enum es ayudar a trabjar con valores con un sentido semantico por ejemplo
    //al ver un numero poder decir .-ese es un valor alto, ó .-ese es un valor bajo
    //permitir tener sentido semantico para establecer valores

    //por defecto min : 0, medium : 1 , max 2, pero tambien puedo definir sus valores 
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    let currentAudio = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);

})()
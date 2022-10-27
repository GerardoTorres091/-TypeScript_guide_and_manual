(()=>{

    //patro singleton
    //controlar la manera en la cual nuestras intancias son ejecutas, o para manejar una unica instancia a traves de toda la app
    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor(
            public name: string
        ){}

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('soy apocalipis el unico');
            }

            return Apocalipsis.instance;
        }
    }



    const apocalipsis = Apocalipsis.callApocalipsis();
    /* const apocalipsis = new Apocalipsis('soy apocalipsios');
    const apocalipsis2 = new Apocalipsis('soy apocalipsios 2');
    const apocalipsis3 = new Apocalipsis('soy apocalipsios 3'); */
    console.log(apocalipsis);

})()
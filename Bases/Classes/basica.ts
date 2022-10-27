(() => {
    class Avenger {
        //private: solo acceso a esta propiedad dentro de esta clase por ejemplo en métodos(setter, getter, etc)
        //private name: string;
        //public vista desde afuera de la clase
        //public team: string;
        //public realName?: string;
        //static: se puede acceder a la propiedad de manera global haciendo referencia a la clase (NO a la instancia)
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name
        };

        //Lo más común es declarar las variables desde el constructor EXEPTO propiedades estaticas
        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) { }

        public bio() {
            return `${this.name} (${this.team})`;
        }
    }


    const antman: Avenger = new Avenger('AntMan', 'Wasp', 'pedro perez');
    console.log(antman.bio());

})() 
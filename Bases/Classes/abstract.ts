(()=>{

    //sirven para crear otras clases o para asegurarse de que otras clases van a implementar lo que nosotros definamos
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{

        public salvarMundo():string{
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante{

        public conquitarMundo():string{
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');

    console.log(wolverine.salvarMundo());
    console.log(magneto.conquitarMundo());

    const printName = (character:Mutante)=>{
        console.log(character.realName);
    }

    printName(wolverine);
})()
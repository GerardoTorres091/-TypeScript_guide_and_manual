(()=>{

    interface Xmen {
        name: string;
        realName: string;
        muntantPower(id:number):string;
    }

    interface Human {
        age: number;
    }

    //no podemos extender de interfaces, se requiere implementar 
    class Mutant implements Xmen, Human{
        
        constructor(
            public age:number,
            public name:string,
            public realName:string
        ){}

        muntantPower(id: number): string {
            return 'prueba';
        }
    }

})()
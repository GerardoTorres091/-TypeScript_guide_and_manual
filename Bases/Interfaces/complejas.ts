(()=>{

    //cuando la interfaz ya tiene más de un nivel, ese otro nivel pasarlo a una nueva interfaz
    interface Client {
        name: string;
        age?: number;
        address ?: Address;
        //el que debe implementar esta función debe ser una clase, una interfaz no puede, solo dice como debe de lucir el objetct
        //aunque no es lo ideal: lo mejor es crear una clase
        getFullAddress(id:string):void;
    }

    interface Address {
        id: number;
        zip: string;
        city: string
    }

    const client:Client = {
        name: 'Gerardo',
        age: 25,
        address: {
            id: 125,
            zip: '94410b',
            city: 'Orizaba'
        },
        getFullAddress(id: string){
            return this.address;
        }
    }

    const client2: Client ={
        name: 'otro nombre',
        age: 30,
        getFullAddress(id: string){
            return this.address;
        }
        
    }

})()
import powers from "../data/powers";

//export para poder usar la clase desde otro archivo que lo importe
export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power():string{

        return powers.find(power => power.id === this.powerId)?.desc || 'not found';
    }
}
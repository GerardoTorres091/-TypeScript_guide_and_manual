(() => {

    //en js la forma en la que se definen las propiedad es un poco ambigüa no tan sencilla
    class Avenger {
        name;
        power;

        constructor(name = 'no name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyAvenger extends Avenger {
        flying;

        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }


    const hulk = new Avenger('hulk', 9001);
    const falcon = new FlyAvenger('Falcon', 50);


    console.log(hulk);

})()
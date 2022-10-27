(() => {

    class Avenger {


        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log('construct init')
        }

        //protected se puede accerder desde clases a las que fue extendida en este caso la clase avenger
        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
        }

        set fullName(name: string) {
            this.name = name;
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        getFullNameFromXmen() {
            console.log(super.getFullName());
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    //console.log(wolverine.fullName = 'nuevo');
    //console.log(wolverine.fullName);
    //console.log(wolverine.getFullNameFromXmen());

})()
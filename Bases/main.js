"use strict";
(() => {
    ;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['súper velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['súper velocidad'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        muntantPower(id) {
            return 'prueba';
        }
    }
})();
(() => {
    const client = {
        name: 'Gerardo',
        age: 25,
        address: {
            id: 125,
            zip: '94410b',
            city: 'Orizaba'
        },
        getFullAddress(id) {
            return this.address;
        }
    };
    const client2 = {
        name: 'otro nombre',
        age: 30,
        getFullAddress(id) {
            return this.address;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map
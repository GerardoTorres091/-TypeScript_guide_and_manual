//crear funcion anonima autoinvocada
(() => {

    const fullname = (firstNmae:string, lastName:string):string => {

        return `${firstNmae} ${lastName}`;

    }

    const name = fullname('tony', 'stark');
    

})()
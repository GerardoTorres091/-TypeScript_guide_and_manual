
//solo que tenga export podrá accederse desde afuera del namespace
namespace Validations {

    export const validateText = (text:string):boolean =>{
        return (text.length > 3) ? true : false;
    }

    export const validateDate = (myDate: Date):boolean=>{
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    }

}

console.log(Validations.validateText('HOLA'));
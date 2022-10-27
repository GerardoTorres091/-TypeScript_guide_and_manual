

export const printObject = (argument: any) => {
    console.log(argument);
}


export function genericFunction<T>( argument:T ) {
    return argument;
}

//en arrow function
export const genericFunctionArrow = <T>(argument: T) => argument;
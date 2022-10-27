(() => {

    //simbolo ? le dice a typeScript que puede que venga o que no
    const fullname = (firstNmae: string, lastName?: string, upper: boolean = false): string => {

        if (upper) {
            //usar el operador || y sino viene nombre podemos poner otro mensaje
            return `${firstNmae} ${lastName || 'no lastname'}`.toUpperCase();
        }
        //usar el operador || y sino viene nombre podemos poner otro mensaje
        return `${firstNmae} ${lastName || 'no lastname'}`;

    }

    const name = fullname('tony');


})()
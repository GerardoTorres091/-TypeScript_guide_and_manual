(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, thor, captainAmerica];

    //uso de for of, diría que es muy parecido a foreach
    for (const avenger of avengers) {
        console.log(avenger);
    }

})()
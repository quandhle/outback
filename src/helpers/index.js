<<<<<<< HEAD
export function formatMoney(pennies) {
    pennies = parseFloat(pennies);

    if (isNaN(pennies)) {
        return 'TBA';
    }

    const dollars = (pennies/100).toFixed();

    return dollars;
}
=======
export function formatMoney(pennies){
    pennies = parseFloat(pennies);

    if(isNaN(pennies)){
        return 'TBA';
    }

    const dollars = (pennies / 100).toFixed(2);

    return `$${dollars}`;
}
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47

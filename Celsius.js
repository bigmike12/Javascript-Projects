const convertFahrToCelsius = (F) => {
    if (isNaN(F)) {
        return `${F} is not a valid number but a ${typeof F}`
    } else {
        C = (F - 32) * 5 / 9;
        return C.toFixed(4)
    }
}

console.log(convertFahrToCelsius(0));


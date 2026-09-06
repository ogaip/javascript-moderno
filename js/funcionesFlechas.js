const azarFlecha = (min, max) => {
    return Math.floor(Math.random() * (max - min )) + min;
}

console.log(azarFlecha(10, 21));
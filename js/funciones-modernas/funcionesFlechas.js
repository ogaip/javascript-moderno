const azarFlecha = (min, max) => {
    return Math.floor(Math.random() * (max - min )) + min;
}

const azarFlecha2 = (min, max) => Math.floor(Math.random() * (max - min )) + min; 
// en una sola línea devuelve el valor resultante



console.log(azarFlecha(10, 21));
console.log(azarFlecha2(1, 11));
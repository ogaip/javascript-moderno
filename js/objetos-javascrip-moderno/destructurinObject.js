const nombre = 'Kitty';

const gato = {
    nombre : 'Horacio   ',
    duerme : true,
    raza : 'Persa',
    edad : 2,
    color : 'Blanco',
    enemigos : ['Perros', 'Agua'],
    marron : {
        color : 'Marron',
        pelo : 'Corto'
    },
    otros: {
        amigos: ['sambi', 'mecanico'],
        favoritos: {
            comida: 'Pescado',
            bebida: 'Agua'
        }
    },
    comer(alimento) {
        console.log(`${this.nombre} Comiendo ${alimento}`);
    }
}

const nombreGato = gato.nombre;

const { nombre : nombreSuperGato, edad, duerme } = gato;
console.log(nombreSuperGato, edad, duerme); 

const {amigos : amigosGatos} = gato.otros;
const { favoritos : comidaFavorita } = gato.otros;
console.log(amigosGatos);
console.log(comidaFavorita);
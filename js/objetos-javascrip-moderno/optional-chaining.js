const gato = {
    nombre: 'Kitty',
    raza: 'Persa',
    edad: 2,
    color: 'Blanco',
    enemigos: ['Perros', 'Agua'],
    marron: {
        color: 'Marron',
        pelo: 'Corto'
    },
    comer(alimento) {
        console.log(`${this.nombre} Comiendo ${alimento}`);
    },
    listarEnemigos(){
        this.enemigos.forEach(enemigo => {
            console.log(enemigo);
        })
    }
}

gato.comer('Pescado');
gato.listarEnemigos();
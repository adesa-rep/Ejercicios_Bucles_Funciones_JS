// Escribe una función que calcule el promedio de duración de una lista de películas.
// Recibe un array de películas, cada una con su duración en minutos.
// La función debe devolver el promedio de duración de todas las películas.

const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
  // const sumTotal = movies.reduce((acumulador, elementoAcual) => {}, valorIncialAcumulador);
  const sumTotal = movies.reduce((acumulador, movie) => {
    return acumulador + movie.duration; //valor que devuelve en cada iteracion. Esto es como hacer un for each y declarar el acumulador sumTotal por fuera del bucle.
  }, 0);

  const promedio = sumTotal / movies.length;

  console.log('el promedio de la duracion de las peliculas es: ', promedio);
}

averageMovieDuration(movies);

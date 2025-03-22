// Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
// Averigua como hallar el año actual en tus cálculos.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
  //Para hallar el año actual utilizamos el constructor de objetos de fecha `Date` y extraemos solo el año con el metodo getFullYear().
  const añoActual = new Date().getFullYear();
  let ageActors = [];

  //esto no funciona porque los objetos se pasan por referencia... de modo que luego, al modificarlos, se modifica el original tambien.
  actors.forEach((actor) => {
    ageActors.push(actor);
  });

  ageActors.forEach((actor) => {
    actor.age = añoActual - actor.born;
  });

  console.log('original', actors);
  console.log('con edades', ageActors);
}

calculateActorsAges(actors);

//Nos encontraremos con que al intentar actualizar el array **ageActors** se modifica tambien **actors**, esto sucede porque los objetos se pasan por referencia y no por valor... de modo que al intentar modificarlos, se modifica el original tambien.

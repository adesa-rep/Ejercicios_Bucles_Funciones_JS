//Agrupa las películas de Star Wars por **década** de lanzamiento en un objeto donde las **claves** son las décadas y los **valores** son arrays de películas.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

//console.log(parseInt(starWarsMovies[0].releaseYear / 10) * 10)

let groupByDecade = {}; //clave ('decade') : valor (array con todos los titulo de esa decada)

starWarsMovies.forEach((movie) => {
  //necesitamos primero la decada para luego asignarle como valor el array con los titulos
  const decade = parseInt(movie.releaseYear / 10) * 10; //ej: 1977/10 = 197,7 -> esto se pasa a entero y se multiplica por 10 -> 1970

  //si no existe una clave con esa decada, no podemos hacer un push para añadir los titulos, asi que verificamos si existe y si no, lo iniciamos como un array vacio para luego añadir los titulos
  if (!groupByDecade[decade]) {
    groupByDecade[decade] = [];
  }

  //si no entramos en el condicional o si ya entramos se creo la clave con la decada, añadimos:
  groupByDecade[decade].push(movie.title);
});

console.log('peliculas agrupadas por dechadas: ', groupByDecade);

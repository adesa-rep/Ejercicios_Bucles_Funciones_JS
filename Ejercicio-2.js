//Dada una lista de películas, cuenta **cuántas** son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let before = 0;
let after = 0;
for (let movie of movies) {
  if (movie.releaseYear >= 2000) {
    after++;
  } else {
    before++;
  }
}

console.log('peliculas despues del año 2000: ', after);
console.log('peliculas antes del año 2000: ', before);

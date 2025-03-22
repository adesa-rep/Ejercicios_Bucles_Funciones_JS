//Dada una lista de canciones, clasifícalas en un objeto donde las **claves** sean los **géneros** y los **valores** sean arrays de canciones de ese género.

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

let songsByGenre = {}; //clave ('genre') : valor (array con todos los titulos de ese genero)

tracks.forEach((track) => {
  //necesitamos extraer el genero para luego usarlo como clave en el objeto songsByGenre
  const genre = track.genre;

  //verificamos si existe una clave con ese genero... y sino, la creamos inicializandola como un array vacio para luego hacer un push y añadir los titulos de las canciones que pertenecel a el.
  if (!songsByGenre[genre]) {
    songsByGenre[genre] = [];
  }

  // si existe la clave (o si acaba de ser creada), añadimos el titulos en el array que corresponde al valor de la clave del genero:
  songsByGenre[genre].push(track.title);
});

console.log('lista de canciones agrupadas por generos: ', songsByGenre);

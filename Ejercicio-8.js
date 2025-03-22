//Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  {
    name: 'David Bowie',
    influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground']
  },
  {
    name: 'Eddie Vedder',
    influences: ['The Who', 'Neil Young', 'Jim Morrison']
  },
  {
    name: 'Freddie Mercury',
    influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin']
  },
  {
    name: 'John Lennon',
    influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly']
  }
];

artists.forEach((artist) => {
  console.log('Artista: ', artist.name);
  artist.influences.forEach((influence) => {
    console.log('influencias: ', influence);
  });
  console.log('-----------------');
});

console.log('********-con for of-********');

for (let artist of artists) {
  console.log('Artista: ', artist.name);
  for (let influence of artist.influences) {
    console.log('influencias: ', influence);
  }
  console.log('-----------------');
}

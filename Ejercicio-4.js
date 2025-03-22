//Utiliza un bucle para encontrar la serie de dibujos animados **más antigua** en el array y guarda su nombre en una variable.

const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

//? Esto no funciona porque nunca se cumplira la condicion: serie.debut < serieAntigua.debut (el debul de la serie nunca ser menor que 0), quizas podriamos darle un valor muy grande como 100000 y comparar... pero es mas rebuscado
// let serieAntigua = {};
// serieAntigua.name = '';
// serieAntigua.debut = 0;
//? ---

//  si inicializamos serieAntigua con un valor del array de objetos cartoons, podemos compararlos entre si
//let serieAntigua = cartoons[0];
let serieAntigua = cartoons[2];

for (let serie of cartoons) {
  if (serie.debut < serieAntigua.debut) {
    serieAntigua = serie;
  }
}

console.log(
  `la serie mas antigua es "${serieAntigua.name}" y tuvo su debut en "${serieAntigua.debut}"`
);

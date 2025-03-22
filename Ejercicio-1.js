//Utiliza un bucle para filtrar personajes de Star Wars por la especie "**Human**" y guárdalos en un nuevo array llamado humanCharacters.

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

for (let character of characters) {
  if (character.species === 'Human') {
    humanCharacters.push(character.name);
  }
}

console.log('Personajes humanos', humanCharacters);

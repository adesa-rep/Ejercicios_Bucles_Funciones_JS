// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

mutants.push({
  name: 'me lo invento',
  power: 'regeneration'
});

function findMutantByPower(mutants, power) {
  // let isFound = false;
  let mutantsSamePower = [];
  mutants.forEach((mutant) => {
    if (mutant.power === power) {
      mutantsSamePower.push(mutant.name);
      // isFound = true;
    }
  });

  if (mutantsSamePower.length == 1) {
    console.log(`el mutante con el poder "${power}" es: "${mutantsSamePower}"`);
  } else if (mutantsSamePower.length > 1) {
    console.log(
      `los mutantes con el poder "${power}" son: "${mutantsSamePower}"`
    );
  } else {
    console.log(
      `no existe ningun mutante con el poder "${power}" en nuestra lista`
    );
  }

  // if (isFound) {
  //   console.log('found!');
  // } else {
  //   console.log('not found');
  // }
}

findMutantByPower(mutants, 'teleportation');
findMutantByPower(mutants, 'regeneration');
findMutantByPower(mutants, 'otro');

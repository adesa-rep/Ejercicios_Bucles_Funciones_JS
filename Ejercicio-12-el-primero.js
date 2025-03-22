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
  let isFound = false; //bandera para salir del bucle en cuanto se cumple el condicional y no seguir iterando (el metodo forEach no admite el uso del break)

  mutants.forEach((mutant) => {
    if (mutant.power === power) {
      isFound = true;
    }
  });

  if (isFound) {
    console.log(`Encontrado mutante con el poder ${power}!`);
  } else {
    console.log(`No se encuentra mutante con el poder ${power}!`);
  }
}

findMutantByPower(mutants, 'teleportation');
findMutantByPower(mutants, 'regeneration');
findMutantByPower(mutants, 'otro');

//Crea una **función** que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

const formatearMembers = (members) => {
  let nombreFormateado = '';
  members.forEach((member, index) => {
    nombreFormateado += ` "${member}"`;
    if (index < members.length - 1) {
      //para que tras cada elemento EXCEPTO el ultimo, halla una ,
      nombreFormateado += `, `;
    }
  });

  return nombreFormateado; //indicamos lo que devuelve esta funcion para poder usarlo en otras partes del codigo tras almacenarlo en una variable o constante
};

function findOldestXMen(xMen) {
  let año = xMen[0].year; //valor para empezar a comparar los años
  let masAntiguos = []; //guardar los nombres de los miembros del año mas antiguo

  for (let member of xMen) {
    if (member.year < año) {
      año = member.year;
      masAntiguos = [member.name]; //reiniciar el array con un solo elemento (si ponemos member.name lo estariamos convirtiendo en un array y no podriamos hacer push)
    } else if (member.year === año) {
      masAntiguos.push(member.name);
    }
  }

  let membersFormateados = formatearMembers(masAntiguos);

  console.log(
    `los miembros mas antiguos de los xMen son del año "${año}" y son: ${membersFormateados}`
  );

  return año, masAntiguos;
}

findOldestXMen(xMen);

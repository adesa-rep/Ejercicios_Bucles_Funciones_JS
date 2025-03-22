// Desarrolla una función que reciba un país por parámetro y devuelva su capital.
// Utiliza un objeto para almacenar los países y sus capitales.
// La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  const keys = Object.keys(capitals);
  if (capitals[country]) {
    //esto es casi casi como usar una bandera
    console.log(`la capital de "${country}" es "${capitals[country]}"`);
  } else {
    console.log(`Introduce un pais de la lista: `, keys);
  }
}

getCapital('Spain');
getCapital('Ireland');
getCapital('Portugal');
getCapital('Japan');

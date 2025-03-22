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
  let countryExists = false; //bandera

  for (let key in capitals) {
    if (key === country) {
      console.log(`la capital de "${key}" es "${capitals[key]}"`);
      countryExists = true;
    }
  }

  if (!countryExists) {
    console.log(`Introduce un pais de la lista: `, keys);
  }
}
getCapital('Spain');
getCapital('Ireland');
getCapital('Portugal');
getCapital('Japan');

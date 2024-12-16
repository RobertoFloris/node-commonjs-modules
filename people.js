const names = require('./names');
const hobbies = require('./hobbies');

function createPerson() {
  const name = createObj('Roberto', 'Floris');
  const hobbies = createHobbies('calcio', 'padel', 'develop');

  return {
    name,
    hobbies
  };
}

console.log(createPerson());



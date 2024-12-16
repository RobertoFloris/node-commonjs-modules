const createObj = require('./names');
const createHobbies = require('./hobbies');

function createPerson() {
  const name = createObj('Roberto', 'Floris');
  const hobbies = createHobbies('calcio', 'padel', 'develop');

  return {
    name,
    hobbies
  };
}

console.log(createPerson());



const createObj = require('./names');
const createHobbies = require('./hobbies');

function createPerson() {
  const name  = createObj('Roberto', 'Floris');
  const {hobbies} = createHobbies('calcio', 'padel', 'develop');
  
  const fullName = `${name.firstName}  ${name.lastName}`;
  
  return {
    fullName,
    hobbies
  };
}

console.log(createPerson());



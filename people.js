const createObj = require('./names');
const createHobbies = require('./hobbies');

function createPerson() {
  const name  = createObj('Roberto', 'Floris');
  let hobbies = createHobbies('calcio', 'padel', 'develop');

  const fullName = `${name.firstName}  ${name.lastName}`
  hobbies = hobbies.hobbies
  
  
  return {
    fullName,
    hobbies
  };
}

console.log(createPerson());



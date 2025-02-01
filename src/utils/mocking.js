// backend-project/src/utils/mocking.js
import bcrypt from 'bcrypt';

export const generateMockUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      firstName: `User${i}`,
      lastName: `Test${i}`,
      email: `user${i}@test.com`,
      password: bcrypt.hashSync('coder123', 10),
      role: Math.random() > 0.5 ? 'admin' : 'user',
      pets: [],
    });
  }
  return users;
};

export const generateMockPets = (num) => {
  const pets = [];
  for (let i = 0; i < num; i++) {
    pets.push({
      name: `Pet${i}`,
      species: i % 2 === 0 ? 'Dog' : 'Cat',
      age: Math.floor(Math.random() * 15) + 1,
    });
  }
  return pets;
};

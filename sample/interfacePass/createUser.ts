import { createUser } from './apiService';
import { User, user } from './user';

const obj: User = user;
createUser(obj)
  .then((response) => {
    console.log('User created:', response.data);
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });
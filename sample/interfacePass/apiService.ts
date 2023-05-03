import axios from 'axios';
import { User } from './user';

const API_Endpoint = 'https://derivedSourceUser.com';

export const createUser = (user: User) => {
  return axios.post(API_Endpoint + "/user", user);
};
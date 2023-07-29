import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type RegisterNewUserType = {
  name: string;
  email: string;
  password: string;
};

const registerUser = (newUser: RegisterNewUserType) => {
  return axios.post('http://localhost:5001/api/register', newUser);
};

export function useRegisterNewUser() {
  return useMutation(registerUser);
}

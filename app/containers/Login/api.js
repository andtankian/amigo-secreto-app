import axios from 'axios';
import { baseApiUrl } from '../../apiConfig';
export const tryToLogin = credentials => {
  const { login, password } = credentials;
  return axios.post(
    `${baseApiUrl}/loginusers`,
    {},
    {
      auth: {
        username: login,
        password,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
};

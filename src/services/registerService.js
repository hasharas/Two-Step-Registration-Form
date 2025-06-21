import { registerUserApi } from '../api/registerApi';

export const registerUser = async (userData) => {
      console.log('User input datas:', userData);

      const data = await registerUserApi(userData);
      return {
            message: 'Registration successful!',
            data,
      };
};
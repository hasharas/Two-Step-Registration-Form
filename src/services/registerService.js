import { registerUserApi } from '../api/registerApi';

export const registerUser = async (userData) => {
      console.log('Userinput datas:', userData);

      const data = await registerUserApi(userData);
      return {
            message: 'Registration successful!',
            data,
      };
};

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

export const registerUserApi = async (userData) => {

      try {
            const response = await fetch(`${API_BASE_URL}/api/register`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(userData),
            });

            if (!response.ok) {
                  const errorData = await response.json().catch(() => ({ message: 'Server error' }));
                  throw new Error(errorData.message || 'Registration failed due to server error.');
            }

            const data = await response.json();
            return data;

      } catch (error) {
            console.error('API call error:', error);
            throw new Error(error.message || 'An unexpected error occurred during registration.');
      }
};

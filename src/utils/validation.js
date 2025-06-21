// validations for the form fields
//validate email
const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
}
//validate password
const validatePassword = (password) => {
      return password.length >= 6;
};

//validate information
export const validatePersonalInformation = (formData) => {
      const errors = {};

      if (!formData.fullName.trim()) {
            errors.fullName = 'Full name is required';
      }

      if (!formData.email.trim()) {
            errors.email = 'Email is required';

      } else if (!validateEmail(formData.email)) {
            errors.email = 'Invalid email is required';
      }

      return errors;
};

//validate security information
export const validateSecurityInformation = (formData) => {
      const errors = {};

      if (!formData.password) {
            errors.password = 'Password is required';
      } else if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 6 characters long';
      }

      if (!formData.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
      } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
      }

      return errors;
}
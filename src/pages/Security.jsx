import InputField from '../components/InputField';
import { useForm } from '../context/FormContext';
import { validateSecurityInformation } from '../utils/validation';


const Security = () => {

      const { formData, errors, handleInputChange, handleSubmit, isLoading, setCurrentStep } = useForm();


      //enable to submit button
      const isStep2Valid =
            formData.password.length >= 6 &&
            formData.confirmPassword.length >= 6 &&
            formData.password === formData.confirmPassword &&
            Object.keys(validateSecurityInformation(formData)).length === 0;

      return (
            <div className=''>
                  <h2>Security Information</h2>
                  <form action="" onSubmit={(e) => e.preventDefault()}>
                        <InputField
                              label='Password'
                              type='Password'
                              name='Password'
                              value={formData.password}
                              onChange={handleInputChange}
                              error={errors.password}
                              placeholder='Minimum 6 characters'
                        />
                        <InputField
                              label='Confirm Password'
                              type='password'
                              name='password'
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              error={errors.confirmPassword}
                              placeholder='Confirm your password'
                        />

                        <div>
                              <button
                                    type='button'
                                    onClick={() => setCurrentStep(1)}
                                    className=''
                              >
                                    Back
                              </button>

                              <button
                                    type='button'
                                    onClick={handleSubmit}
                                    disabled={!isStep2Valid || isLoading}
                                    className=''
                              >
                                    {isLoading ? 'Submitting...' : 'Submit'}
                              </button>
                        </div>
                  </form>
            </div>
      );
}

export default Security;

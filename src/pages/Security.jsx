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
            <div className='p-6 bg-white rounded-xl shadow-md'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Security Information</h2>
                  <form action="" onSubmit={(e) => e.preventDefault()} className=''>
                        <InputField
                              label='Password'
                              type='password'
                              name='password'
                              value={formData.password}
                              onChange={handleInputChange}
                              error={errors.password}
                              placeholder='Minimum 6 characters'

                        />
                        <InputField
                              label='Confirm Password'
                              type='password'
                              name='confirmPassword'
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              error={errors.confirmPassword}
                              placeholder='Confirm your password'

                        />

                        <div className='flex justify-between mt-6'>
                              <button
                                    type='button'
                                    onClick={() => setCurrentStep(1)}
                                    className='py-2 px-6 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out shadow-md'
                              >
                                    Back
                              </button>

                              <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={!isStep2Valid || isLoading}
                                    className={`py-2 px-6 rounded-lg font-semibold text-white transition duration-300 ease-in-out ${isStep2Valid && !isLoading
                                          ? 'bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg'
                                          : 'bg-green-300 cursor-not-allowed'
                                          }`}
                              >
                                    {isLoading ? 'Submitting...' : 'Submit'}
                              </button>
                        </div>
                  </form>
            </div>
      );
}

export default Security;

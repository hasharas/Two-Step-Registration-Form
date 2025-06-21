
import InputField from '../components/InputField';
import { useForm } from '../context/FormContext';
import { validatePersonalInformation } from '../utils/validation';

const PersonalInformation = () => {
      const { formData, errors, handleInputChange, nextStep } = useForm();

      const isStep1Valid =
            formData.fullName.trim() !== '' &&
            formData.email.trim() !== '' &&
            Object.keys(validatePersonalInformation(formData)).length === 0;

      return (
            <div className="p-6 bg-white rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Personal Information</h2>
                  <form onSubmit={(e) => e.preventDefault()}>
                        <InputField
                              label="Full Name"
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              error={errors.fullName}
                              placeholder="Your Full Name"
                        />
                        <InputField
                              label="Email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              error={errors.email}
                              placeholder="name@example.com"
                        />
                        <InputField
                              label="Phone Number (Optional)"
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              error={errors.phone}
                              placeholder="e.g., 070-456-7890"
                        />
                        <div className="flex justify-end mt-6">
                              <button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isStep1Valid}
                                    className={`py-2 px-6 rounded-lg font-semibold text-white transition duration-300 ease-in-out ${isStep1Valid
                                          ? 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                                          : 'bg-blue-300 cursor-not-allowed'
                                          }`}
                              >
                                    Next
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default PersonalInformation;

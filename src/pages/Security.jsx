import InputField from '../components/InputField';
import { useForm } from '../context/FormContext';


const Security = () => {

      const { formData, errors, handleInputChange, handleSubmit, isLoading, setCurrentStep } = useForm();

      return (
            <div>
                  <h2>Security Information</h2>
                  <form action="">
                        <InputField
                              label=''
                              type=''
                              name=''
                              value=''
                              onChange=''
                              error=''
                              placeholder=''
                        />
                        <InputField
                              label=''
                              type=''
                              name=''
                              value=''
                              onChange=''
                              error=''
                              placeholder=''
                        />

                        <div>
                              <button
                                    type='button'
                                    onClick=''
                                    className=''
                              >
                                    Back
                              </button>
                              <button
                                    type='button'
                                    onClick=''
                                    disabled=''
                                    className=''
                              >

                              </button>
                        </div>
                  </form>
            </div>
      );
}

export default Security;

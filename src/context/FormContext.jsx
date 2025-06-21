import React, { Children, createContext, useContext, useState } from 'react';
import { validatePersonalInformation } from '../utils/validation';



const FormContext = createContext();

export const FormProvider = () => {


      const [formData, setFormData] = useState({
            firstName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
      });
      const [errors, setErrors] = useState({});
      const [currentStep, setCurrentStep] = useState(1);
      const [isLoading, setIsLoading] = useState(false);
      const [submitionStatus, setSubmissionStatus] = useState(null);

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
            if (errors[name]) {
                  setErrors((prevErrors) => {
                        const newErrors = { ...prevErrors };
                        delete newErrors[name];
                        return newErrors;
                  });
            }
      };

      const nextStep = () => {
            let currentStepErrors = {};
            if (currentStep === 1) {
                  currentStepErrors = validatePersonalInformation(formData);
            }

            setErrors(currentStepErrors);
            if (Object.keys(currentStepErrors).length === 0) {
                  setCurrentStep((prevStep) => prevStep + 1);
            }
      }
      const handleSubmit = async () => {
            const currentStepErrors = validateSecurityInformation(formData);
            setErrors(currentStepErrors);

            if (Object.keys(currentStepErrors).length === 0) {
                  setIsLoading(true);
                  setSubmissionStatus(null); tatus
                  try {
                        const payload = {
                              fullName: formData.fullName,
                              email: formData.email,
                              phone: formData.phone,
                              password: formData.password,
                        };
                        await registerUser(payload);
                        setSubmissionStatus('success');

                        setFormData({
                              fullName: '',
                              email: '',
                              phone: '',
                              password: '',
                              confirmPassword: ''
                        });
                        setCurrentStep(1);
                  } catch (err) {
                        setSubmissionStatus('error');
                        console.error('Submission error:', err);
                  } finally {
                        setIsLoading(false);
                  }
            }
      };

      return (
            <FormContext.Provider value={{
                  formData,
                  currentStep,
                  errors,
                  isLoading,
                  submitionStatus,
                  handleInputChange,
                  nextStep,
                  handleSubmit,
                  setCurrentStep,
                  setSubmissionStatus,
            }}>
                  {Children}
            </FormContext.Provider>
      );
}


export const useForm = () => useContext(FormContext);
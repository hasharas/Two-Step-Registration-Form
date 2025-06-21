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
      const [submitionStatus, setSubmissionStatus] = useState(null); //success,error find to



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
      return (
            <FormContext.Provider value={{
                  currentStep
            }}>
                  {Children}
            </FormContext.Provider>
      );
}


export const userForm = () => useContext(FormContext);
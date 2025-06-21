
import { useEffect, FormProvider } from 'react';
import StepIndicator from './components/StepIndicator'
import { useForm } from './context/FormContext';
import PersonalInformation from './pages/PersonalInformation'
import Security from './pages/Security'

function App() {

  const { currentStep, submissionStatus, setSubmissionStatus } = useForm();
  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus, setSubmissionStatus]);

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased'>

        <div className='w-full max-w-md mx-auto'>
          <StepIndicator currentStep={currentStep} />
        </div>


        {currentStep === 1 && < PersonalInformation />}
        {currentStep === 2 && <Security />}
      </div>
    </>
  )
}

export default App

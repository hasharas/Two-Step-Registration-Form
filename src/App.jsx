
import { useEffect } from 'react';
import { useForm } from './context/FormContext';
import StepIndicator from './components/StepIndicator'
import PersonalInformation from './pages/PersonalInformation'
import Security from './pages/Security'

function App() {

  const { currentStep, submissionStatus, setSubmissionStatus, errorMessage, setErrorMessage } = useForm();

  // after 5 sec err msg close function 
  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus, setSubmissionStatus, setErrorMessage]);
  // console.log('Rendered errorMessage:', errorMessage);

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased'>

        <div className='w-full max-w-md mx-auto'>
          {/* <p className='text-2xl flex  justify-center py-6  font-bold text-center'>Two-Step Registration Form</p> */}
          <StepIndicator currentStep={currentStep} />
          {submissionStatus === 'success' && (
            <div
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg mb-6 shadow-md"
              role="alert"
            >
              <p className="font-bold">Success!</p>
              <p>Your registration was successful. Welcome aboard!</p>
            </div>
          )}

          {/* //error message hare with srver err */}
          {submissionStatus === 'error' && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 shadow-md"
              role="alert"
            >
              <p className="font-bold">Error!</p>
              <p>{errorMessage || `Registration failed. Please check your details and try again.`}</p>
            </div>
          )}

          {currentStep === 1 && < PersonalInformation />}
          {currentStep === 2 && <Security />}
        </div>
      </div>
    </>
  )
}

export default App


import StepIndicator from './components/StepIndicator'
import { userForm } from './context/FormContext';
import PersonalInformation from './pages/PersonalInformation'
import Security from './pages/Security'

function App() {

  const { currentStep } = userForm();


  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased'>

        <div className='w-full max-w-md mx-auto'>
          <StepIndicator currentStep={currentStep} />
        </div>
        <PersonalInformation />
        <Security />
      </div>
    </>
  )
}

export default App

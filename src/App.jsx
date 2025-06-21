
import StepIndicator from './components/StepIndicator'

function App() {


  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased'>

        <div className='w-full max-w-md mx-auto'>
          <StepIndicator />
        </div>
        <span className='tx bg-red-800 w-5 text-4xl text-green-600'>text</span>
      </div>
    </>
  )
}

export default App

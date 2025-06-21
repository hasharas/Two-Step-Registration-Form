
import './App.css'
import StepIndicator from './components/StepIndicator'

function App() {


  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased'>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>
          {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                `}
        </style>
        <div className='w-full max-w-md mx-auto'>
          <StepIndicator />
        </div>

      </div>
    </>
  )
}

export default App

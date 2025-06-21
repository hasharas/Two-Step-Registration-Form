import React from 'react';


//step indicator component
const StepIndicator = ({ currentStep }) => {


      return (
            <div className=" mb-8 flex items-center justify-center">
                  <div className={`flex items-center ${currentStep === 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold text-sm">
                              1
                        </div>
                        <span className="ml-2 font-medium">Personal Information</span>
                  </div>
                  <div className="flex-1 border-t-2 mx-4 border-gray-300"></div>
                  <div className={`flex items-center ${currentStep === 2 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <div className={`rounded-full ${currentStep === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} w-8 h-8 flex items-center justify-center font-bold text-sm`}>
                              2
                              <span className="ml-2 font-medium">Security</span>
                        </div>
                  </div>
            </div>
      );
}

export default StepIndicator;

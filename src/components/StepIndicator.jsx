import React from 'react';


//step indicator component
const StepIndicator = () => {
      return (
            <div className=" mb-8 flex items-center justify-center">
                  <div className="">
                        <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold text-sm">
                              1
                              <span className="ml-2 font-medium">Personal Information</span>
                        </div>
                  </div>
                  <div className="flex-1 border-t-2 mx-4 border-gray-300"></div>
                  <div className="flex items-center">
                        <div className="rounded-full">
                              2
                              <span className="ml-2 font-medium">Security</span>
                        </div>
                  </div>
            </div>
      );
}

export default StepIndicator;

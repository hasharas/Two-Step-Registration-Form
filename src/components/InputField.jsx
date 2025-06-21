

//re useble input feld component
const InputField = ({ label, type, name, value, onChange, error, placeholder }) => {
      return (
            <div className="mb-4">
                  <label htmlFor={name} className="block text-gray-600 text-sm font-bold mb-2">
                        {label}
                  </label>
                  <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg transition duration-200 ease-in-out ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                              }`}
                  />
                  {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
            </div>
      );
};

export default InputField;
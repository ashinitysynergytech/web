import React from 'react';

interface SubmitButtonProps {
  text: string;
  isLoading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  text, 
  isLoading = false 
}) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="
        w-full py-5 px-6 bg-[#B46E0F] hover:bg-amber-800 
        text-white font-medium transition-colors 
        duration-200 mt-4 flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
      "
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
import React from 'react';

interface FormInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
  error
}) => {
  return (
    <div className="relative py-2">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-5 bg-transparent text-gray-700
          border-2 border-teal-600 focus:outline-none
          focus:ring-2 focus:ring-teal-500 focus:border-transparent
          placeholder-gray-400 transition-all duration-200
          ${error ? 'border-red-500' : 'border-teal-600'}
        `}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p className="absolute -bottom-5 left-0 text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
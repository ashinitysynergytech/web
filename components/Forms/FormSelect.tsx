import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FormSelectProps {
  name: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  placeholder,
  options,
  value,
  onChange,
  error
}) => {
  return (
    <div className="relative py-2">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-teal-800">
        <ChevronDown size={20} />
      </div>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          appearance-none w-full px-4 py-5 bg-transparent text-gray-700
          border-2 border-teal-600 focus:outline-none
          focus:ring-2 focus:ring-teal-500 focus:border-transparent
          transition-all duration-200 cursor-pointer
          ${error ? 'border-red-500' : 'border-teal-600'}
          ${!value ? 'text-gray-400' : 'text-gray-700'}
        `}
        aria-invalid={error ? 'true' : 'false'}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="absolute -bottom-5 left-0 text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
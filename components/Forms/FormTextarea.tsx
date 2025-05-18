import React from 'react';

interface FormTextareaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  error?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  rows = 5,
  error
}) => {
  return (
    <div className="relative py-2">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`
          w-full px-4 py-5 bg-transparent text-gray-700
          border-2 border-teal-600 focus:outline-none
          focus:ring-2 focus:ring-teal-500 focus:border-transparent
          placeholder-gray-400 transition-all duration-200 resize-none
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

export default FormTextarea;
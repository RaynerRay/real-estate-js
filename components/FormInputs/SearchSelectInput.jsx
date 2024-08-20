
import React from 'react';
import { useController } from 'react-hook-form';
import Select from 'react-select';

const SearchSelectInput = ({ name, control, options, placeholder,label }) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="text-gray-900">
        <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
      <Select
        inputRef={ref}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        options={options}
        placeholder={placeholder}
        isSearchable
        className="block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        
      />
      </div>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default SearchSelectInput;

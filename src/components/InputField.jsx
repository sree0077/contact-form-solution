import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
  const errorId = `${name}-error`;
  return (
    <div className="mb-6 flex-1">
      <label htmlFor={name} className="block text-grey-900 text-sm font-karla font-bold mb-2">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-grey-900 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red' : 'border-grey-500'}`}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && <p className="text-red text-xs italic" id={errorId}>{error}</p>}
    </div>
  );
};

export default InputField;
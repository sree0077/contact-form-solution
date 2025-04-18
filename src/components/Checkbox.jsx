import React from 'react';

const Checkbox = ({ name, label, checked, onChange, error }) => {
  const errorId = `${name}-error`;
  return (
    <div className="mb-6 flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2 leading-tight"
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : 'false'}
      />
      <label htmlFor={name} className="text-grey-900 text-sm font-karla font-bold">{label}</label>
      {error && <p className="text-red text-xs italic ml-2" id={errorId}>{error}</p>}
    </div>
  );
};

export default Checkbox;
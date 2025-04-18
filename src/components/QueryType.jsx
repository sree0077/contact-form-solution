import React from 'react';

const QueryType = ({ name, options, value, onChange, error }) => {
  const errorId = `${name}-error`;
  return (
    <div className="mb-6" role="group" aria-labelledby="query-type-label" aria-describedby={error ? errorId : undefined}>
      <p id="query-type-label" className="block text-grey-900 text-sm font-karla font-bold mb-2">Query Type *</p>
      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex-1 p-3 border rounded cursor-pointer text-center ${value === option.value ? 'bg-green-200 border-green-600' : 'bg-white border-grey-500'}`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="hidden"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <p className="text-red text-xs italic" id={errorId}>{error}</p>}
    </div>
  );
};

export default QueryType;
import React from 'react';

const Toast = ({ message }) => (
  <div
    className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded shadow-lg"
    role="alert"
    aria-live="assertive"
  >
    <p className="font-bold font-karla"><span className="text-green-200 mr-2">✓</span> Message Sent!</p>
    <p className="font-karla">{message}</p>
  </div>
);

export default Toast;
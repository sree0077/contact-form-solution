import React, { useState } from 'react';
import InputField from './components/InputField';
import TextArea from './components/TextArea';
import QueryType from './components/QueryType';
import Checkbox from './components/Checkbox';
import Toast from './components/Toast';

const App = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'This field is required';
    if (!formData.lastName.trim()) errors.lastName = 'This field is required';
    if (!formData.email.trim()) {
      errors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.queryType) errors.queryType = 'Please select a query type';
    if (!formData.message.trim()) errors.message = 'This field is required';
    if (!formData.consent) errors.consent = 'To submit this form, please consent to being contacted';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setFormData(initialFormData);
        setErrors({});
      }, 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-grey-900 mb-6 font-karla">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-6">
            <InputField
              label="First Name *"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              label="Last Name *"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <InputField
            label="Email Address *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <QueryType
            name="queryType"
            options={[
              { value: 'general-enquiry', label: 'General Enquiry' },
              { value: 'support-request', label: 'Support Request' },
            ]}
            value={formData.queryType}
            onChange={handleChange}
            error={errors.queryType}
          />
          <TextArea
            label="Message *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <Checkbox
            name="consent"
            label="I consent to being contacted by the team *"
            checked={formData.consent}
            onChange={handleChange}
            error={errors.consent}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 font-karla font-bold"
          >
            Submit
          </button>
        </form>
      </div>
      {showToast && <Toast message="Thanks for completing the form. We'll be in touch soon!" />}
    </div>
  );
};

export default App;
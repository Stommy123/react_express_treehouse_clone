import React, { useState } from 'react';

const INITIAL_FORM_DATA = { name: '', topic: '' };

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInputChange = field => e => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit && onSubmit(formData);
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' value={formData.name} required onChange={handleInputChange('name')} />
      <input type='text' placeholder='Topic' value={formData.topic} required onChange={handleInputChange('topic')} />
      <button type='submit'>Go!</button>
    </form>
  );
};

export default Form;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const INITIAL_FORM_DATA = { name: '', topic: '' };

const Form = _ => {
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInputChange = field => e => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setFormData(INITIAL_FORM_DATA);
    history.push(`/featured/${formData.name}/${formData.topic}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={formData.name}
        required
        onChange={handleInputChange('name')}
      />
      <input
        type='text'
        placeholder='Topic'
        value={formData.topic}
        required
        onChange={handleInputChange('topic')}
      />
      <button type='submit'>Go!</button>
    </form>
  );
};

export default Form;

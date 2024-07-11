import React, { useState, useCallback } from 'react';

const SubmitButton = React.memo(({ onSubmit }) => {
  console.log('Rendering SubmitButton');
  return <button onClick={onSubmit}>Submit</button>;
});

const CallBackPrac2 = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = useCallback(() => {
    console.log('Form submitted:', formData);
    
  }, [formData]);

  return (
    <div>
     Name :  <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      Email : <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
};

export default CallBackPrac2;

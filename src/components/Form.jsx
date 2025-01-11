import React, { useState } from 'react';

function Form({ addUser }) {
  const [formData, setFormData] = useState({ name: '', email: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ name: '', email: '', image: '' });
  };

  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <button
          className="px-2 py-1 rounded-md bg-sky-400 text-sm font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

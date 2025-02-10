import React, { useState } from 'react';

function Form({ addUser }) {
  const [formData, setFormData] = useState({ name: '', email: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      image: formData.image.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.image) {
      alert('All fields are required!');
      return;
    }

    addUser(trimmedData);
    setFormData({ name: '', email: '', image: '' });
  };

  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <button
          className="px-4 py-2 rounded-md bg-sky-400 text-white font-semibold hover:bg-sky-500 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}



export default Form;

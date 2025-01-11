import React from 'react';

function Card({ user, removeUser }) {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center space-y-1">
      {/* Profile Image */}
      <div className="image w-10 h-10 rounded-full bg-blue-500 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={user.image || 'https://via.placeholder.com/150'}
          alt="Profile"
        />
      </div>

      {/* Name */}
      <h1 className="text-lg font-bold text-gray-800">{user.name}</h1>
      <h1 className="opacity-40 text-sm font-semibold">{user.email}</h1>

      {/* Description */}
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta eveniet minus soluta
        repudiandae tenetur officia molestias non rem a totam, eos minima et id at optio unde, voluptatem tempore!
      </p>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition">
          Follow
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={removeUser}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Card;

import React, { useState } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';

function App() {
  const [users, setUsers] = useState([{ name: 'Divyansh', email: 'divyansh@gmail.com', image: '' }]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="container mx-auto">
        <Cards users={users} removeUser={removeUser} />
        <Form addUser={addUser} />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import api from '../api'; // Cliente Axios configurado

function Tester() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tester;

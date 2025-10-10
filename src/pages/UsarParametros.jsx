import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/users'; 

const UsarParametros = () => {
  const { id } = useParams();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Usuário não encontrado!</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{user.name}</h1>
      <p>Idade: {user.age} anos</p>
      <p>Status: {user.isStudent ? 'É estudante' : 'Não é estudante'}</p>
    </div>
  );
};

export default UsarParametros;
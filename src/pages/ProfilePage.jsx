import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/users';

const ProfilePage = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>Usuário não encontrado!</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Idade: {user.age}</p>
      <p>Status: {user.isStudent ? 'É estudante' : 'Não é estudante'}</p>
    </div>
  );
};

export default ProfilePage;
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importe o Link
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <p>
        <span role="img" aria-label="person">👤</span>
        {' '}
        {user.name} – {user.age} anos
      </p>
      <p>
        {user.isStudent ? 'É estudante' : 'Não é estudante'}
      </p>

      {/* 2. Substitua o <button> por um <Link> */}
      <Link to={`/perfil/${user.id}`} className="ver-nome-button">
        Ver Perfil
      </Link>
    </div>
  );
};

export default ProfileCard;
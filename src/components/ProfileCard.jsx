import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({name, age, isStudent}) => {



  const handleShowName = () => {
    alert(`O nome da pessoa é: ${name}`);
  };

  return (
    <div className="profile-card">
      <p>
        <span role="img" aria-label="person">👤</span>
        {' '}
        {name} – {age} anos
      </p>
      
      <p>
        {isStudent ? 'É estudante' : 'Não é estudante'}
      </p>

      <button onClick={handleShowName}>
        Ver nome
      </button>
    </div>
  );
};

export default ProfileCard;
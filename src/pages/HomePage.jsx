// src/pages/HomePage.jsx
import ProfileCard from '../components/ProfileCard';
import { users } from '../data/users'; 

function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <div className="cards-container">

        {}
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            user={user} 
          />
        ))}

      </div>
    </>
  );
}

export default HomePage;
import ProfileCard from '../components/ProfileCard'

function HomePage() {
    return ( 
        <>
        <h1>HomePage</h1>
        <ProfileCard
            name="Jose Lito"
            age={44}
            isStudent={true}
        />
        <ProfileCard
            name="Maria Huana"
            age={22}
            isStudent={false}
        />
        </> 
     );
}

export default HomePage;
import ProfileList from '../components/ProfileList';
import useFetch from '../utils/useFetch';

function Home() {
  const {
    data: profiles,
    loading,
    error,
  } = useFetch('https://api.hatchways.io/assessment/students');

  return (
    <div>
      <h1>Home component</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {profiles && <ProfileList profiles={profiles} />}
    </div>
  );
}

export default Home;

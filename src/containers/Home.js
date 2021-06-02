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
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {profiles && <ProfileList profiles={profiles.students} />}
    </div>
  );
}

export default Home;

import { useContext } from 'react';
import styled from 'styled-components';
import InputFilter from '../components/InputFilter';
import ProfileList from '../components/ProfileList';
import { ProfileContext } from '../contexts/ProfileContext';

function Home() {
  const { profiles, loading, error } = useContext(ProfileContext);

  const handleSearch = (val) => {
    const value = val.toLowerCase().trim();
    let resultsByName = [];
    let resultsByTag = [];
    let unique = [];

    const regex = new RegExp(value, 'i');

    if (!value) {
      // setFilteredProfiles(profiles.students);
    } else {
      resultsByName = profiles.students.filter(
        (data) => regex.test(data.firstName) || regex.test(data.lastName),
      );

      resultsByTag = profiles.students.filter(
        (data) => regex.test(data.firstName) || regex.test(data.lastName),
      );

      const results = resultsByName.concat(resultsByTag);
      // const unique = results.filter((item, i, ar) => ar.indexOf(item) === i);
      // const unique = [...new Set(results)];
      unique = [...new Set(results.map((profile) => profile))];

      // setFilteredProfiles(unique);
    }
    return unique;
  };

  return (
    <Container>
      <Wrapper>
        {error && <RequestingResponse>{error}</RequestingResponse>}
        {loading && <RequestingResponse>Loading...</RequestingResponse>}
        {profiles && (
          <>
            <InputFilter getSearch={handleSearch} text="Search by name" />
            <InputFilter getSearch={handleSearch} text="Search by tag" />
            <ProfileList profiles={profiles} />
          </>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 998px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  max-width: 900px;
  overflow-y: scroll;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 20%), 0 2px 14px -1px rgb(0 0 0 / 16%);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const RequestingResponse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;

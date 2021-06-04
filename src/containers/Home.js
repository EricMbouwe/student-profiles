import { useState } from 'react';
import styled from 'styled-components';
import InputFilter from '../components/InputFilter';
import ProfileList from '../components/ProfileList';
import useFetch from '../utils/useFetch';

function Home() {
  const {
    data: profiles,
    loading,
    error,
  } = useFetch('https://api.hatchways.io/assessment/students');

  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const handleSearch = (val) => {
    const value = val.toLowerCase();
    let result = [];

    const NameRegex = new RegExp(value, 'i');
    // const Tagregex = new RegExp(value, 'i');

    result = profiles.students.filter(
      (data) => NameRegex.test(data.firstName) || NameRegex.test(data.lastName),
    );

    setFilteredProfiles(result);
  };

  return (
    <Container>
      <Wrapper>
        {error && <RequestingResponse>{error}</RequestingResponse>}
        {loading && <RequestingResponse>Loading...</RequestingResponse>}
        {filteredProfiles && (
          <>
            <InputFilter getSearch={handleSearch} text="Search by name" />
            <InputFilter getSearch={handleSearch} text="Search by tag" />
            <ProfileList profiles={filteredProfiles} />
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

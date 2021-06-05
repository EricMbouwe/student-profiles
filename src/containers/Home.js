import { useContext } from 'react';
import styled from 'styled-components';
import InputFilter from '../components/InputFilter';
import ProfileList from '../components/ProfileList';
import { ProfileContext } from '../contexts/ProfileContext';

function Home() {
  const { filteredProfiles, loading, error } = useContext(ProfileContext);

  // const unique = results.filter((item, i, ar) => ar.indexOf(item) === i);
  // const unique = [...new Set(results)];
  // unique = [...new Set(results.map((profile) => profile))];
  return (
    <Container>
      <Wrapper>
        {error && <RequestingResponse>{error}</RequestingResponse>}
        {loading && <RequestingResponse>Loading...</RequestingResponse>}
        {filteredProfiles && (
          <>
            <InputFilter text="Search by name" type="NAME" />
            <InputFilter text="Search by tag" type="TAG" />
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

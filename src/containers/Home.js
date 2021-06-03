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

  return (
    <Container>
      <Wrapper>
        {error && <RequestingResponse>{error}</RequestingResponse>}
        {loading && <RequestingResponse>Loading...</RequestingResponse>}
        {profiles && (
          <>
            <InputFilter />
            <InputFilter />
            <ProfileList profiles={profiles.students} />
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
  padding: 20px;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  width: 100%;
  height: 500px;
  max-width: 800px;
  overflow-y: scroll;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 20%), 0 2px 14px -1px rgb(0 0 0 / 16%);
`;

const RequestingResponse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;

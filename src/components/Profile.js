import PropTypes from 'prop-types';
import styled from 'styled-components';

function Profile({ data }) {
  return (
    <Wrap>
      <ProfileImg>
        <img src={data.pic} alt="profile img desc" />
      </ProfileImg>

      <ProfileDetails>
        <Name>
          <span>{data.firstName}</span>
          <span>{data.lastName}</span>
        </Name>
        <div>
          <span>Email:</span>
          <span>{data.email}</span>
        </div>
        <div>
          <span>Company:</span>
          <span>{data.company}</span>
        </div>
        <div>
          <span>Skill:</span>
          <span>{data.skill}</span>
        </div>
        <div>
          <span>Average:</span>
          <span>
            {data.grades
              .map((grad) => parseInt(grad, 10))
              .reduce((acc, curr) => acc + curr, 0) / data.grades.length}
            %
          </span>
        </div>
      </ProfileDetails>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 20px;
`;

const ProfileImg = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  //border: 1px solid #eee;
  
  img {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 50%;
  }
`;

const ProfileDetails = styled.div``;

const Name = styled.div`
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 15px;

  span:first-child {
    margin-right: 10px;
  }
`;

Profile.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Profile;

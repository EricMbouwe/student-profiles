import PropTypes from 'prop-types';
import styled from 'styled-components';

function Profile({ data }) {
  const gradesAverage = (grades) => grades
    .map((grad) => parseInt(grad, 10))
    .reduce((acc, curr) => acc + curr, 0) / grades.length;

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
            {gradesAverage(data.grades)}
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
  padding: 10px 20px;

  @media (max-width: 567px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const ProfileDetails = styled.div`
  div:not(div:first-of-type) {
    padding-left: 15px;
    color: #aaa;
    line-height: 1.5;

    span:first-child {
      margin-right: 5px;
    }
  }
`;

const Name = styled.div`
  font-size: 42px;
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

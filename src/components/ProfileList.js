import PropTypes from 'prop-types';

function ProfileList({ profiles }) {
  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <img src={profile.pic} alt="profile img desc" />
          <h1>{profile.firstName}</h1>
          <div>{profile.email}</div>
          <div>{profile.skill}</div>
          <div>
            {profile.grades
              .map((grad) => parseInt(grad, 10))
              .reduce((acc, curr) => acc + curr, 0) / profile.grades.length}
          </div>
        </div>
      ))}
    </div>
  );
}

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileList;

import PropTypes from 'prop-types';

function ProfileList({ profiles }) {
  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <img src={profile.pic} alt="profile img desc" />
          <h1>{profile.firstName}</h1>
          <div>
            <span>Email:</span>
            <span>{profile.email}</span>
          </div>
          <div>
            <span>Company:</span>
            <span>{profile.company}</span>
          </div>
          <div>
            <span>Skill:</span>
            <span>{profile.skill}</span>
          </div>
          <div>
            <span>Average:</span>
            <span>
              {profile.grades
                .map((grad) => parseInt(grad, 10))
                .reduce((acc, curr) => acc + curr, 0) / profile.grades.length}
              %
            </span>
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

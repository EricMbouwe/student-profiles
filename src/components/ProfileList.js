function ProfileList({ profiles }) {
  return (
    <div>
      <h1>Profile List</h1>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <img src={profile.pic} alt="profile img desc" />
          <h1>{profile.firstName}</h1>
          <div>{profile.email}</div>
          <div>{profile.skill}</div>
          <div>{profile.skill}</div>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;

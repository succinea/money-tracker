const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.picture}></img>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.user_id}</p>
    </div>
  );
};

export default Profile;

// import {user, setUser} from 'react'
import "./Profile.scss"
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser} ) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser("");
    localStorage.setItem('user', JSON.stringify(""));
    navigate('/login');
  };
  return (
    <div className="profile">
     <div className="pro">
     <h1 className="h1"> {user.name}</h1>
      <h1 className="h1">{user.username}</h1>
      <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
     </div>
    </div>
  );
};

export default Profile;

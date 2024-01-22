import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.scss"
function Login( {setUser}   ) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    username: '',
  });

  const handleLogin = () => {
    setUser(data);
    try {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/home');
    } catch (error) {
      console.error('Error storing user data in localStorage:', error);
    }
  };

  return (
    <div className="login">
      <div className="inpp">
        <input
          className="form-control w-25 mb-3 name"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={data.name}
          onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}
        />
        <input
          className="form-control w-25 mb-3 usern"
          type="text"
          id="username"
          name="username"
          placeholder="johndoe"
          value={data.username}
          onChange={(e) => setData((prevData) => ({ ...prevData, username: e.target.value }))}
        />
        <button className="btn btn-outline-success" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

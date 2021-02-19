import { React, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/Signin.css';

function Signin() {
  const history = useHistory();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const frmdetails = {
      email,
      password,
    };
    axios.post('http://localhost:3000/auth/login', frmdetails).then((res) => {
      dispatch({ type: 'Auth/LogIn', Data: res.data });
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/');
    });
  };
  return (
    <div className="form-signin">
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputEmail" className="visually-hidden">
          <input type="email" value={email} onInput={(e) => SetEmail(e.target.value)} id="inputEmail" className="form-control" placeholder="Email address" />
        </label>
        <label htmlFor="inputPassword" className="visually-hidden">
          <input type="password" value={password} onInput={(e) => SetPassword(e.target.value)} id="inputPassword" className="form-control" placeholder="Password" required />
        </label>
        <button className="btn btn-info btn-block" type="submit">Sign in</button>
      </form>
    </div>
  );
} export default Signin;

// import cors from 'cors';
//    this.app.use(cors());
//  "start-dev": "set NODE_ENV=dev&& concurrently \"tsc -w\" \"nodemon .\"",

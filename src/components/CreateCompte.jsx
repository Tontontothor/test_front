import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/CreateCompte.css';
import axios from 'axios';

function CreateCompte() {
  const [username, SetUserName] = useState(''); // '' is the initial state value
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const frmdetails = {
      username,
      email,
      password,
    };

    axios.post('http://localhost:3000/auth/register', frmdetails).then((res) => {
      dispatch({ type: 'Auth/LogIn', Data: res.data });
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/');
    });
  };
  return (
    <div className="container">
      <div className="row centered-form">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input type="text" name="UserName" value={username} onInput={(e) => SetUserName(e.target.value)} id="UserName" className="form-control input-sm" placeholder="User Name" required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input type="email" name="email" value={email} onInput={(e) => SetEmail(e.target.value)} id="email" className="form-control input-sm" placeholder="Email Address" required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input type="password" name="password" value={password} onInput={(e) => SetPassword(e.target.value)} id="password" className="form-control input-sm" placeholder="Password" required />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Register" className="btn btn-info btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} export default CreateCompte;

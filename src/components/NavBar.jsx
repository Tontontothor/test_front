import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/NavBar.css';

const GetUserData = (state) => state;

function LogOut(dispatch) {
  dispatch({ type: 'Auth/LogOut', Data: {} });
  localStorage.clear();
}

function NavBar() {
  const UserData = useSelector(GetUserData);
  const NavItems = [];
  const dispatch = useDispatch();

  if (!UserData.IsLogged) {
    NavItems.push(<li key="1" className="nav-item"><a className="nav-link" href="/signin">Signin</a></li>);
    NavItems.push(<li key="2" className="nav-item"><a className="nav-link" href="/signup" aria-disabled="false">Register</a></li>);
  } else {
    NavItems.push(<li key="3" className="nav-item"><a className="nav-link" href="/">{UserData.Data.username}</a></li>);
    NavItems.push(<li key="4" className="nav-item"><a className="btn btn-sm btn-outline-danger mr-2 nav-link" onClick={() => LogOut(dispatch)} href="/" role="button">LogOut</a></li>);
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            {NavItems}
          </ul>
        </div>
      </div>
    </nav>
  );
} export default NavBar;

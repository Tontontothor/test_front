import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

const user = JSON.parse(localStorage.getItem('user'));
const InitialState = {
  IsLogged: user !== null,
  Data: !user ? {} : user,
};

function AuthReducer(state = InitialState, action) {
  switch (action.type) {
    case 'Auth/LogIn':
      return { ...state, IsLogged: true, Data: action.Data };
    case 'Auth/LogOut':
      return { ...state, IsLogged: false, Data: {} };
    default: return state;
  }
}

const store = createStore(AuthReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

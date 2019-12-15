import { useState, useContext } from 'react';
import Router from 'next/router';

import Layout from '../components/layout';
import { Alert } from '../components/alert';
import { credentials } from '../config/credentials';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [badCredentials, setBadCredentials] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    const { username, password } = await credentials();

    if (username === userName && password === userPassword) {
      logIn(userName);
      return Router.push('/profile');
    } else {
      setBadCredentials(true);

      setTimeout(() => {
        setBadCredentials(false);
      }, 3000);
    }
  };

  return (
    <Layout>
      {badCredentials && <Alert />}
      <div className="card m-auto mb-3 w-50">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group w-100">
              {userName.length === 0 ? (
                <label htmlFor="userName" className="text-warning">
                  Name is required.
                </label>
              ) : (
                <label htmlFor="userName">Name</label>
              )}
              <input
                type="text"
                name="userName"
                placeholder="What should I call you?"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div>
              {userPassword.length === 0 ? (
                <label htmlFor="userName" className="text-warning">
                  Password is required.
                </label>
              ) : (
                <label htmlFor="userName">Password</label>
              )}
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>

            <div>
              <input
                type="submit"
                value="Підтвердити"
                className="btn btn-primary mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

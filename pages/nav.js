import { useContext } from 'react';
import Link from 'next/link';

import AuthContext from '../context/AuthContext';

const Nav = () => {
  const { isAuth, logOut } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          Frontend Test
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Site</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/news">
                <a className="nav-link">News</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/profile">
                <a className="nav-link">Account</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="mr-4">
              {isAuth ? (
                <span
                  className="nav-link bg-success text-white px-2"
                  style={{ borderRadius: '3%' }}
                >
                  Hello, React Dev!
                </span>
              ) : (
                <span
                  className="nav-link bg-light text-warning"
                  style={{ borderRadius: '3%' }}
                >
                  You Not Logged In
                </span>
              )}
            </li>
            <li className="nav-item">
              {isAuth ? (
                <Link href="#">
                  <a className="nav-link">
                    <span onClick={() => logOut()}>Logout</span>
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className="nav-link">
                    {isAuth ? <span>Logout</span> : <span>Login</span>}
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

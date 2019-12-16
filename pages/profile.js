import fetch from 'isomorphic-unfetch';
import { useEffect, useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import AuthContext from '../context/AuthContext';

const Profile = ({ data }) => {
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      Router.push('/login');
    }
  }, [isAuth]);

  return (
    <Layout>
      <div>
        <h2 className="card-header text-center py-2">Account Page</h2>
        {data.map(profile => (
          <div className="list-group-item" key={profile.id}>
            <div className="card card-header">
              Full Name: <span className="text-info">{profile.name}</span>
            </div>
            <p className="card-text pt-2 ml-4">email: {profile.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Profile.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { data };
};

Profile.propTypes = {
  data: PropTypes.array.isRequired
};

export default Profile;

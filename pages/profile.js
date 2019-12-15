import fetch from 'isomorphic-unfetch';
import { useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import AuthContext from '../context/AuthContext';

const Profile = ({ data }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    Router.push('/login');
  }
  return (
    <Layout>
      <div>
        <h2 className="card-header text-center py-2">Account Page</h2>
        <h4 className="ml-3 py-2">Rem-rest JSON stars:</h4>
        {data.map(profile => (
          <div className="list-group-item" key={profile.id}>
            <div className="card card-header">
              {profile.firstName} {profile.lastName}
            </div>
            <p className="card-text px-2">id: {profile.id}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Profile.getInitialProps = async ({ req }) => {
  const res = await fetch('http://rem-rest-api.herokuapp.com/api/users');

  const { data } = await res.json();

  return { data };
};

Profile.propTypes = {
  data: PropTypes.array.isRequired
};

export default Profile;

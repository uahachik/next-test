import React from 'react';
import App from 'next/app';
import memoize from 'memoize-one';

import AuthContext from '../context/AuthContext';

export default class MyApp extends App {
  state = {
    isAuth: false
  };

  componentDidMount = () => {
    const isAuth = localStorage.getItem('isAuth');
    if (isAuth) {
      this.setState({ isAuth: true });
    }
  };

  logIn = async userName => {
    localStorage.setItem('isAuth', userName);
    this.setState({ isAuth: true });
  };

  logOut = async () => {
    localStorage.removeItem('isAuth');
    this.setState({ isAuth: false });
  };

  render() {
    const { Component, pageProps } = this.props;
    const logIn = memoize(this.logIn);
    const logOut = memoize(this.logOut);

    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          logIn,
          logOut
        }}
      >
        <Component {...pageProps} />
      </AuthContext.Provider>
    );
  }
}

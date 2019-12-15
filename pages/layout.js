import { useState, useMemo, useContext } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
// import AuthContext from '../components/AuthContext';

const Layout = props => {
  // const { darkMode, setDarkMode } = useContext(AuthContext);

  // const [isLogin, setIsLogin] = useState(false);

  // const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);

  return (
    // <AuthContext.Provider value={value}>
    // <AuthContext.Provider value="string">
    <div>
      <Head>
        <title>Frontend Test</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      {/* <Nav value="string" /> */}
      <Nav />
      <div className="container">{props.children}</div>
    </div>
    // </AuthContext.Provider>
  );
};

export default Layout;

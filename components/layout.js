import Head from 'next/head';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <>
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
      <Nav />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;

import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

const News = ({ data }) => (
  <Layout>
    <div className="card">
      <h3 className="card-header text-center py-2">News Page</h3>
      {data.map(novelty => (
        <div className="list-group-item" key={novelty.id}>
          <h5 className="card-title pl-2">{novelty.title}</h5>
          <p className="card-text px-2">{novelty.body}</p>
        </div>
      ))}
    </div>
  </Layout>
);

News.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { data };
};

News.propTypes = {
  data: PropTypes.array.isRequired
};

export default News;

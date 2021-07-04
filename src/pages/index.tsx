import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Banner from '../components/Banner';

const IndexPage = () => {
  const separator = React.createRef();

  const scrollToContent = () => {
    separator.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <Seo title="Home" />
      <Banner scrollToContent={scrollToContent} />
      <hr ref={separator} />
    </Layout>
  );
};

export default IndexPage;

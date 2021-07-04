import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Banner from '../components/Banner';
import ResearchField from '../components/ResearchField';
import * as styles from './index.module.scss';

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
      <div ref={separator} />
      <div className={styles.researchField}>
        <h2>研究领域</h2>
        <div className={styles.cards}>
          <ResearchField />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

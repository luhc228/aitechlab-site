import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import HofCardList from '../components/HofCardList';
import * as styles from './hof.module.scss';

function Hof() {
  const hofDescData = useStaticQuery(graphql`
    query HofDescQuery {
      markdownRemark(fileAbsolutePath: { regex: "/hof/index/" }) {
        html
        frontmatter {
          title
          slug
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="名人堂" />
      <div className={styles.container}>
        <main>
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html: hofDescData.markdownRemark.html,
            }}
          />
          <HofCardList />
        </main>
      </div>
    </Layout>
  );
}

export default Hof;

import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import HofCardList from '../components/HofCardList';
import * as styles from './hof.module.scss';

function Hof() {
  const data = useStaticQuery(graphql`
    query HofDescQuery {
      markdownRemark(fileAbsolutePath: { regex: "/hof/index/" }) {
        html
        frontmatter {
          title
          slug
        }
      }
      allMarkdownRemark(
         filter: {
           fileAbsolutePath: { regex: "/hof/*/*/" }
           frontmatter: { slug: { ne: "/hof/index" } }
         }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              cover {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            html
          }
        }
      }
    }
  `);
  const { allMarkdownRemark, markdownRemark } = data;
  return (
    <Layout>
      <Seo title="名人堂" />
      <div className={styles.container}>
        <main>
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
          <HofCardList data={allMarkdownRemark.edges} />
        </main>
      </div>
    </Layout>
  );
}

export default Hof;

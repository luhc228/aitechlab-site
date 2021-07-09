import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './about.module.scss';
import ResearchField from '../components/ResearchField';
import LifeCarousel from '../components/LifeCarousel';

const sectionExtraComponents = {
  '/about/team': null,
  '/about/explore': <ResearchField />,
  '/about/life': <LifeCarousel />,
};

function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/" } }
        sort: { order: ASC, fields: frontmatter___id }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  const {
    allMarkdownRemark: { edges },
  } = data;
  return (
    <Layout>
      <Seo title="关于" />
      <main className={styles.container}>
        <article>
          {edges.map(
            ({
              node: {
                html,
                frontmatter: { title, slug },
              },
            }) => {
              return (
                <div className={styles.item} key={slug}>
                  <h2>{title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                  {sectionExtraComponents[slug] || null}
                </div>
              );
            }
          )}
        </article>
      </main>
    </Layout>
  );
}

export default About;

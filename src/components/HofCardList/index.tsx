import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import HofCard from '../HofCard';

function HofCardList() {
  const hofData = useStaticQuery(graphql`
    query HofQuery {
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
  console.log('hofData==>', hofData);
  const {
    allMarkdownRemark: { edges },
  } = hofData;
  return (
    <div>
      {edges.map(({ node: { html, frontmatter: { cover, title } } }) => (
        <HofCard
          key={title}
          image={getImage(cover)}
          title={title}
          content={html}
        />
      ))}
    </div>
  );
}

export default HofCardList;

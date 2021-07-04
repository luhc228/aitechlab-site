import React from 'react';
import { List } from 'antd';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './index.module.scss';

function ResearchField() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allResearchJson {
        edges {
          node {
            alt
            title
            content
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <List
        grid={{
          column: 2,
          gutter: 32,
          sm: 1,
          md: 2,
        }}
        dataSource={data?.allResearchJson?.edges || []}
        renderItem={(item: any) => {
          const { node } = item;
          return (
            <List.Item key={node.title}>
              <Card {...node} />
            </List.Item>
          );
        }}
      />
    </>
  );
}

const Card = ({ alt, content, title, img }) => {
  const image = getImage(img);

  return (
    <div className={styles.card}>
      <GatsbyImage className={styles.image} image={image} alt={alt} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
    </div>
  );
};
export default ResearchField;

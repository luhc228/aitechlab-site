import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './hof.module.scss';

function Hof() {
  return (
    <Layout>
      <Seo title="名人堂" />
      <div className={styles.container}>
        <main>
          <p className={styles.desc}>
            AITechLab
            实验室目前由20多位优秀成员组成，毕业后在中国科学技术大学、复旦大学、北京理工大学等名校深造，或就职于阿里、华为、美团等公司。
          </p>
        </main>
      </div>
    </Layout>
  );
}

export default Hof;

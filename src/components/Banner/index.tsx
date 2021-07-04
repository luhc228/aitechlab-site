import React from 'react';
import * as styles from './index.module.scss';
import Video from '../../assets/videos/video.mp4';
import { TiArrowDownThick } from 'react-icons/ti';

function Banner({ scrollToContent }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <video src={Video} autoPlay loop muted playsInline />
      </div>
      <div className={styles.content}>
        <div className={styles.items}>
          <h1>AI Makes Life Better</h1>
          <div onClick={scrollToContent}>
            <TiArrowDownThick />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

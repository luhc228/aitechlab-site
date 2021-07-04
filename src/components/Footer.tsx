import React from "react";
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

function Footer() {
  return (
    <footer
      style={{
        margin: `2rem 0`,
        display: 'flex',
        padding: `2rem 2rem 3rem 2rem`,
      }}
    >
      <div 
        style={{ backgroundSize: 'contain', maxHeight: '60px', maxWidth: '60px' }}
      >
        <StaticImage src="../assets/images/logo2.png" alt="logo" />
      </div>
      <div style={{ marginLeft: 60 }}>
        <div style={{ display: 'flex', marginBottom: 10 }}>
          <div style={{ fontWeight: 600 }}>友情链接</div>
          <Link style={{ marginLeft: 20 }} to="https://www.sdu.edu.cn">
            山东大学
          </Link>
          <Link style={{ marginLeft: 20 }} to="https://www.ise.sdu.edu.cn/">
            山东大学信息学院
          </Link>
        </div>
        <div style={{ marginBottom: 10 }}>
          Copyright © 2021 - Present. AITechLab.
        </div>
        <div>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby.js</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

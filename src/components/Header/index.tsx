import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaBars } from 'react-icons/fa';
import * as styles from './index.module.scss';
import menuData from '../../data/menu';

function Header() {
  return (
    <nav className={styles.nav}>
      <StaticImage
        className={styles.logo}
        src="../../images/logo.png"
        alt="Logo"
        height={48}
      />
      <div className={styles.navMenu}>
        {menuData.map(({ link, title }) => (
          <Link className={styles.menuItem} key={link} to={link}>
            {title}
          </Link>
        ))}
      </div>
      <div className={styles.bar}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Header;

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
        src="../../assets/images/logo.png"
        alt="Logo"
        height={36}
      />
      <div className={styles.navMenu}>
        {menuData.map(({ link, title }) => (
          <Link className={styles.menuItem} key={link} to={link}>
            {title}
          </Link>
        ))}
      </div>
      <FaBars className={styles.bar} />
    </nav>
  );
}

export default Header;

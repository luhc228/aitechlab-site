import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import classnames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';
import { FaBars } from 'react-icons/fa';
import * as styles from './index.module.scss';
import menuData from '../../menu';

const cx = classnames.bind(styles);

function Header() {
  const { pathname } = useLocation();
  const imageProps = {
    alt: 'Logo',
    height: 36,
  };
  const isIndex = pathname === '/';
  return (
    <nav className={cx(styles.nav, { [styles.navWhiteBackground]: !isIndex })}>
      {/* TODO: can't use src=`${pathname === '/' ? '../../assets/images/logo-white.png' : '../../assets/images/logo.png'}` */}
      {isIndex ? (
        <StaticImage
          className={styles.logo}
          src="../../assets/images/logo-white.png"
          {...imageProps}
        />
      ) : (
        <StaticImage
          className={styles.logo}
          src="../../assets/images/logo-black.png"
          {...imageProps}
        />
      )}

      <div className={styles.navMenu}>
        {menuData.map(({ link, title }) => (
          <Link
            className={cx(styles.menuItem, {
              [styles.blackMenuItem]: !isIndex,
            })}
            key={link}
            to={link}
          >
            {title}
          </Link>
        ))}
      </div>
      <FaBars className={styles.bar} color={isIndex ? '#fff' : '#000'} />
    </nav>
  );
}

export default Header;

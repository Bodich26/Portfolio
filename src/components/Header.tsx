import { Link } from 'react-router-dom';

import styles from './AllStyles.module.scss';
import './../style/container.scss';

import Logo from '../assets/img/logo.png';
import Menu from './Menu';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className={styles['header__wrap']}>
          <Link to="/Home">
            <img className={styles['header__logo']} src={Logo} alt="Logo" />
          </Link>
          <div className={styles['header__block']}>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

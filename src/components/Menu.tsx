import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AllStyles.module.scss';
import BurgerBtn from './Ui/BurgerBtn';

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <BurgerBtn onClick={handleToggleMenu} />
      <nav className={`${styles['menu']} ${menuOpen ? styles['active'] : ''}`}>
        <ul className={styles['menu__list']}>
          <li className={styles['menu__item']}>
            <NavLink className={styles['menu__item-link']} to="/AboutMe">
              About me
            </NavLink>
          </li>
          <li className={styles['menu__item']}>
            <NavLink className={styles['menu__item-link']} to="/Projects">
              Projects
            </NavLink>
          </li>
          <li className={styles['menu__item']}>
            <NavLink className={styles['menu__item-link']} to="/Skills">
              Skills
            </NavLink>
          </li>
          <li className={styles['menu__item']}>
            <NavLink className={styles['menu__item-link']} to="/Education">
              Education
            </NavLink>
          </li>
          <li className={styles['menu__item']}>
            <NavLink className={styles['menu__item-link']} to="/Hobbies">
              Hobbies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;

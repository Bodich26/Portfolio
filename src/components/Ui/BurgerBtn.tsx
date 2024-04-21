import React from 'react';
import styles from './UiStyles.module.scss';

interface IPros {
  onClick: () => void;
}

const BurgerBtn: React.FC<IPros> = ({ onClick }) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  const handleAddBurgerOpen = () => {
    setBurgerOpen(!burgerOpen);
    onClick();
  };
  return (
    <div
      className={`${styles['burger']} ${burgerOpen ? styles['active'] : ''}`}
      onClick={handleAddBurgerOpen}
    >
      <span className={styles['burger__line']}></span>
      <span className={styles['burger__line']}></span>
      <span className={styles['burger__line']}></span>
    </div>
  );
};

export default BurgerBtn;

import Cap from './../assets/img/cap.png';
import styles from './AllStyles.module.scss';

const CapImg = () => {
  return (
    <div className={styles['cap']}>
      <img src={Cap} alt="Cap" />
    </div>
  );
};

export default CapImg;

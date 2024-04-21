import Smile from './../assets/img/smile.svg';
import styles from './AllStyles.module.scss';

const Qualities = () => {
  return (
    <>
      <div className={styles['qualities-box']}>
        <span className={styles['qualities-title']}>Good Qualities</span>
        <img className={styles['qualities-smile']} src={Smile} alt="Smile" />
      </div>
      <ul className={styles['qualities__list']}>
        <li className={styles['qualities__list-item']}>Responsible</li>
        <li className={styles['qualities__list-item']}>Punctual</li>
        <li className={styles['qualities__list-item']}>Fair</li>
        <li className={styles['qualities__list-item']}>Kind</li>
        <li className={styles['qualities__list-item']}>Optimist</li>
        <li className={styles['qualities__list-item']}>Fast learner</li>
        <li className={styles['qualities__list-item']}>Purposeful</li>
      </ul>
    </>
  );
};

export default Qualities;

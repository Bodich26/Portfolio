import styles from './AllStyles.module.scss';
import './../style/container.scss';
import 'animate.css';

// import Ellipse from './../assets/img/ellipse.svg';

interface IPros {
  span?: string;
  text: string;
  title: string;
  twoBlock?: React.ReactNode | string;
}

const MainScreen: React.FC<IPros> = ({ span, text, title, twoBlock }) => {
  return (
    <section className={styles['about']}>
      {/* <div className={styles['about__elipse-one']}>
        <img src={Ellipse} alt="Ellipse" />
      </div>
      <div className={styles['about__elipse-two']}>
        <img src={Ellipse} alt="Ellipse" />
      </div>
      <div className={styles['about__elipse-three']}>
        <img src={Ellipse} alt="Ellipse" />
      </div> */}
      <div className="container">
        <div className={styles['about__wrap']}>
          <div
            className={`${styles['about__info']} animate__animated animate__fadeInLeft`}
          >
            <span className={styles['about__info-span']}>{span}</span>
            <h2 className={styles['about__info-title']}>{title}</h2>
            <p className={styles['about__info-text']}>{text}</p>
          </div>
          <div
            className={`${styles['about__right']} animate__animated animate__fadeInRightBig`}
          >
            {twoBlock}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;

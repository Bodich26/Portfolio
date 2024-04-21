import Footer from '../components/Footer';
import Header from '../components/Header';
import IconSocial from '../components/IconSocial';

import 'animate.css';
import styles from './Styles.module.scss';
import './../style/container.scss';

import Photo from './../assets/img/prev-photo.png';
import Ellipse from './../assets/img/ellipse.svg';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles['screen']}>
          <div className="container">
            <div className={styles['screen__wrap']}>
              <div
                className={`${styles['ellipse__one']} animate__animated animate__pulse`}
              >
                <img src={Ellipse} alt="Ellipse" />
              </div>
              <div
                className={`${styles['ellipse__three']} animate__animated animate__pulse`}
              >
                <img src={Ellipse} alt="Ellipse" />
              </div>
              <div
                className={`${styles['ellipse__four']} animate__animated animate__pulse`}
              >
                <img src={Ellipse} alt="Ellipse" />
              </div>

              <div
                className={`${styles['screen__info']} animate__animated animate__slideInLeft`}
              >
                <div className={styles['screen__info-box']}>
                  <IconSocial />
                  <div className={styles['screen__block']}>
                    <span className={styles['screen__block-text']}>
                      I’m Bogdan Zhukov
                    </span>
                    <h1 className={styles['screen__block-title']}>
                      Junior Front-End
                    </h1>
                  </div>
                </div>
                <div className={styles['screen__box']}>
                  <span className={styles['screen__box-data']}>
                    Nikolaev (Uk)
                  </span>
                  <span className={styles['screen__box-data']}>
                    4634815@gmail.com
                  </span>
                  <span className={styles['screen__box-data']}>
                    +38-050-677-92-73
                  </span>
                </div>
              </div>
              <div
                className={`${styles['screen__photo']} animate__animated animate__rotateInDownRight`}
              >
                <img src={Photo} alt="Photo" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

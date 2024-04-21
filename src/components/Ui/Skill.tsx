import styles from './UiStyles.module.scss';

interface IProps {
  icons: string;
  title: string;
}

const Skills: React.FC<IProps> = ({ icons, title }) => {
  return (
    <div className={styles['skills']}>
      <img className={styles['skills__img']} src={icons} alt="Icons" />
      <span className={styles['skills__title']}>{title}</span>
    </div>
  );
};

export default Skills;

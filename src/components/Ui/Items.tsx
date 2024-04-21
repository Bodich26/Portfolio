import styles from './UiStyles.module.scss';

interface IProps {
  icons: string;
  span: string;
  href: string;
  linkName: string;
}

const Items: React.FC<IProps> = ({ icons, span, href, linkName }) => {
  return (
    <div className={styles['items']}>
      <img className={styles['items__img']} src={icons} alt="Icons" />
      <span className={styles['items__title']}>{span}</span>
      <a className={styles['items__link']} href={href} target="_blank">
        {linkName}
      </a>
    </div>
  );
};

export default Items;

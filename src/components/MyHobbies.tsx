import styles from './AllStyles.module.scss';
import Skills from './Ui/Skill';

//Data
import MyHobbiesData from '../data/MyHobbies.json';

//Type
import { IHobbies } from './../type/IHobbies';

const MyHobbies = () => {
  const IHobbies: IHobbies[] = MyHobbiesData;

  return (
    <div className={styles['myProject']}>
      {IHobbies.map((hobbi) => (
        <Skills icons={hobbi.img} title={hobbi.title} key={hobbi.id} />
      ))}
    </div>
  );
};

export default MyHobbies;

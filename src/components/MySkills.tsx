import styles from './AllStyles.module.scss';
import Skills from './Ui/Skill';

//Data
import SkillsData from '../data/MySkillsData.json';

//Type
import { ISkills } from './../type/ISkills';

import Photoshop from './../assets/img/IconSkills/photoshop.svg';
import Figma from './../assets/img/IconSkills/figma.svg';

const MySkills = () => {
  const ISkills: ISkills[] = SkillsData;

  return (
    <div>
      <div className={styles['mySkills']}>
        {ISkills.map((skill) => (
          <Skills icons={skill.img} title={skill.title} key={skill.id} />
        ))}
      </div>
      <div className={styles['myGraph']}>
        <Skills icons={Photoshop} title="Photoshop" />
        <Skills icons={Figma} title="Figma" />
      </div>
      <p className={styles['myGraph__desc']}>
        Here are my skills that I'm familiar with and actively learning,
        applying them in developing various web applications.
      </p>
    </div>
  );
};

export default MySkills;

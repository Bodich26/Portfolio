import styles from './AllStyles.module.scss';
import Items from './Ui/Items';

//Data
import ProjectData from './../data/MyProjectData.json';

//Type
import { IProject } from './../type/IProject';

const MyProject = () => {
  const IProject: IProject[] = ProjectData;

  return (
    <div className={styles['myProject']}>
      {IProject.map((project) => (
        <Items
          icons={project.icons}
          span={project.span}
          href={project.href}
          linkName={project.name}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default MyProject;

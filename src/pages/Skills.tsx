import Footer from '../components/Footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import MySkills from '../components/MySkills';

const Skills = () => {
  return (
    <>
      <Header />
      <main>
        <MainScreen
          title="My Skills"
          text="I have around 1 year of experience in development, although I don't have any commercial experience yet. I'm eager to learn new technologies and gain more experience. In the future, I aspire to master both Back-End and become a Full-Stack Web Developer."
          twoBlock={<MySkills />}
        />
      </main>
      <Footer />
    </>
  );
};

export default Skills;

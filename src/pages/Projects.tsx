import Footer from '../components/Footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import MyProject from '../components/MyProject';

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <MainScreen
          title="My Projects"
          text="Here are my projects of various levels of complexity that I have implemented as examples."
          twoBlock={<MyProject />}
        />
      </main>
      <Footer />
    </>
  );
};

export default Projects;

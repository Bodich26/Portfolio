import Footer from '../components/Footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import Qualities from '../components/Qualities';

const AboutMe = () => {
  return (
    <>
      <Header />
      <main>
        <MainScreen
          span="My name’s Bogdan, I’m Junior Front-End developer."
          title="About Me"
          text="I’m 22 years old. I live in Nikolaev city. In my teenage years, I
          became interested in Web development and Design, and recently I've
          decided to pursue growth in this field."
          twoBlock={<Qualities />}
        />
      </main>
      <Footer />
    </>
  );
};

export default AboutMe;

import CapImg from '../components/CapImg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';

const Education = () => {
  return (
    <>
      <Header />
      <main>
        <MainScreen
          title="My Education"
          text="I have completed secondary education and I'm currently pursuing a degree in Computer Engineering. Additionally, I have engaged in self-study online and with a tutor. I prefer to reinforce my knowledge through practical application."
          twoBlock={<CapImg />}
        />
      </main>
      <Footer />
    </>
  );
};

export default Education;

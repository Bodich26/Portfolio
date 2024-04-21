import Footer from '../components/Footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import MyHobbies from '../components/MyHobbies';

const Hobbies = () => {
  return (
    <>
      <Header />
      <main>
        <MainScreen
          title="My Hobbies"
          text="I have several hobbies. I enjoy fishing, outdoor activities, music. I play the guitar and I like to design interfaces, websites, and so on. I also enjoy playing computer games in genres like Survival, Racing, RPGs, and Shooters. I enjoy tinkering with computers and assembling them."
          twoBlock={<MyHobbies />}
        />
      </main>
      <Footer />
    </>
  );
};

export default Hobbies;

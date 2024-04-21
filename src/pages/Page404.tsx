import Footer from '../components/Footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';

const Page404 = () => {
  return (
    <>
      <Header />
      <main>
        <MainScreen title="404" text="Page not found!  😄" />
      </main>
      <Footer />
    </>
  );
};

export default Page404;

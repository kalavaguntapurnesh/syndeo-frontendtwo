import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import Carousel from "../components/Carousel";
import Final from "../components/Final";
import Footer from "./../components/Footer";
import Reviews from "./../components/Reviews";
import FAQ from "../components/FAQ";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Hero />
      <Carousel />
      <Reviews />
      <FAQ />
      <Final />
      <Footer />
    </div>
  );
};

export default Home;

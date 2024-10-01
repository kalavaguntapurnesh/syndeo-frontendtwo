import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import Carousel from "../components/Carousel";
import Final from "../components/Final";
import Footer from "./../components/Footer";
import Reviews from "./../components/Reviews";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Navbar />
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

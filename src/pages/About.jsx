import AboutOne from "../components/AboutOne";
import Final from "../components/Final";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <AboutOne />
      <Final />
      <Footer />
    </div>
  );
};

export default About;

import AboutChatter from "../components/AboutChatter";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import WhyJoin from "../components/WhyJoin";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutChatter />
      <WhyJoin />
      <Testimonial />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;

import "../styles/components/Hero.css";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <>
      <main className="hero-container">
        <NavBar />

        <div className="heroText">
          <h1>Welcome to Chatter</h1>
          <h2>A Haven for Text-Based Content</h2>
          <p>
            Unleash the power of words: Connect with Like minded Readers and
            Writers
          </p>
          <button>Get Started</button>
        </div>
      </main>
    </>
  );
};

export default Hero;

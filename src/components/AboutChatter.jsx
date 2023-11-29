import HomeImage from "../assets/HeroImages/ChatterHeroImage3.jpg";
import "../styles/components/AboutChatter.css";

const AboutChatter = () => {
  return (
    <div className="about-charter">
      <div>
        <h1>About Chatter</h1>
        <p>
          Chatter is a multi-functional platform where authors and readers can
          have access to their own content. It aims to be a traditional bookworm
          heaven and a blog to get access to more text based content. Our vision
          is to foster an inclusive and vibrant community where diversity is
          celebrated. We encourage open-mindedness and respect for al
          individuals, regardless of their backgrounds or beliefs. By promoting
          dialogue and understanding, we strive .
        </p>
      </div>

      <img src={HomeImage} alt="" width="400px" height="300px" />
    </div>
  );
};

export default AboutChatter;

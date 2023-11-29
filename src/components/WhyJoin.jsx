import {
  faChartLine,
  faUsers,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/WhyJoin.css";

const WhyJoin = () => {
  return (
    <div className="why-container">
      <div>
        <h2>Why you Should Join Chatteer</h2>
        <p>
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people.
        </p>
      </div>

      <div>
        {whyData.map((data, i) => (
          <div key={i}>
            <i>
              <FontAwesomeIcon icon={data.icons} />
            </i>
            <h4>{data.heading}</h4>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoin;

const whyData = [
  {
    icons: faChartLine,
    heading: "Analytics",
    description:
      "Analytics to track the number of views likes and comment and also analyze the performance of your articles over a period of time.",
  },

  {
    icons: faUsers,
    heading: "Social Interactions",
    description:
      "Users on the platform can interact with posts they like comment and engage in discussions",
  },

  {
    icons: faBook,
    heading: "Content Creation",
    description:
      "Write nice and appealing with our in-built markdown, a rich text editor.",
  },
];

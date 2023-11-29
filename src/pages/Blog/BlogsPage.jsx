// import { auth, database } from "../../firebase/config";
// import { doc } from "firebase/firestore";

const BlogsPage = ({ post }) => {
  const { description, author } = post;
  //   const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  return (
    <div>
      <div>
        <p>{description}</p>
        <p>{author.name}</p>
        <p>{author.email}</p>
      </div>
    </div>
  );
};

export default BlogsPage;

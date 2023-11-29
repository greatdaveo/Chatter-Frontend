import { useState, useEffect, useRef } from "react";

// import BlogsPage from "./BlogsPage";

const BlogContents = () => {
  const [posts, setPosts] = useState([]);
  // const [pageUpdate, setPageUpdate] = useState(false);

  return (
    <div>
      <h1>Blog Content Page</h1>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.description}</p>
            {/* <p>{post.author.name}</p> */}
          </div>

          // <BlogsPage
          //   key={post.id}
          //   post={post}
          //   // pageUpdate={pageUpdate}
          //   // setPageUpdate={setPageUpdate}
          // />
        ))}
      </div>
    </div>
  );
};

export default BlogContents;

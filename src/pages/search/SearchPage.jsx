import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import InPageNavigation from "../../components/Contents/InPageNavigation";
import Loader from "../../components/loader/Loader";
import BlogPost from "../../components/blog/BlogPost";
import NoDataMessage from "../../components/NotFound/NoDataMessage";

const SearchPage = () => {
  const { query } = useParams();
  const [blogs, setBlogs] = useState(null);

//   const searchBlogs = async () => {
//     try {
//       const response = await fetch(`${BACKEND_URL}/blog/search-blogs`, {
//         method: "POST",
//         body: JSON.stringify({ tag: query }),
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//       });
//       const data = await response.json();
//       // console.log(data);
//       setBlogs(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div>
      <NavBar />

      <section>
        <InPageNavigation
          routes={[`Search results for - ${query} `, "Accounts Matched"]}
          defaultHidden={"Accounts Matched"}
        >
          <div>
            {blogs == null ? (
              <div>
                <Loader />
              </div>
            ) : blogs?.length ? (
              blogs?.map((blog, i) => {
                return <BlogPost blog={blog} key={i} />;
              })
            ) : (
              <NoDataMessage
                message={`No published blog with the tag name: ${pageState}`}
              />
            )}
          </div>
        </InPageNavigation>
      </section>
    </div>
  );
};

export default SearchPage;

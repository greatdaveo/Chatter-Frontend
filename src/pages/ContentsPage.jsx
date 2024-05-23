import NavBar from "../components/NavBar";
import InPageNavigation from "../components/Contents/InPageNavigation";
import { useEffect, useState } from "react";
import BlogPost from "../components/blog/BlogPost";
import TrendingBlogPosts from "../components/blog/TrendingBlogPosts";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContentsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);

  // To get the latest blog from the database
  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/blog/latest-blogs`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await response.json();
        // console.log(data);
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLatestBlog();
  }, []);

  // To get the trending blog from the database
  useEffect(() => {
    const fetchTrendingBlogs = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/blog/trending-blogs`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await response.json();
        // console.log(data);
        setTrendingBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendingBlogs();
  }, []);
  return (
    <div>
      <NavBar />

      <section>
        {/* LATEST BLOGS */}
        <div>
          <InPageNavigation
            routes={["Home", "Trending blogs"]}
            defaultHidden={["Trending blogs"]}
          >
            <div>
              {blogs == null ? (
                <h1>No blog found!</h1>
              ) : (
                blogs.map((blog, i) => {
                  return <BlogPost blog={blog} key={i} />;
                })
              )}
            </div>

            <div>
              {trendingBlogs == null ? (
                <h1>No blog found!</h1>
              ) : (
                blogs.map((blog, index) => {
                  return (
                    <TrendingBlogPosts blog={blog} key={index} index={index} />
                  );
                })
              )}
            </div>
          </InPageNavigation>
        </div>

        {/* FILTERS AND TRENDING BLOGS */}
        <div>
          <h1>Contents</h1>
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;

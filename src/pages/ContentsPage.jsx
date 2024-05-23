import NavBar from "../components/NavBar";
import InPageNavigation from "../components/Contents/InPageNavigation";
import { useEffect, useState } from "react";
import BlogPost from "../components/blog/BlogPost";
import TrendingBlogPosts from "../components/blog/TrendingBlogPosts";
import "../styles/pages/Blog/ContentsPage.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContentsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);
  const [pageState, setPageState] = useState("home");

  // For Filtering
  let tagsCategories = [
    "programming",
    "drive",
    "tech",
    "mobile apps",
    "finances",
    "money",
    "travel",
    "business",
  ];

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

  const loadByTagCategory = (e) => {
    let category = e.target.innerText.toLowerCase();
    setBlogs(null);

    if (pageState == category) {
      setPageState("home");
      return;
    }
    setPageState(category);
  };

  return (
    <div>
      <NavBar />

      <section className="contents-cover">
        {/* LATEST BLOGS */}
        <div>
          <InPageNavigation
            routes={[pageState, "Trending blogs"]}
            defaultHidden={["Trending blogs"]}
          >
            <div>
              {blogs == null ? (
                <h1>No blog found!</h1>
              ) : (
                blogs?.map((blog, i) => {
                  return <BlogPost blog={blog} key={i} />;
                })
              )}
            </div>

            <div className="mobile-trendingBlogs">
              {trendingBlogs == null ? (
                <h1>No blog found!</h1>
              ) : (
                blogs?.map((blog, index) => {
                  return (
                    <TrendingBlogPosts blog={blog} key={index} index={index} />
                  );
                })
              )}
            </div>
          </InPageNavigation>
        </div>

        {/* FILTERS AND TRENDING BLOGS */}
        <div className="filter-cover">
          <h3>Stories from all interests</h3>
          <div className="tags-categories">
            {tagsCategories?.map((category, i) => {
              return (
                <div key={i}>
                  <button
                    onClick={loadByTagCategory}
                    className={pageState == category ? "active-tag" : ""}
                  >
                    {category}
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <h3>
              Trending <i class="fa-solid fa-arrow-trend-up"></i>
            </h3>

            {trendingBlogs == null ? (
              <h1>No blog found!</h1>
            ) : (
              blogs?.map((blog, index) => {
                return (
                  <TrendingBlogPosts blog={blog} key={index} index={index} />
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;

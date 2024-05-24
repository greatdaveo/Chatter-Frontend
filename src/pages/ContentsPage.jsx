import NavBar from "../components/NavBar";
import InPageNavigation from "../components/Contents/InPageNavigation";
import { useEffect, useState } from "react";
import BlogPost from "../components/blog/BlogPost";
import TrendingBlogPosts from "../components/blog/TrendingBlogPosts";
import "../styles/pages/Blog/ContentsPage.css";
import Loader from "../components/loader/Loader";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContentsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);
  const [pageState, setPageState] = useState("Latest Blogs");

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

    // Only fetch the latest blogs when the Latest Blogs is equal to "Latest Blogs"
    if (pageState == "Latest Blogs") {
      fetchLatestBlog();
    }
  }, [pageState]);

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

    // When a tag is selected, and it doesn't exist in the trending blogs fetch all the trending blogs
    if (!trendingBlogs) {
      fetchTrendingBlogs();
    }
  }, []);

  // This is to show the trending blogs based on the tag selected
  const loadByTagCategory = (e) => {
    let category = e.target.innerText.toLowerCase();
    setBlogs(null);

    if (pageState == category) {
      setPageState("Latest Blogs");
      return;
    }
    // Show page state base on the tag
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
                <div>
                  <Loader />
                </div>
              ) : (
                blogs?.map((blog, i) => {
                  return <BlogPost blog={blog} key={i} />;
                })
              )}
            </div>

            {/* This is for the trending blogs in mobile view */}
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

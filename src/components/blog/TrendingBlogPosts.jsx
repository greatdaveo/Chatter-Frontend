import React from "react";
import { Link } from "react-router-dom";
import { getDay } from "../../common/date";
import "../../styles/components/Blog/TrendingBlogPosts.css";

const TrendingBlogPosts = ({ blog, index }) => {
  return (
    <Link to={`/blog/${blog.blog_id}`} className="trending-link">
      <div className="trend-index">
        <h3 className="index">{index < 10 ? "0" + (index + 1) : index}</h3>

        <div>
          <p className="author">
            @{blog.author.firstName}-{blog.author.lastName}
            <span>
              {getDay(blog.publishedAt)}, {blog.publishedAt.slice(0, 4)}
            </span>
          </p>

          <div>
            <h3 className="title">{blog.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingBlogPosts;

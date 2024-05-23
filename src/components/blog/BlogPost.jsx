import React from "react";
import { getDay } from "../../common/date";
import { Link } from "react-router-dom";
import "../../styles/components/Blog/BlogPost.css";

const BlogPost = ({ blog }) => {
  return (
    <Link className="blog-link" to={`/blog/${blog.blog_id}`}>
      <div>
        <div>
          <p className="author">
            @{blog.author.firstName}-{blog.author.lastName}
            <span>
              {getDay(blog.publishedAt)}, {blog.publishedAt.slice(0, 4)}
            </span>
          </p>
        </div>

        <h1 className="title">{blog.title}</h1>
        <p className="description">{blog.description}</p>

        <div className="tags">
          <span>{blog.tags[0]}</span>
          <span>
            <i class="fa-regular fa-heart"></i> {blog.activity.total_likes}
          </span>
        </div>
      </div>

      <div>
        <img src={blog.banner} alt="Blog Banner" width={100} height={80} />
      </div>
    </Link>
  );
};

export default BlogPost;

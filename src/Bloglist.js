import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ({ Blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {Blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;

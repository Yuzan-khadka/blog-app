import { Link } from "react-router-dom";



const Bloglist = (props) => {

  return (
    <div className="blog-list">
        <h2>{props.title}</h2>
      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
        <div className="blog-content">
        <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
        </Link>
        <button onClick={() => props.handleDelete(blog.id)} className="dltBtn"><i className="fas fa-trash-alt"></i></button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;

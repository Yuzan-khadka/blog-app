import usePost from "../hooks/usePost";

const NewBlogs = () => {

const url = "http://localhost:8000/blogs";

const {title, body, author, isPending, handleChangeTitle, handleChangeBody, handleChangeAuthor, handleSubmit} = usePost(url);
 
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
 
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          required
        />

        <label>Blog Description:</label>
        <textarea
          value={body}
          onChange={handleChangeBody}
          required
        ></textarea>

        <label>Blog Author:</label>
        <select value={author === " " ? "DEFAULT" : author} onChange={handleChangeAuthor}>
          <option value="DEFAULT" disabled >Choose author</option>
          <option value="yuzan">yuzan</option>
          <option value="sanjay">sanjay</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding blog ......</button>}
      </form>
    </div>
  );
};

export default NewBlogs;

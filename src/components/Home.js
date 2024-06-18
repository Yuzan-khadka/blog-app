import useFetch from "../hooks/useFetch";
import Bloglist from "./Bloglist";


const Home = () => {
  const url = "http://localhost:8000/blogs";

  const {data: blogs, isLoading, error, handleDelete} = useFetch(url);

  
  return ( 
    <div className="home">

        {isLoading && <div> Loading ...... </div>}

        {error && <div> {error} </div>}
        {blogs &&  <Bloglist
        blogs={blogs}
        title="All Blogs"
        handleDelete={(id) => handleDelete(id)}
      />}
      {/* {blogs === null && error ===null ? (
        <div> Loading...... </div>
      ) : (
        content()
     
      )} */}

      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario Blogs"
      /> */}
    </div>
  );
};

export default Home;

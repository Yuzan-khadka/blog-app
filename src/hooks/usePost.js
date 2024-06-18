import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePost = (url) => {

    // const initialUser = {
    //     "title": "",
    //     "body": "",
    //     "author": "DEFAULT"
    // };

  // const [user, setUser] = useState(initialUser);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("DEFAULT");
  const [isPending, setPending] = useState(false);

  const navigate = useNavigate();

  const postBlogs = async (newData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      setPending(false);

      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeBody = (e) => {
    setBody(e.target.value)
  }

  const handleChangeAuthor= (e) => {
    setAuthor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const newBlog = { title, body, author };

    setTimeout(() => {
      postBlogs(newBlog);
      navigate("/");
    }, 1000);

    setTitle("");
    setBody("");
    setAuthor("");
  };

  return { title, body, author, isPending, handleChangeTitle, handleChangeBody, handleChangeAuthor, handleSubmit };
};

export default usePost;

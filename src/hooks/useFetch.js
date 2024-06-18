import { useState, useEffect } from "react";

export default function useFetch  (url)  {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    const newBlogs = data.filter((blog) => {
      return blog.id !== id;
    });

    try {
      const response = await fetch(url + '/' + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw Error("Couldn't fetch the data.");
      }
      const data = await response.json();
      setData(data);
    } catch (e) {
      
      setLoading(false);
      setError("Error: " + e.message);
    }

    setData(() => {
      return newBlogs;
    });
  };

  

  useEffect(() => {
    const abortController = new AbortController();
    const getBlogs = async () => {
      try {
        const response = await fetch(url, abortController.signal, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw Error("Couldn't fetch the data.");
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        if(e.message !== "AbortError")
        setLoading(false);
        setError("Error: " + e.message);
      }
    };

    setTimeout(() => {
      getBlogs();
      setLoading(false);
      setError(null); 
    }, 1000);

    return(() => {
        abortController.abort();
    })
  }, [url]);

  return { data, isLoading, error, handleDelete };
};

// export default useFetch();

import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setIsPending(false);
        setError(null);
        setData(response.data);
      } catch (error) {
        setError(`${error} Error occured while fetching.`);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isPending };
};

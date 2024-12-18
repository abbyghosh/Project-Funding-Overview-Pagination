import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTableData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setIsLoading(false);
        setData(resJson);
      } catch (err) {
        setIsLoading(false);
        setErrors(err);
      }
    };

    getTableData();
  }, []);

  return [data, errors, isLoading];
}

export default useFetch;

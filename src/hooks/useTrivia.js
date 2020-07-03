import { useState, useEffect } from "react";
import { Axios } from "../utils";
import { toast } from "react-toastify";


export const useTrivia = (initialData = []) => {
  const [trivias, setTrivias] = useState(initialData);

  useEffect(() => {
    async function fetchTrivias() {
      try {
        const { data } = await Axios.get("", {
          params: {
            amount: 15,
          },
        });

        if (data) {
          setTrivias(data.result);
        }
      } catch (error) {
        setTrivias([]);
        toast.error(error.message)
      }
    }

    fetchTrivias();
  }, []);

  return [trivias, setTrivias];
};

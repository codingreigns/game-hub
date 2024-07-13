import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenres {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGenres>("/genres")
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { genres, error };
};
export default useGenres;

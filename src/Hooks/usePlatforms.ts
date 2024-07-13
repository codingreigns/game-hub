import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatform {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchPlatform>("/platforms/lists/parents")
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return { platforms, error };
};
export default usePlatforms;

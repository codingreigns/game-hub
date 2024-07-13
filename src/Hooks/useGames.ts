import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import { GameQuery } from "../App";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGames>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [gameQuery]);

  return { games, error, isLoading };
};
export default useGames;

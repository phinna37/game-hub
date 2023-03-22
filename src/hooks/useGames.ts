import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import games from "../data/games"

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[],
    metacritic: number;
    rating_top: number;
  }


const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );
// const useGames = (gameQuery: GameQuery) => ({data: games, isLoading: false, error: null})

export default useGames
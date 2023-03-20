import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GameHub from "./components/GameHub";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PlatformSelector from "./components/PlatformSelector";
import Profile from "./components/Profile";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Switch>
          <Route
            path="/profile"
            render={(props) => <Profile sortBy="newest" {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={GameHub} />
          <Redirect to="/not-found" />
        </Switch>
    </Grid>
  );
}

export default App;

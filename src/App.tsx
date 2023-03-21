import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GameHub from "./components/GameHub";
import GenreList from "./components/GenreList";
import LoginForm from "./components/LoginForm";
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
  const [showAside, setShowAside] = useState<boolean>(true);

  const handleMainComponentChange = (component: React.FC) => {
    if (component === LoginForm) setShowAside(false);
    else setShowAside(true);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `${showAside ? `"nav nav" "aside main"` : `"nav nav" "main main"`}`, //1024
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
          path="/login"
          render={(props) => {
            handleMainComponentChange(LoginForm);
            return <LoginForm />;
          }}
        />
        <Route path="/not-found" component={NotFound} />
        <Route
          path="/"
          exact
          render={(props) => {
            handleMainComponentChange(GameHub);
            return <GameHub />;
          }}
        />
        <Redirect to="/not-found" />
      </Switch>
    </Grid>
  );
}

export default App;

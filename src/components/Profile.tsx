import { GridItem } from "@chakra-ui/react";
import queryString from "query-string";

interface Location {
  search: string;
}

interface Props {
  sortBy: string;
  location: Location;
}

const Profile = ({ sortBy, location }: Props) => {
  const result = queryString.parse(location.search);
  console.log(result);
  return <GridItem>{sortBy}</GridItem>;
};

export default Profile;

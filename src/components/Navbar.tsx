import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
      <Link to="/sign-in">
        <Text whiteSpace="nowrap" fontSize="sm" align="center">
          SIGN UP
        </Text>
      </Link>
      <Link to="/login">
        <Text whiteSpace="nowrap" fontSize="sm" align="center">
          LOG IN
        </Text>
      </Link>
    </HStack>
  );
};

export default Navbar;

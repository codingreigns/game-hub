import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearcInput from "./SearcInput";

interface Props {
  onSearch: (serchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="60px" />
      <SearcInput onSearch={onSearch} />
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;

import { withTheme } from "emotion-theming";
import {
  Link as ChakraLink,
  Box,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Alert,
} from "@chakra-ui/core";
import useSWR from "swr";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Flex } from "@chakra-ui/core";


};

const Index = () => {
  console.log("data", data);
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxWidth="960"
      margin="0 auto"
    >
      <DarkModeSwitch />
    </Flex>
  );
};

export default withTheme(Index);

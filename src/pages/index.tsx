import useSWR from "swr";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Flex } from "@chakra-ui/core";

const Index = () => {
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

export default Index;

import Link from "next/link";
import { Flex, Heading, Link as ChakraLink, PseudoBox } from "@chakra-ui/core";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Header: React.FC = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="8vh"
      w="100vw"
      bg="black"
      boxShadow="md"
    >
      <Flex
        direction="row"
        justify="space-around"
        w={["100vw", "100vw", "80vw", "80vw"]}
      >
        <Link href="/" passHref>
          <ChakraLink color="cyan.100">
            <Heading as="h1" size="lg" color="white">
              Learning Library v1
            </Heading>
          </ChakraLink>
        </Link>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};

export default Header;

import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  PseudoBox,
  Stack,
} from "@chakra-ui/core";
import { GiBookshelf } from "react-icons/gi";
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
          {/* <ChakraLink color="cyan.100"> */}
          <a>
            <Flex direction="row" align="center">
              <Box as={GiBookshelf} size="32px" color="white" marginRight={4} />
              <Heading as="h1" size="lg" color="white">
                Learning Library
              </Heading>
            </Flex>
            {/* </ChakraLink> */}
          </a>
        </Link>
        {/* <DarkModeSwitch /> */}
      </Flex>
    </Flex>
  );
};

export default Header;

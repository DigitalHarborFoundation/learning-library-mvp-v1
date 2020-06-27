import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  PseudoBox,
  Stack,
  Text,
} from "@chakra-ui/core";
import { GiBookshelf } from "react-icons/gi";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      justify="center"
      align="center"
      height="8vh"
      w="100vw"
      bg="black"
      boxShadow="md"
      paddingY={8}
    >
      <Flex
        direction="row"
        justify="space-around"
        width={["100vw", "100vw", "80vw", "80vw"]}
        paddingX={[4, 4, 6, 8]}
      >
        <Link href="/" passHref>
          <a>
            <Flex direction="row" align="center">
              <Box as={GiBookshelf} size="32px" color="white" marginRight={4} />
              <Heading as="h1" size="md" color="white">
                Learning Library
              </Heading>
            </Flex>
          </a>
        </Link>
        <Flex direction="row" align="center">
          {/* <Link href="/resources">
            <a>
              <Text fontSize="lg" color="white" marginRight={4}>
                Resources
              </Text>
            </a>
          </Link> */}
          <Link href="/playlists">
            <a>
              <Text fontSize="lg" color="white" marginRight={4}>
                Playlists
              </Text>
            </a>
          </Link>
          <Link href="/help">
            <a>
              <Text fontSize="lg" color="white" marginRight={4}>
                Help
              </Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text fontSize="lg" color="white" marginRight={4}>
                About
              </Text>
            </a>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

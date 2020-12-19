import Link from 'next/link';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  IconButton,
} from '@chakra-ui/core';
import { GiBookshelf } from 'react-icons/gi';
import { GoMarkGithub } from 'react-icons/go';

const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      justify="center"
      align="center"
      minWidth="100vw"
      height="8vh"
      bg="black"
      boxShadow="md"
      paddingY={8}
      paddingX={[2, 2, 8, 8]}
    >
      <Flex
        direction="row"
        justify="space-around"
        align="center"
        width={['100vw', '100vw', '80vw', '80vw']}
        paddingX={[7, 4, 6, 8]}
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
        <Flex direction="row" align="center" justify="center">
          <Link href="/playlists" passHref>
            <ChakraLink
              display={['none', 'none', 'inline-flex', 'inline-flex']}
            >
              <Text fontSize="lg" color="white" marginRight={4}>
                Playlists
              </Text>
            </ChakraLink>
          </Link>
          <Link href="/request" passHref>
            <ChakraLink
              display={['none', 'none', 'inline-flex', 'inline-flex']}
            >
              <Text fontSize="lg" color="white" marginRight={4}>
                Requests
              </Text>
            </ChakraLink>
          </Link>
          <Link href="/help" passHref>
            <ChakraLink>
              <Text fontSize="lg" color="white" marginRight={4}>
                Help
              </Text>
            </ChakraLink>
          </Link>
          <Link href="/about">
            <a>
              <Text fontSize="lg" color="white" marginRight={4}>
                About
              </Text>
            </a>
          </Link>
          <ChakraLink
            href="https://github.com/jonathanprozzi/learning-library-mvp-v1"
            isExternal
          >
            <IconButton
              as={GoMarkGithub}
              size="sm"
              aria-label="Link to GitHub repository"
              color="white"
              variant="unstyled"
              _hover={{ bg: 'black', color: 'white' }}
              isRound
            ></IconButton>
          </ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

import Link from 'next/link';

import { Flex, Link as ChakraLink, Text } from '@chakra-ui/core';

const FooterMenu = () => {
  return (
    <Flex
      as="nav"
      display={['flex', 'flex', 'none', 'none']}
      direction="column"
      justify="center"
      align="center"
      minWidth="100vw"
      height="8vh"
      bg="black"
      position="fixed"
      bottom="0"
      zIndex="10"
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
        <Link href="/playlists" passHref>
          <ChakraLink color="white">
            <Text fontSize="lg" color="white" marginRight={4}>
              Playlists
            </Text>
          </ChakraLink>
        </Link>
        <Link href="/requests" passHref>
          <ChakraLink color="white">
            <Text fontSize="lg" color="white" marginRight={4}>
              Requests
            </Text>
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  );
};

export default FooterMenu;

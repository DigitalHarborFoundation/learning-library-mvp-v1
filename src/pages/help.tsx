import { NextPage } from "next";
import Link from "next/link";
import { Flex, Box, Heading, Link as ChakraLink } from "@chakra-ui/core";

const HelpPage: NextPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Box
        maxWidth="960px"
        minWidth="960px"
        minHeight="80vh"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Heading as="h2" textAlign="center">
          Getting Help
        </Heading>
        <Link href="/help">
          <ChakraLink>Go to Help!</ChakraLink>
        </Link>
      </Box>
    </Flex>
  );
};

export default HelpPage;

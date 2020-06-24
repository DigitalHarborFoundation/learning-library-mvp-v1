import { NextPage } from "next";
import Link from "next/link";
import { Flex, Box, Heading, Link as ChakraLink } from "@chakra-ui/core";

const HelpPage: NextPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h2" textAlign="center" marginTop={4}>
        Getting Help
      </Heading>
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
        <Link href="/help">
          <ChakraLink>Go to Help!</ChakraLink>
        </Link>
      </Box>
    </Flex>
  );
};

export default HelpPage;

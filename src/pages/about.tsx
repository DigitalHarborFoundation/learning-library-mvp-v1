import { NextPage } from "next";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/core";

const AboutPage: NextPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h2" textAlign="center" marginTop={4}>
        About the Learning Library
      </Heading>
      <Box
        maxWidth="960px"
        minWidth="960px"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Stack spacing={4}>
          <Text>
            We initially created this resource library as part of our Tech
            Lending Library initiative. We recognize that all learners using
            technology need help finding resources, whether they’re using a
            computer for the first time or are experienced designers or
            programmers.
          </Text>
          <Text>
            The Learning Library is a living and growing database of resources
            curated by Digital Harbor Foundation. Some of this content is made
            up of courses and lessons we’ve written, while others are collected
            from a broad community of makers and educators.
          </Text>
          <Text>
            A key feature of this database is to provide learners the ability to
            search and sort based on their interests, skill levels, and the
            tools they have access to. We are constantly working to improve
            these features, so please check back regularly for updates.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default AboutPage;

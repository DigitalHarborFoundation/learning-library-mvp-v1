import { NextPage } from 'next';
import Link from 'next/link';
import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
  Divider,
} from '@chakra-ui/react';

const AboutPage: NextPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      marginX={[4, 4, 10, 12]}
    >
      <Heading as="h2" textAlign="center" marginTop={4}>
        About the Library
      </Heading>
      <Box
        maxWidth="960px"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Stack spacing={4}>
          <Text color="gray.800">
            We initially created this resource library as part of our Tech
            Lending Library initiative. We recognize that all learners using
            technology need help finding resources, whether they’re using a
            computer for the first time or are experienced designers or
            programmers.
          </Text>
          <Text color="gray.800">
            The Learning Library is a living and growing database of resources
            curated by Digital Harbor Foundation. Some of this content is made
            up of courses and lessons we’ve written, while others are collected
            from a broad community of makers and educators.
          </Text>
          <Text color="gray.800">
            A key feature of this database is to provide learners the ability to
            search and sort based on their interests, skill levels, and the
            tools they have access to. We are constantly working to improve
            these features, so please check back regularly for updates.
          </Text>
          <Divider />
          <Text color="gray.800">
            This application is open source. If you're interested in seeing the
            code or contributing, please check out the{' '}
            <ChakraLink
              href="https://github.com/jonathanprozzi/learning-library-mvp-v1"
              color="blue.500"
              isExternal
            >
              GitHub repo
            </ChakraLink>{' '}
            or contact{' '}
            <ChakraLink href="mailto:jonathanprozzi@gmail.com" color="blue.500">
              Jonathan Prozzi
            </ChakraLink>
            .
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default AboutPage;

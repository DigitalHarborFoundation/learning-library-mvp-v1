import { NextPage } from 'next';
import Link from 'next/link';
import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  HStack,
  Text,
  Divider,
} from '@chakra-ui/core';
import RequestForm from '../components/RequestForm';

const RequestPage = ({ categories }) => {
  console.log(`test: ${categories}`);
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      marginX={[4, 4, 10, 12]}
    >
      <Heading as="h2" textAlign="center" marginTop={4}>
        Request Resources
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
            We want to be sure that we're providing the most useful resources
            possible. We'd welcome and appreciate your feedback on what
            resources we're including in the Learning Library. You can use this
            page to send resource requests to the Digital Harbor Foundation
            team.
          </Text>
          <Text color="gray.800">
            You're able to request resources without providing your name or
            contact info.
          </Text>
        </Stack>
        <RequestForm />
      </Box>
    </Flex>
  );
};

export default RequestPage;

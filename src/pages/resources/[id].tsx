import { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";

const ResourcePage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Flex>
      <Heading as="h2">Test title</Heading>
      <pre>{query.id}</pre>
    </Flex>
  );
};

export default ResourcePage;

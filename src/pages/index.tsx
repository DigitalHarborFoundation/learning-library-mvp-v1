import { Flex, Heading } from "@chakra-ui/core";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxWidth="960"
      margin="0 auto"
    >
      <Heading as="h2">Welcome!</Heading>
    </Flex>
  );
};

export default IndexPage;

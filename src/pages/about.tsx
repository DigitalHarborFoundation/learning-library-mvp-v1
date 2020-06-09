import useSWR from "swr";
import { Flex, Heading } from "@chakra-ui/core";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxWidth="960"
      margin="0 auto"
    >
      <Heading as="h2">About!</Heading>
    </Flex>
  );
};

export default AboutPage;

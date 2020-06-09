import { Heading } from "@chakra-ui/core";
import { NextPage } from "next";
import SiteLayout from "../../components/SiteLayout";

const ResourceIndex: NextPage = () => {
  return (
    <SiteLayout>
      <Heading as="h2">Test title</Heading>
    </SiteLayout>
  );
};

export default ResourceIndex;

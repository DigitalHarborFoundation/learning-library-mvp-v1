import { Box, Flex, Heading, Text, Alert, Spinner } from "@chakra-ui/core";
import { NextPage } from "next";
import useSWR from "swr";
import ResourceCard from "../../components/ResourceCard";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("There is problem with the data request.");
  }
  const data = await res.json();
  console.log("data from swr", data);
  return data.allRecordsResponse.records;
};

const ResourcesIndexPage: NextPage = () => {
  const { data, error } = useSWR(`/api/allRecords`, fetcher);

  if (error) {
    return (
      <Alert status="error">
        Failed to load data: {error.message}. Please reach out to
        contact@digitalharbor.org
      </Alert>
    );
  }

  if (!data) {
    return (
      <Box>
        <Spinner />
        <Alert status="info">Loading the resources...</Alert>
      </Box>
    );
  }

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h2">Resources</Heading>
      <Text>
        Displaying {data.length} {data.length === 1 ? "Resource" : "Resources"}
      </Text>

      <ResourceCard />
    </Flex>
  );
};

export default ResourcesIndexPage;

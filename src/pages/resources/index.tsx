import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter, Router } from "next/router";
import useSWR from "swr";
import {
  Box,
  Button,
  Tag,
  Flex,
  Heading,
  Text,
  Alert,
  Spinner,
  Stack,
} from "@chakra-ui/core";
import ResourceGrid from "../../components/ResourceGrid";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin",
  });
  if (!res.ok) {
    throw Error("There is problem with the data request.");
  }
  const { records } = await res.json();
  console.log("data from swr", records);
  console.log("test:", records[0].fields.Pathway[0]);

  return records;
};

const ResourcesIndexPage = () => {
  const { data, error } = useSWR("api/records/allRecordsFetch", fetcher);

  const [filterPathway, setFilterPathway] = useState(null);
  const [filterOS, setFilterOS] = useState(null);
  const [combinedItems, setCombinedItems] = useState(data);

  const composeFilters = (data) => {
    if (data) {
      const combined = data
        .filter((x) => x.fields["Pathway"][0] === filterPathway)
        .filter((y) => y.fields["Operating System"] === filterOS);
      setCombinedItems(combined);
      console.log("filterPathway", filterPathway);
      console.log("filterOS", filterOS);

      console.log("combined:", combined);
    }
    console.log("from compose", data);
  };

  if (error) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Alert status="error">
          Failed to load data: {error.message}. Please reach out to
          contact@digitalharbor.org
        </Alert>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Flex direction="column" align="center" justify="center">
          <Alert status="info">Loading the resources...</Alert>
          <Spinner
            size="xl"
            thickness="2px"
            emptyColor="cyan.100"
            color="cyan.300"
            margin={4}
          />
        </Flex>
      </Flex>
    );
  }

  const pathwaysList = [
    ...new Set(data.map((item) => item.fields["Pathway"][0])),
  ];
  const osList = [
    ...new Set(data.map((item) => item.fields["Operating System"])),
  ];
  console.log("pathways:", pathwaysList);
  console.log("os list", osList);

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h2">Resources</Heading>
      {combinedItems && <pre>combined items: {combinedItems.length}</pre>}
      <Button onClick={() => composeFilters(data)}>Compose Test</Button>
      {combinedItems ? (
        <Text>
          Displaying {combinedItems.length}{" "}
          {combinedItems.length === 1 ? "Resource" : "Resources"}
        </Text>
      ) : (
        <Text>
          Displaying {data.length}{" "}
          {data.length === 1 ? "Resource" : "Resources"}
        </Text>
      )}
      <Flex direction="row" align="center" justify="center">
        <Text fontSize="md" paddingX={4}>
          Pathways:
        </Text>
        <Stack direction="row" align="center" spacing={4}>
          {pathwaysList.map((pathway) => (
            <Button
              size="sm"
              variantColor="cyan"
              variant="outline"
              onClick={() => {
                // router.push(`/resources?pathway=${pathway}`);
                setFilterPathway(pathway);
              }}
            >
              {pathway}
            </Button>
          ))}
          {filterPathway && (
            <Button
              size="sm"
              variantColor="red"
              variant="solid"
              onClick={() => setFilterPathway(null)}
            >
              Reset Filter
            </Button>
          )}
        </Stack>
      </Flex>
      <Flex direction="row" align="center" justify="center">
        <Text fontSize="md" paddingX={4}>
          Operating System:
        </Text>
        <Stack direction="row" align="center" spacing={4}>
          {osList.map((os) => (
            <Button
              size="sm"
              variantColor="cyan"
              variant="outline"
              onClick={() => {
                setFilterOS(os);
              }}
            >
              {os}
            </Button>
          ))}
          {filterOS && (
            <Button
              size="sm"
              variantColor="red"
              variant="solid"
              onClick={() => setFilterOS(null)}
            >
              Reset Filter
            </Button>
          )}
        </Stack>
      </Flex>
      {combinedItems ? (
        <ResourceGrid data={combinedItems} />
      ) : (
        <ResourceGrid data={data} />
      )}
    </Flex>
  );
};

export default ResourcesIndexPage;

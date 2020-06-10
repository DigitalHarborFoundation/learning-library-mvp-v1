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
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("There is problem with the data request.");
  }
  const { data } = await res.json();
  console.log("data from swr", data);

  return data;
};

const ResourcesIndexPage: NextPage = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/records/allRecords`, fetcher);
  const [filterPathway, setFilterPathway] = useState(null);
  const [filterOS, setFilterOS] = useState(null);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     console.log("App is changing to: ", url);
  //   };

  //   Router.events.on("routeChangeStart", handleRouteChange);
  //   return () => {
  //     Router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);

  const filteredByPathway = filterPathway
    ? data.filter((item) => item.pathway[0] === filterPathway)
    : data;

  const filteredByOS = filterOS
    ? data.filter((item) => item.os === filterOS)
    : data;

  const composeFilters = (...args) => {
    return args.reduce((acc, val) => [...acc, ...val]);
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

  const pathwaysList = [...new Set(data.map((item) => item.pathway[0]))];
  const osList = [...new Set(data.map((item) => item.os))];
  console.log("pathways:", pathwaysList);
  console.log("os list", osList);

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h2">Resources</Heading>
      <pre>{query.pathway}</pre>
      <Text>
        Displaying {data.length} {data.length === 1 ? "Resource" : "Resources"}
      </Text>
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
              Reset Pathway Filter
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
                // router.push(`/?os=${os}`);
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
              Reset Operating System Filter
            </Button>
          )}
        </Stack>
      </Flex>
      {/* <ResourceGrid data={composeFilters(filteredByPathway, filteredByOS)} /> */}
      <ResourceGrid data={filteredByOS} />
    </Flex>
  );
};

export default ResourcesIndexPage;

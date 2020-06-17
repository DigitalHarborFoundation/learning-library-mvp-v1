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

const ResourcesIndexPage = ({
  title,
  image,
  description,
  os,
  pathway,
  url,
  tags,
  author,
  authorSite,
  type,
  rating,
  level,
}) => {
  const router = useRouter();
  const { query } = useRouter();
  const apiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const tableName = process.env.TABLE_NAME;
  // const { data, error } = useSWR(`/api/records/allRecords`, fetcher);
  // const { data, error } = useSWR(`/api/records/allRecordsFetch`, fetcher);
  const testURL = `https://api.airtable.com/v0/${baseId}/Content%20Resources?view=Approved%20Resources&api_key=${apiKey}`;

  const { data, error } = useSWR("api/records/allRecordsFetch", fetcher);

  const [filterPathway, setFilterPathway] = useState(null);
  const [filterOS, setFilterOS] = useState(null);
  const [combinedItems, setCombinedItems] = useState(data);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     console.log("App is changing to: ", url);
  //   };

  //   Router.events.on("routeChangeStart", handleRouteChange);
  //   return () => {
  //     Router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);

  // const filteredByPathway = filterPathway
  //   ? data.filter((item) => item.pathway[0] === filterPathway)
  //   : data;

  // const filteredByOS = filterOS
  //   ? data.filter((item) => item.os === filterOS)
  //   : data;

  // const composeFilters = (data) => {
  //   // const composed = filter((acc, val) => [...acc, ...val]);
  //   if (data) {
  //     const combined = records
  //       .filter((x) => x.pathway[0] === filterPathway)
  //       .filter((y) => y.os === filterOS);
  //     setCombinedItems(combined);
  //     console.log("combined:", combined);
  //   }
  // };

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

  // const pathwaysList = [...new Set(data.map((item) => item.pathway[0]))];
  // const osList = [...new Set(data.map((item) => item.os))];
  // console.log("pathways:", pathwaysList);
  // console.log("os list", osList);

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h2">Resources</Heading>
      {/* {combinedItems && <pre>combined items: {combinedItems.length}</pre>} */}
      {/* <Button onClick={() => composeFilters(data)}>Compose Test</Button> */}
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
      {/* <Flex direction="row" align="center" justify="center">
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
              Reset Filter
            </Button>
          )}
        </Stack>
      </Flex> */}
      {combinedItems ? (
        <ResourceGrid data={combinedItems} />
      ) : (
        <ResourceGrid data={data} />
      )}
    </Flex>
  );
};

export default ResourcesIndexPage;

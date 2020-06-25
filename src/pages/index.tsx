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
  Checkbox,
  Radio,
  RadioGroup,
} from "@chakra-ui/core";
import ResourceGrid from "../components/ResourceGrid";

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

  return records;
};

const IndexPage = () => {
  const { data, error } = useSWR("api/records/allRecordsFetch", fetcher);

  const [filterPathway, setFilterPathway] = useState(false);
  const [filterOS, setFilterOS] = useState(false);
  const [combinedItems, setCombinedItems] = useState(data);

  const handleFilterChange = (e, category) => {
    if (filterOS && filterPathway) {
      console.log("combined!");
      const combined = data
        .filter((x) => x.fields["Pathway"] === e)
        .filter((y) => y.fields["Operating System"] === e);
      setCombinedItems(combined);
    }

    if (category === "os") {
      setFilterOS(true);
      console.log("os!");
      console.log("filterOS:", filterOS);

      if (e !== "All") {
        const combined = data.filter((x) => x.fields["Operating System"] === e);
        setCombinedItems(combined);
      } else {
        setCombinedItems(null);
      }
      console.log("filterOS changed", e);
      console.log("combined items", combinedItems);
    }
    if (category === "pathway") {
      setFilterPathway(true);
      console.log("handleFilterChange", e);
      console.log("filterPathway:", filterPathway);
      if (e !== "All") {
        const combined = data.filter((x) => x.fields["Pathway"] === e);
        setCombinedItems(combined);
      } else {
        setCombinedItems(null);
      }
      console.log("filterPathway changed", e);
      console.log("combined items", combinedItems);
    }
  };

  const composeFilters = (data) => {
    if (data) {
      const combined = data
        .filter((x) => x.fields["Pathway"] === filterPathway)
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

  const pathwaysList = [...new Set(data.map((item) => item.fields["Pathway"]))];
  const osList = [
    ...new Set(data.map((item) => item.fields["Operating System"])),
  ];

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h2" marginTop={4}>
        Resources
      </Heading>
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
          <RadioGroup
            onChange={(e) => handleFilterChange(e.target.value, "pathway")}
            isInline
          >
            {pathwaysList.map((pathway, index) => (
              <Radio value={pathway}>{pathway}</Radio>
            ))}
            <Radio value="All">All</Radio>
          </RadioGroup>
        </Stack>
      </Flex>
      <Flex direction="row" align="center" justify="center">
        <Text fontSize="md" paddingX={4}>
          Operating System:
        </Text>
        <Stack direction="row" align="center" spacing={4}>
          <RadioGroup
            onChange={(e) => handleFilterChange(e.target.value, "os")}
            isInline
          >
            {osList.map((os) => (
              <Radio value={os}>{os}</Radio>
            ))}
            <Radio value="All">All</Radio>
          </RadioGroup>
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

export default IndexPage;

import { useState, useEffect, useRef } from "react";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import { useRouter, Router } from "next/router";
import useSWR from "swr";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Alert,
  Spinner,
  Select,
} from "@chakra-ui/core";
import { RiFilter3Line } from "react-icons/ri";
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
  const data = await res.json();

  return data;
};

const IndexPage = () => {
  const { data, error } = useSWR("api/records/getAllRecords", fetcher);
  // const {data, error} = useSWR('api/records/getAllRecords, fetcher')
  const [filterPathwayValue, setFilterPathwayValue] = useState(0);
  const [filterPathway, setFilterPathway] = useState(true);
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

    if (category === "os" && filterOS) {
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
    if (category === "pathway" && filterPathway) {
      console.log("handleFilterChange", e);
      setFilterPathwayValue(e);
      console.log("filterPathway:", filterPathway);
      console.log("filterPathwayValue", filterPathwayValue);
      if (e === null) {
        const combined = data.filter(
          (x) => x.fields["Pathway"] === pathwaysList[e]
        );
        setCombinedItems(combined);
      }
      if (e !== "All") {
        const combined = data.filter(
          (x) => x.fields["Pathway"] === pathwaysList[e]
        );
        setCombinedItems(combined);
      } else {
        setCombinedItems(null);
      }
      console.log("filterPathway changed", e);
      console.log("combined items", combinedItems);
    }
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
    <Flex
      direction="column"
      justify="center"
      align="center"
      gridArea="main"
      marginX={[4, 4, 10, 12]}
    >
      {combinedItems ? (
        <Heading as="h2" marginTop={4}>
          Displaying {combinedItems.length}{" "}
          {combinedItems.length === 1 ? "Resource" : "Resources"}
        </Heading>
      ) : (
        <Heading as="h2" marginTop={4}>
          Displaying {data.length}{" "}
          {data.length === 1 ? "Resource" : "Resources"}
        </Heading>
      )}
      <Flex direction="row" align="center" justify="center" paddingRight={4}>
        <Box
          color="gray.700"
          fontWeight="normal"
          letterSpacing="wide"
          fontSize="md"
          paddingLeft="4"
          paddingTop="4"
        >
          <label htmlFor="filter-pathway-select">Filter by Pathway:</label>
        </Box>
        <Select
          id="filter-pathway-select"
          icon={RiFilter3Line}
          variant="outline"
          marginTop={4}
          onChange={(e) => {
            console.log("filter selected:", e.target.value);
            handleFilterChange(e.target.value, "pathway");
          }}
        >
          <option value="All">All</option>
          {pathwaysList.map((pathway, index) => (
            <option value={index}>{pathway}</option>
          ))}
        </Select>
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

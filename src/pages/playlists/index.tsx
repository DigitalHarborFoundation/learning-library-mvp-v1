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
import PlaylistGrid from "../../components/PlaylistGrid";
// import ResourceGrid from "../../components/ResourceGrid";

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
  console.log("typeof data", typeof records);

  return records;
};

const PlaylistIndexPage = () => {
  const { data, error } = useSWR("api/records/allPlaylistsFetch", fetcher);

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

  if (data.length === 0) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Flex direction="column" align="center" justify="center">
          <Alert status="info">There don't appear to be any playlists.</Alert>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      marginX={[4, 4, 10, 12]}
    >
      <Heading as="h2" marginTop={4} color="gray.800">
        Playlists
      </Heading>
      <Box
        maxWidth="960px"
        marginY={8}
        paddingX={[2, 2, 2, 2]}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Stack spacing={4} paddingX={2}>
          <Text color="gray.800">
            In addition to collecting and sorting a variety of resources, we’ve
            created playlist views to help guide you through specific content
            areas. These resources are grouped and arranged in an order that we
            think will help you make the most sense of the material and improve
            skills over time.
          </Text>
          <Text color="gray.800">
            No one of these playlists is a complete guide or course, but they
            are a great start in your journey to learning within a subject area.
            We will continue to add playlists and update features here, so check
            back often!
          </Text>
        </Stack>
        <Box marginY={2}>
          <PlaylistGrid data={data} />
        </Box>
      </Box>
    </Flex>
  );
};
export default PlaylistIndexPage;

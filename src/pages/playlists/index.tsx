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
    <Flex direction="column" justify="center" align="center">
      <Heading as="h2" marginTop={4} color="gray.800">
        Playlists
      </Heading>
      <Box maxWidth="960px" marginY={2}>
        <Text fontSize="lg" color="gray.800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          repellat dolorem suscipit ipsam consequatur ipsa voluptas obcaecati
          totam cumque temporibus. Dicta quam nisi, nam ipsum numquam deserunt
          minima laborum sit ab repudiandae molestias repellat corrupti animi
          esse, sunt odio impedit beatae ratione praesentium!
        </Text>
      </Box>
      <Box marginY={2}>
        <PlaylistGrid data={data} />
      </Box>
    </Flex>
  );
};
export default PlaylistIndexPage;

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

const TestingPage = () => {
  const { data, error } = useSWR("api/records/getAllRecords", fetcher);
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

  return (
    <Flex direction="column" justify="center" align="center" minHeight="100vh">
      <Flex direction="column" align="center" justify="center">
        <pre>Fetched {data.length} resources</pre>
      </Flex>
    </Flex>
  );
};

export default TestingPage;

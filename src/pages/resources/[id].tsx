import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Alert,
  Spinner,
} from "@chakra-ui/core";

const apiKey = process.env.API_KEY;
const baseId = process.env.BASE_ID;
const tableName = process.env.TABLE_NAME;

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("There is problem with the data request.");
  }
  const { data } = await res.json();
  console.log("data from swr", data);
  return data;
};

const ResourcePage: NextPage = ({ title, image }) => {
  // const { data, error } = useSWR(`/api/records/${router.query.id}`, fetcher);

  // if (error) {
  //   return (
  //     <Flex
  //       direction="column"
  //       justify="center"
  //       align="center"
  //       minHeight="100vh"
  //     >
  //       <Alert status="error">
  //         Failed to load resource: {error.message}. Please reach out to
  //         contact@digitalharbor.org
  //       </Alert>
  //     </Flex>
  //   );
  // }

  // if (!data) {
  //   return (
  //     <Flex
  //       direction="column"
  //       justify="center"
  //       align="center"
  //       minHeight="100vh"
  //     >
  //       <Flex direction="column" align="center" justify="center">
  //         <Alert status="info">Loading the resource...</Alert>
  //         <Spinner
  //           size="xl"
  //           thickness="2px"
  //           emptyColor="cyan.100"
  //           color="cyan.300"
  //           margin={4}
  //         />
  //       </Flex>
  //     </Flex>
  //   );
  // }
  return (
    <Flex direction="column" justify="center" align="center">
      {/* <Heading as="h2">{data.fields["Resource Title"]}</Heading> */}
      <Heading as="h2">{title}</Heading>
      <Image src={image}></Image>
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}/${context.params.id}?api_key=${apiKey}`
  );
  const data = await res.json();

  return {
    props: {
      id: data.id,
      title: data.fields["Resource Title"],
      image: data.fields["Featured Image"][0].url,
      // url: data.fields["URL"],
      // os: data.fields["Operating System"],
      // pathway: data.fields["Pathway"],
      // level: data.fields("Skill Level"),
      // tags: data.fields("Tags"),
      // description: data.fields("Description"),
      // type: data.fields("Content Type"),
    },
  };
}

export default ResourcePage;

import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  AspectRatioBox,
  Box,
  Badge,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Alert,
  Spinner,
  Grid,
  SimpleGrid,
  Link as ChakraLink,
  Icon,
  Stack,
  Tag,
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

const ResourcePage: NextPage = ({
  title,
  image,
  description,
  os,
  pathway,
  url,
  tags,
  author,
  type,
  rating,
}) => {
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
  return (
    <Flex direction="column" justify="center" align="center">
      <Box
        maxWidth="960px"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
        <SimpleGrid columns={2} spacing={8} marginY={8}>
          <AspectRatioBox height="300px" ratio={16 / 9}>
            <Image src={image} alt={title} objectFit="cover" />
          </AspectRatioBox>
          <Flex direction="column" align="center">
            <Text>{author}</Text>
            <Text>{type}</Text>
            <Text>{rating}</Text>
            <Box p="4" alignItems="center" justifyContent="center">
              <Flex direction="row">
                <Badge rounded="md" marginRight="1" variantColor="purple">
                  {os}
                </Badge>
                <Badge rounded="md" marginLeft="1" variantColor="teal">
                  {pathway}
                </Badge>
              </Flex>
            </Box>
            <Stack spacing={2} isInline>
              {tags.map((tag) => (
                <Text>{tag}</Text>
              ))}
            </Stack>
            <ChakraLink href={url} isExternal>
              {title} <Icon name="external-link" mx="2px" />
            </ChakraLink>
          </Flex>
        </SimpleGrid>
        <Text>{description}</Text>
      </Box>
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
      url: data.fields["URL"],
      os: data.fields["Operating System"],
      pathway: data.fields["Pathway"],
      level: data.fields["Skill Level"],
      tags: data.fields["Tags"],
      description: data.fields["Description"],
      type: data.fields["Content Type"],
      author: data.fields["Author"],
      rating: data.fields["Rating"],
    },
  };
}

export default ResourcePage;

import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const ReactMarkdown = require("react-markdown");
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
  Divider,
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
  authorSite,
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
            <Text>{type}</Text>
            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    color={i < rating ? "purple.500" : "purple.100"}
                  />
                ))}
              {/* <Box as="span" ml="2" color="gray.600" fontSize="md">
                Rating
              </Box> */}
            </Box>
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
            {tags && (
              <Stack spacing={2} isInline>
                {tags.map((tag) => (
                  <Text>{tag}</Text>
                ))}
              </Stack>
            )}
            <ChakraLink href={url} isExternal>
              {title} <Icon name="external-link" mx="2px" />
            </ChakraLink>
            <Box border="1px" rounded="md" borderColor="gray.200" padding={2}>
              <Text>{author}</Text>
              <ChakraLink href={authorSite} isExternal>
                {authorSite} <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Box>
          </Flex>
        </SimpleGrid>
        <Divider />
        {/* <Text>{description}</Text> */}
        <Text>
          <ReactMarkdown source={description} />
        </Text>
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
      tags: data.fields["Tags"] || null,
      description: data.fields["Description"],
      type: data.fields["Content Type"],
      author: data.fields["Author"],
      authorSite: data.fields["Author Site"] || null,
      rating: data.fields["Rating"],
    },
  };
}

export default ResourcePage;

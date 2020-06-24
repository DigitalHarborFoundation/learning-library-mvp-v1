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
  TagLabel,
  TagIcon,
  Divider,
} from "@chakra-ui/core";
import { TiTag } from "react-icons/ti";

const ResourcePage = ({
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
  return (
    <Flex direction="column" justify="center" align="center">
      <Box
        maxWidth="1080px"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={8} marginY={8}>
          <ChakraLink href={url} isExternal>
            <AspectRatioBox height="300px" ratio={16 / 9}>
              <Image src={image} alt={title} objectFit="cover" />
            </AspectRatioBox>
          </ChakraLink>
          <Flex direction="column" align="flex-start">
            <ChakraLink href={url} isExternal color="blue.500">
              <Heading as="h2">{title}</Heading>
              {/* <Icon name="external-link" mx="2px" /> */}
            </ChakraLink>
            <Text>
              Contributed by{" "}
              <ChakraLink href={authorSite} isExternal color="blue.500">
                {author}
                <Icon name="external-link" mx="2px" />
              </ChakraLink>
              <Divider />
            </Text>
            <Flex direction="row" align="center" justify="center">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                marginRight={2}
              >
                {type} &bull; {level}
              </Box>
              <Box d="flex" marginY="1" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      color={i < rating ? "purple.500" : "purple.100"}
                      paddingBottom={1}
                    />
                  ))}
              </Box>
            </Flex>
            <Box paddingY={2} alignItems="center" justifyContent="center">
              <Flex direction="row">
                <Badge
                  padding="1"
                  rounded="md"
                  marginRight="1"
                  variantColor="purple"
                >
                  {os}
                </Badge>
                <Badge
                  padding={1}
                  rounded="md"
                  marginLeft="1"
                  variantColor="teal"
                >
                  {pathway}
                </Badge>
              </Flex>
            </Box>
            {tags && (
              <Stack spacing={2} isInline>
                {tags.map((tag) => (
                  <Tag
                    rounded="md"
                    size="md"
                    variantColor="gray"
                    variant="subtle"
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagIcon icon={TiTag} />
                  </Tag>
                ))}
              </Stack>
            )}
            {/* <Box d="flex" marginY="1" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    color={i < rating ? "purple.500" : "purple.100"}
                    paddingBottom={1}
                  />
                ))}
            </Box> */}
            {/* <Stack marginTop={4}>
              <Text>
                Check it out:{" "}
                <ChakraLink href={url} isExternal color="blue.500">
                  {title} <Icon name="external-link" mx="2px" />
                </ChakraLink>
              </Text>
              <Text>
                Contributed by{" "}
                <ChakraLink href={authorSite} isExternal color="blue.500">
                  {author}
                </ChakraLink>{" "}
              </Text>
            </Stack> */}
          </Flex>
        </SimpleGrid>
        <Divider />
        <Text>
          <ReactMarkdown source={description} />
        </Text>
      </Box>
    </Flex>
  );
};

export async function getServerSideProps({ params, query }) {
  const apiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const tableName = process.env.TABLE_NAME;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}/${params.id}?api_key=${apiKey}`,
    { method: "GET", mode: "no-cors", credentials: "same-origin" }
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

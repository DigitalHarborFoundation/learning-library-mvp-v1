/*@jsx jsx*/
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  AspectRatioBox,
  Image,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/core";
import { jsx, css } from "@emotion/core";
const ReactMarkdown = require("react-markdown");

const PlaylistsPageLayout = ({
  title,
  landingPageCopy,
  image,
  resourceLinks,
  linkTitles,
}) => {
  console.log(landingPageCopy);
  return (
    <Flex direction="column" justify="center" align="center ">
      <Box
        maxWidth="960px"
        minWidth="960px"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Heading as="h2" size="xl" paddingY={4} textAlign="center">
          {title} Playlist
        </Heading>

        <AspectRatioBox maxWidth="600px" ratio={16 / 9}>
          <Image src={image} alt={title} objectFit="cover" />
        </AspectRatioBox>

        <Box paddingY={4}>
          <ReactMarkdown
            css={css`
              > ul {
                padding-top: 1rem;
                padding-bottom: 1rem;
                padding-left: 2rem;
              }
              > p:first-of-type {
                padding-bottom: 1rem;
              }
            `}
            source={landingPageCopy}
          />
        </Box>
        <Heading as="h3" size="lg">
          Resources
        </Heading>
        <Stack>
          {resourceLinks.map((resource, index) => (
            <Link href={`/resources/${resource}`}>
              <ChakraLink color="blue.400">{linkTitles[index]}</ChakraLink>
            </Link>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default PlaylistsPageLayout;

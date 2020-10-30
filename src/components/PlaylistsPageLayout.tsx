/*@jsx jsx*/
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  AspectRatio,
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
  return (
    <Flex direction="column" justify="center" align="center ">
      <Box
        maxWidth="960px"
        marginY={8}
        paddingX={8}
        marginX={[4, 4, 10, 12]}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Heading as="h2" size="xl" paddingY={4} textAlign="center">
          {title} Playlist
        </Heading>
        <AspectRatio width="100%" ratio={16 / 9}>
          <Image src={image} alt={title} objectFit="cover" />
        </AspectRatio>

        <Box paddingY={4} maxWidth="65ch">
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
        {resourceLinks ? (
          <Stack>
            {resourceLinks.map((resource, index) => (
              <Link key={index} href={`/resources/${resource}`}>
                <ChakraLink color="blue.400">{linkTitles[index]}</ChakraLink>
              </Link>
            ))}
          </Stack>
        ) : (
          <Text>
            There are currently no resources in this playlist. Check back soon.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default PlaylistsPageLayout;

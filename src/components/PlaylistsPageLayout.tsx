/*@jsx jsx*/
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Text,
  AspectRatio,
  Image,
  Link as ChakraLink,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";
import { jsx, css } from "@emotion/core";
const ReactMarkdown = require("react-markdown");

const PlaylistsPageLayout = ({
  title,
  landingPageCopy,
  image,
  resourceLinks,
  linkTitles,
  linkPathways,
}) => {
  const uniquePathways = [...new Set(linkPathways)];
  console.log({ resourceLinks });
  console.log({ linkPathways });

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

        <Accordion>
          {uniquePathways.map((pathway) => (
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {pathway}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {resourceLinks
                  .filter((item, index) => pathway === linkPathways[index])
                  .map((resource, index) => (
                    <Stack>
                      <Link key={index} href={`/resources/${resource}`}>
                        <ChakraLink color="blue.400">
                          {linkTitles[index]}
                        </ChakraLink>
                      </Link>
                    </Stack>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {/* {resourceLinks ? (
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
        )} */}
      </Box>
    </Flex>
  );
};

export default PlaylistsPageLayout;

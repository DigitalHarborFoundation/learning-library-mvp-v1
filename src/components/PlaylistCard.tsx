import Link from "next/link";
import {
  PseudoBox,
  AspectRatioBox,
  Image,
  Box,
  Badge,
  Text,
  ButtonGroup,
  Button,
  Flex,
  Tag,
} from "@chakra-ui/core";
import kebabCase from "lodash.kebabcase";

// type Props = {
//   data: {
//     title: string;
//     id: string;
//     os: string;
//     pathway: string;
//     // image: string[];
//     // url: string;
//     type: string;
//     author: string;
//     level: string;
//   };
// };

const PlaylistCard = ({ data }) => {
  return (
    <PseudoBox
      w="100%"
      h="auto"
      maxW="md"
      overflow="hidden"
      rounded="lg"
      borderWidth="1px"
      bg="white"
    >
      <Link href={`/playlists/${kebabCase(data.fields["Playlist Title"])}`}>
        <PseudoBox _hover={{ cursor: "pointer" }}>
          {data.fields["Featured Image"] && (
            <AspectRatioBox width="400px" height="300px" ratio={4 / 3}>
              <Image
                src={data.fields["Featured Image"][0].url}
                alt={`${data.fields["Playlist Title"]} Resource Playlist`}
                objectFit="cover"
              />
            </AspectRatioBox>
          )}
        </PseudoBox>
      </Link>
      <Box p="4" alignItems="center" justifyContent="center">
        <Box d="flex" alignItems="baseline">
          <Flex direction="row">
            {/* <Badge rounded="md" marginRight="1" variantColor="purple">
              {data.fields["Operating System"]}
            </Badge>
            <Badge rounded="md" marginLeft="1" variantColor="teal">
              {data.fields["Pathway"]}
            </Badge> */}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {data.fields["Skill Level"]}
            </Box>
          </Flex>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <Box
            as="h3"
            color="gray.600"
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
            fontSize="md"
            ml={0}
            paddingBottom={1}
          >
            {data.fields["Playlist Title"]}
          </Box>
          <Box
            as="p"
            color="gray.800"
            fontWeight="normal"
            letterSpacing="wide"
            fontSize="md"
            ml={0}
            paddingBottom={4}
          >
            {data.fields["Description"]}
          </Box>
          <Link href={`/playlists/${kebabCase(data.fields["Playlist Title"])}`}>
            <Button rightIcon="view" variantColor="purple" variant="outline">
              Explore Playlist
            </Button>
          </Link>
        </Box>
      </Box>
    </PseudoBox>
  );
};

export default PlaylistCard;

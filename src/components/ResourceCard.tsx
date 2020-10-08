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

const ResourceCard = ({ data }) => {
  return (
    <PseudoBox
      w="100%"
      h="auto"
      // display="flex"
      // flexDirection="column"
      // flexGrow={1}
      maxW="md"
      // minWidth="md"
      overflow="hidden"
      rounded="lg"
      borderWidth="1px"
      bg="white"
    >
      <Link href="resources/[id]" as={`/resources/${data.id}`}>
        <PseudoBox _hover={{ cursor: "pointer" }} minWidth="md">
          {data.fields["Featured Image"] && (
            <AspectRatioBox height="300px" ratio={16 / 9}>
              <Image
                src={data.fields["Featured Image"][0].url}
                alt={data.fields["Resource Title"]}
                objectFit="cover"
              />
            </AspectRatioBox>
          )}
        </PseudoBox>
      </Link>
      <Box
        as="h3"
        display="flex"
        flexDirection="column"
        flexGrow={2}
        color="gray.700"
        fontWeight="normal"
        letterSpacing="wide"
        fontSize="md"
        paddingLeft="4"
        paddingTop="4"
      >
        {data.fields["Resource Title"]}
      </Box>
      <Box
        paddingTop="2"
        paddingLeft="4"
        paddingBottom="4"
        alignItems="center"
        justifyContent="center"
      >
        <Box d="flex" alignItems="baseline">
          <Flex direction="row">
            <Badge rounded="md" marginRight="1" variantColor="purple">
              {data.fields["Operating System"]}
            </Badge>
            <Badge rounded="md" marginLeft="1" variantColor="teal">
              {data.fields["Pathway"]}
            </Badge>
          </Flex>
        </Box>
        <Box
          color="gray.700"
          fontWeight="semibold"
          letterSpacing={["normal", "normal", "wide", "wide"]}
          fontSize="xs"
          textTransform="uppercase"
          paddingTop={1}
          paddingBottom={6}
        >
          {data.fields["Content Type"]} &bull; {data.fields["Skill Level"]}
        </Box>
        <Link href={`resources/[id]`} as={`/resources/${data.id}`}>
          <Button rightIcon="view" variantColor="purple" variant="outline">
            Learn More
          </Button>
        </Link>
      </Box>
    </PseudoBox>
  );
};

export default ResourceCard;

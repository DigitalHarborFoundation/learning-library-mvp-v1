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
} from "@chakra-ui/core";

const ResourceCard: React.FC = ({ data }) => {
  return (
    <PseudoBox
      w="100%"
      h="auto"
      maxW="md"
      overflow="hidden"
      rounded="md"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2);"
      _hover={{
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <AspectRatioBox height="400px" ratio={16 / 9}>
        <Image
          src={data.image[0].url}
          alt="Cup of coffee with 'Begin' on it sitting on a wooden table"
          rounded="md"
          objectFit="cover"
        />
      </AspectRatioBox>
      <Box p="4" alignItems="center" justifyContent="center">
        <Box d="flex" alignItems="baseline">
          <Box
            as="h3"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={0}
          >
            {data.title}
          </Box>
        </Box>

        <Button
          rightIcon="view"
          variantColor="gray"
          onClick={() => console.log("will link to page")}
        >
          Learn More
        </Button>
      </Box>
    </PseudoBox>
  );
};

export default ResourceCard;

import { PseudoBox, Image, Box, Badge, Text } from "@chakra-ui/core";

const ResourceCard: React.FC = ({ image }) => {
  return (
    <PseudoBox
      w="100%"
      h="auto"
      maxW="lg"
      rounded="md"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2);"
      _hover={{
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Image
        // src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        src={image[0].url}
        alt="Cup of coffee with 'Begin' on it sitting on a wooden table"
        rounded="md"
      />
      <Box p="4" alignItems="center" justifyContent="center">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={0}
          ></Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        ></Box>
      </Box>
    </PseudoBox>
  );
};

export default ResourceCard;

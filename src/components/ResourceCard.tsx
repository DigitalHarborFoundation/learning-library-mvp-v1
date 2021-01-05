import Link from 'next/link';
import {
  Box,
  AspectRatio,
  Image,
  Badge,
  Text,
  ButtonGroup,
  Button,
  Flex,
  Tag,
} from '@chakra-ui/core';
import { GoEye } from 'react-icons/go';
import kebabCase from 'lodash.kebabcase';

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
    <Box
      w="100%"
      h="auto"
      maxW="md"
      overflow="hidden"
      rounded="lg"
      borderWidth="1px"
      bg="white"
    >
      <Link href="resources/[id]" as={`/resources/${data.id}`}>
        <Box _hover={{ cursor: 'pointer' }} minWidth="md">
          <AspectRatio height="300px" ratio={16 / 9}>
            {data.fields['Featured Image'] ? (
              <Image
                src={data.fields['Featured Image'][0].url}
                alt={data.fields['Resource Title']}
                objectFit="cover"
              />
            ) : (
              <Image
                src="/dhf-library-social-scaled.jpg"
                alt=""
                objectFit="cover"
              />
            )}
          </AspectRatio>
        </Box>
      </Link>
      <Flex direction="row" alignItems="baseline" paddingX="4" paddingTop="4">
        <Box
          as="h3"
          display="flex"
          flexDirection="column"
          flexGrow={2}
          color="gray.700"
          fontWeight="normal"
          letterSpacing="wide"
          fontSize="md"
        >
          {data.fields['Resource Title']}
        </Box>
        <Badge rounded="md" marginLeft="1" colorScheme="blue">
          New
        </Badge>
      </Flex>
      <Box
        paddingTop="2"
        paddingLeft="4"
        paddingBottom="4"
        alignItems="center"
        justifyContent="center"
      >
        <Box d="flex" alignItems="baseline">
          <Flex direction="row">
            <Badge rounded="md" marginRight="1" colorScheme="purple">
              {data.fields['Operating System']}
            </Badge>
            <Badge rounded="md" marginLeft="1" colorScheme="teal">
              {data.fields['Pathway']}
            </Badge>
          </Flex>
        </Box>
        <Box
          color="gray.700"
          fontWeight="semibold"
          letterSpacing={['normal', 'normal', 'wide', 'wide']}
          fontSize="xs"
          textTransform="uppercase"
          paddingTop={1}
          paddingBottom={6}
        >
          {data.fields['Content Type']} &bull; {data.fields['Skill Level']}
        </Box>
        <Link href={`resources/[id]`} as={`/resources/${data.id}`}>
          <Button colorScheme="purple" variant="outline" rightIcon={<GoEye />}>
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ResourceCard;

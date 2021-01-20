import Link from 'next/link';
import { AspectRatio, Image, Box, Button, Flex } from '@chakra-ui/react';
import kebabCase from 'lodash.kebabcase';
import { GoEye } from 'react-icons/go';

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
    <Box h="auto" maxW="md" overflow="hidden" rounded="lg" borderWidth="1px">
      <Link href={`/playlists/${kebabCase(data.fields['Playlist Title'])}`}>
        <Box _hover={{ cursor: 'pointer' }}>
          {data.fields['Featured Image'] && (
            <AspectRatio width="100%" height="300px" ratio={4 / 3}>
              <Image
                src={data.fields['Featured Image'][0].url}
                alt={`${data.fields['Playlist Title']} Resource Playlist`}
                objectFit="cover"
              />
            </AspectRatio>
          )}
        </Box>
      </Link>
      <Box p="4" alignItems="center" justifyContent="center">
        <Box d="flex" alignItems="baseline">
          <Flex direction="row">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {data.fields['Skill Level']}
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
            {data.fields['Playlist Title']}
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
            {data.fields['Description']}
          </Box>
          <Link href={`/playlists/${kebabCase(data.fields['Playlist Title'])}`}>
            <Button
              rightIcon={<GoEye />}
              colorScheme="purple"
              variant="outline"
            >
              Explore Playlist
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PlaylistCard;

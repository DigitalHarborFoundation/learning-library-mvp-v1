import { Box, Grid } from '@chakra-ui/react';
import ResourceCard from '../components/ResourceCard';

const ResourceGrid = ({ data }) => {
  return (
    <Box marginY={4} marginX={[4, 4, 10, 12]}>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={6}
      >
        {data.map((item) => (
          <ResourceCard key={item.id} data={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default ResourceGrid;

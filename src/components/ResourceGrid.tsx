import { Box, Heading, Grid } from "@chakra-ui/core";
import ResourceCard from "../components/ResourceCard";

const ResourceGrid: React.FC = ({}) => {
  return (
    <Box marginTop={4}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={4}
      >
        {/* images will go in these boxes */}
        {data.map((item) => (
          <ImageCard key={item.id} data={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default ResourceGrid;

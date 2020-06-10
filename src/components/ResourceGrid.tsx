import { Box, Heading, Grid } from "@chakra-ui/core";
import ResourceCard from "../components/ResourceCard";

const ResourceGrid: React.FC = ({ data }) => {
  return (
    <Box marginTop={4} marginX={12}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
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

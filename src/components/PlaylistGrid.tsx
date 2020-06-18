import { Box, Heading, Grid } from "@chakra-ui/core";
import PlaylistCard from "../components/PlaylistCard";

// TODO: combine this with the ResourceGrid and add props for flexibility instead of making 2 components

const PlaylistGrid = ({ data }) => {
  return (
    <Box marginY={4} marginX={12}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={6}
      >
        {data.map((item) => (
          <>
            <PlaylistCard key={item.id} data={item} />
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default PlaylistGrid;

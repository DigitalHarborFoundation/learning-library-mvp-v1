import { extendTheme } from "@chakra-ui/core";

const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: {
        marginY: "2rem",
      },
    },
  },
});

import { AppProps } from "next/app";
import {
  ThemeProvider,
  CSSReset,
  Flex,
  ColorModeProvider,
} from "@chakra-ui/core";
import theme from "../theme";
import SiteLayout from "../components/SiteLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Flex direction="column" align="center" justify="center">
          <CSSReset />
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

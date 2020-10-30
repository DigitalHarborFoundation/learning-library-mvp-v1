import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ChakraProvider, Flex } from "@chakra-ui/core";

import SiteLayout from "../components/SiteLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS={true}>
      {/* <ColorModeProvider> */}
      <Flex direction="column" align="center" justify="center">
        <SiteLayout>
          <DefaultSeo
            title="Learning Library"
            description="The Learning Library is a living and growing database of resources curated by Digital Harbor Foundation. Some of this content is made up of courses and lessons we’ve written, while others are collected from a broad community of makers and educators."
            canonical="https://library.digitalharbor.org"
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: "https://library.digitalharbor.org",
              site_name: "Learning Library",
              title: "Learning Library",
              description:
                "The Learning Library is a living and growing database of resources curated by Digital Harbor Foundation. Some of this content is made up of courses and lessons we’ve written, while others are collected from a broad community of makers and educators.",
              images: [
                {
                  url: "/dhf-library-social-scaled.jpg",
                  width: 1200,
                  height: 630,
                  alt: "A whiteboard with descriptions of a makerspace",
                },
              ],
            }}
          />
          <Component {...pageProps} />
        </SiteLayout>
      </Flex>
      {/* </ColorModeProvider> */}
    </ChakraProvider>
  );
};

export default App;

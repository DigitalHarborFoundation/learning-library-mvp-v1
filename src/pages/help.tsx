import { NextPage } from "next";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/core";

const HelpPage: NextPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h2" textAlign="center" marginTop={4}>
        Getting Help
      </Heading>
      <Box
        maxWidth="960px"
        minWidth="960px"
        marginY={8}
        paddingX={8}
        paddingY={4}
        bg="white"
        rounded="md"
      >
        <Stack spacing={4}>
          <Text>
            Asking for help is a crucial skill in learning. DHF wants to help!
          </Text>
          <Text>
            Please let us know what questions you have by submitting a help
            ticket. Follow{" "}
            <ChakraLink
              href="https://digitalharborhelp.freshdesk.com/support/tickets/new"
              isExternal
              color="blue.500"
            >
              this link to the DHF help desk
            </ChakraLink>{" "}
            and include your name, an email address, a title that describes your
            problem, and then a more detailed description of your problem or
            question.
          </Text>
          <Text>
            DHF staff will do their best to get back to you promptly. If you
            have additional questions or concerns, please email{" "}
            <ChakraLink
              href="mailto: contact@digitalharbor.org"
              isExternal
              color="blue.500"
            >
              contact@digitalharbor.org
            </ChakraLink>
          </Text>
          <Text as="em">
            We hope to increase support throughout July. Please check your
            emails and refer to this page for updates.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default HelpPage;

import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";

const CategoriesAccordion = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Categories
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <UnorderedList>
            <ListItem>
              <Text>
                Computer Science: These resources relate to programming and
                range from beginner to advanced. An example is an introduction
                to programming with Scratch, a visual code tool created by the
                MIT Media Lab.
              </Text>
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CategoriesAccordion;

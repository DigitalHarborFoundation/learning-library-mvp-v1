import Header from './Header';
import FooterMenu from './FooterMenu';
import { Box, Flex } from '@chakra-ui/core';

const SiteLayout: React.FC = ({ children }) => {
  return (
    <Box overflowX="hidden" margin="0 auto" bg="gray.100" minHeight="100vh">
      <Header />
      <Box>{children}</Box>
      <FooterMenu />
    </Box>
  );
};

export default SiteLayout;

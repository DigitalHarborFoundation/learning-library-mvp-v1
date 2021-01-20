import Header from './Header';
import BottomNavigation from './BottomNavigation';
import { Box, Flex } from '@chakra-ui/react';

const SiteLayout: React.FC = ({ children }) => {
  return (
    <Box overflowX="hidden" margin="0 auto" bg="gray.100" minHeight="100vh">
      <Header />
      <Box paddingBottom="15vh">{children}</Box>
      <BottomNavigation />
    </Box>
  );
};

export default SiteLayout;

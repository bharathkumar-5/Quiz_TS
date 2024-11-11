import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="brand.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Link to="/">
          <Button variant="ghost" colorScheme="whiteAlpha">
            Home
          </Button>
        </Link>
        <Link to="/leaderboard">
          <Button variant="ghost" colorScheme="whiteAlpha">
            Leaderboard
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;

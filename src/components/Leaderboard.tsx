import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import useLocalStorage from '../hooks/useLocalStorage';

const Leaderboard = () => {
  const [leaderboardData] = useLocalStorage('leaderboard', []);
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.score - a.score);

  return (
    <Box p={4}>
      <Table variant="simple">
        <TableCaption>Leaderboard</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedLeaderboard.map((user, idx) => (
            <Tr key={idx}>
              <Td>{user.name}</Td>
              <Td isNumeric>{user.score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leaderboard;

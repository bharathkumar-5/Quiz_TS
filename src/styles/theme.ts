import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#F7C8B1',
      200: '#F8D0A1',
      300: '#F8D88B',
      400: '#F8E15A',
      500: '#F8E800',
      600: '#C6B600',
      700: '#A39F00',
      800: '#7F7E00',
      900: '#5B5D00',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '12px',
      },
    },
  },
});

export default theme;

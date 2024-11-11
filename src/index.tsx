import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';  
import App from './App';  
import './styles/styles.css';  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Provide Redux store to the app */}
      <ChakraProvider>  {/* Chakra UI theme provider */}
        <Router>  {/* React Router for routing */}
          <App />  {/* Main application component */}
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

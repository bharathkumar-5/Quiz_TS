import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QuizSetup, QuizPage, Leaderboard, Navbar } from './components';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={QuizSetup} />
            <Route path="/quiz" component={QuizPage} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;

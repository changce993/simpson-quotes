import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from "react-atomize";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme';
import './AOS';

import CharacterProvider from './context/CharacterContext';

import Home from './pages/Home';
import Quotes from './pages/Quotes';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {
  return (

    <ThemeProvider theme={theme}>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <StyleReset />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

        <CharacterProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/quotes' component={Quotes} />
            </Switch>
          </Router>
        </CharacterProvider>
        
      </StyletronProvider>
    </ThemeProvider>
  );
}

export default App;

import React, {Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Player from "./Pages/Player";
import Layout from './Components/Layout';
import NewGame from './Pages/NewGame';
import Podium from './Pages/Podium';

class App extends Component {
  render(){
    return (

      <BrowserRouter>
      <Layout>
          <Route path="/Inicio" component={Inicio}>
            </Route>
          <Route path="/Player" component={Player}>
          </Route>
          <Route path="/NewGame" component={NewGame}>
          </Route>
          <Route path="/Podium" component={Podium}>
          </Route>
        </Layout>
      </BrowserRouter>

    );
  }
}

export default App;

import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import PieChartPage from './pages/PieChartPage';
import ConfigPage from './pages/ConfigPage';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ConfigPage}/>
            <Route path="/pie-chart" component={PieChartPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

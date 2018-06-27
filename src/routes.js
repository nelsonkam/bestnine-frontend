import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App"
import BestNine from "./BestNine"
import BestNineResult from './pages/BestNineResult/index';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/bestnine" component={BestNine} />
      <Route path="/bestnine/:username" component={BestNineResult} />
    </div>
  </Router>  
)

export default Routes;
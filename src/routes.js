import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Index from "./pages/Index"
import BestNineResult from './pages/BestNineResult';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/bestnine/:username" component={BestNineResult} />
    </div>
  </Router>  
)

export default Routes;
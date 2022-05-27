import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}



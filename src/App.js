import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Recommendation from "./Pages/Song";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile/:name">
            <Profile />
          </Route>
          <Route path="/song">
            <Recommendation />
          </Route> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

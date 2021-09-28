import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Google Analytics
import ReactGA from "react-ga";

import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Presentation from "./pages/Presentation";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ContactForm from "./pages/ContactForm";
import NotFound from "./pages/NotFound";
import RouteChangeTracker from "./components/RouteChangeTracker";

const App = () => {
  // Google Analytics
  const TRACKING_ID = "G-PZ2T8WX15D"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/competences">
          <RouteChangeTracker />
          <Knowledges />
        </Route>
        <Route path="/presentation">
          <RouteChangeTracker />
          <Presentation />
        </Route>
        <Route path="/portfolio">
          <RouteChangeTracker />
          <Portfolio />
        </Route>
        <Route path="/contact">
          <RouteChangeTracker />
          <Contact />
        </Route>
        <Route path="/formulaire">
          <RouteChangeTracker />
          <ContactForm />
        </Route>
        <Route path="/" exact component={Home}>
          <RouteChangeTracker />
          <Home />
        </Route>
        <Route>
          <RouteChangeTracker />
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

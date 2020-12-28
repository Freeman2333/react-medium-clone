import React from "react";
import Routes from "Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "components/topbar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from "components/currentUserChecker";
function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crypto from "./routes/Crypto";
import Detail from "./routes/Detaili";
import Home from "./routes/Home";

function App() {
  return (
      <Router>
        <Switch>
          <Route path ="/about-us">
            <h1>Hello</h1>
          </Route>
          <Route path="/coin">
            <Crypto />
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
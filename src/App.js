import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crypto from "./routes/Crypto";
import Detail from "./routes/Detaili";
import Home from "./routes/Home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter basename="/react-begin">
      <Switch>
        <Route path="/about-us">
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
    </BrowserRouter>
  );
}

export default App;

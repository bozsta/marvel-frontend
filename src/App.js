import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Personnages from "./components/container/Personnages";
import Comics from "./components/container/Comics";
import Favoris from "./components/container/Favoris";
import "./Reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/personnages">
            <Personnages />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/favoris">
            <Favoris />
          </Route>
          <Route path="*">
            <Redirect to="/personnages" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

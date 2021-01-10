import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GamePage from "./components/game-page.component";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Big two</h2>
      </div>

      <Route path="/" exact component={GamePage} />
    </Router>
  );
}



export default App;

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GamePage from "./components/game-page.component";
import TablePage from './components/table-page.component'
import Navbar from "./components/navbar.component"
import EditTable from "./components/edit-table.component";
import CreateTable from "./components/create-table.component";
import CreatePlayer from "./components/create-player.component";


function App() {
	return (
		<Router>
			<div className="container">
				{/* <h2>Big two</h2> */}
				<Navbar />
				<br />
				<Route path="/" exact component={GamePage} />
				<Route path="/tables" exact component={TablePage}/>
				<Route path="/edit/:id" component={EditTable} />
				<Route path="/create" component={CreateTable} />
				<Route path="/user" component={CreatePlayer} />

			</div>
		</Router>
	);
}

export default App;

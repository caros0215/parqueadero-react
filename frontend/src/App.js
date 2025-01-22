import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './index.css';
import SideNavBar from "./SideNavBar/SideNavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<Router>
		<SideNavBar>
		<Routes />
			</SideNavBar >
			</Router>
	);
}

export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './index.css';
import SideNavBar from "./SideNavBar/SideNavBar";

function App() {
	return (
		<div>
		<SideNavBar>
		<Routes />
			</SideNavBar >
		</div>
	);
}

export default App;


import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import AppointmentHeader from './Components/AppointmentHeader/AppointmentHeader';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/DashboardPanel/Dashboard';
import AddDoctorInfo from './Components/Dashboard/AddDoctorInfo/AddDoctorInfo';
import AppointmentDashBoard from './Components/Dashboard/AppointmentDashBoard/AppointmentDashBoard';
export const UserContext = createContext();
function App() {
	const [selectedDate, setSelectedDate] = useState({});
	return (
		<UserContext.Provider value={[selectedDate, setSelectedDate]}>
			<Router>
				<Switch>
					<Route exact path="/home">
						<Home />
					</Route>
					<PrivateRoute path="/appointment">
						<AppointmentHeader />
					</PrivateRoute>
					<PrivateRoute path="/appointmentByDate">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<AppointmentDashBoard />
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/addDoctor">
						<AddDoctorInfo />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="*">
						<h2 className="text-danger">Page not found </h2>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;

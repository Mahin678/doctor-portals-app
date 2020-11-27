import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import AppointmentBydate from '../AppointmentBydate/AppointmentBydate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = (props) => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [selectedDate, setSelectedDate] = useState(new Date().getDate());
	const [appointments, setAppElements] = useState([]);
	const [showDate, setShowDate] = useState('');
	const containerStyle = {
		backgroundColor: '#f4fdfb',
		height: '100vh',
	};
	const handleDateChange = (date) => {
		const data = date.toDateString();
		setShowDate(data);
		setSelectedDate(data);
	};
	useEffect(() => {
		fetch('http://localhost:8000/appointmentByDate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				date: selectedDate,
				email: loggedInUser.email,
			}),
		})
			.then((res) => res.json())
			.then((data) => setAppElements(data));
	}, [selectedDate]);

	return (
		<section style={containerStyle} className="appointment-wrapper ">
			<div className="container-fluid pl-0">
				<div className="row">
					<div className="col-sm-12 col-md-2 col-lg-2 pr-0">
						<Sidebar />
					</div>
					<div className="col-sm-12 col-md-10 col-lg-10">
						{props.children ? (
							props.children
						) : (
							<div className="appointment-wrapper-inner ">
								<div className="my-5  ml-5">
									<h4>Appointment </h4>
								</div>
								<div className="row px-sm-0  px-lg-5 px-sl-5 pt-3">
									<div className="col-sm-12 col-md-4 col-lg-4 ">
										<Calendar
											onChange={handleDateChange}
											value={new Date()}
										/>
									</div>
									<div className="col-sm-12 col-md-8 col-lg-8 ">
										<div className=" ">
											<AppointmentBydate
												selectedDate={showDate}
												appointments={appointments}
											/>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;

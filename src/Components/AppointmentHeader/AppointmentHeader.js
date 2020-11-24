import React, { useState } from 'react';
import contentImg from '../../images/Mask Group 1.png';
import Navbar from '../Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorBookingTime from '../DoctorBookingTime/DoctorBookingTime';
const AppointmentHeader = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	return (
		<div className="container">
			<Navbar text={'text-black'} />
			<main>
				<div
					style={{ height: '630px' }}
					className="row  d-flex align-items-center"
				>
					<div className="col-lg-4 offset-md-1">
						<h1>Appointment </h1>
						<Calendar onChange={handleDateChange} value={new Date()} />
					</div>
					<div className="col-lg-6">
						<img className="img-fluid" src={contentImg} alt="" />
					</div>
				</div>
				<DoctorBookingTime selectedDate={selectedDate} />
			</main>
		</div>
	);
};

export default AppointmentHeader;

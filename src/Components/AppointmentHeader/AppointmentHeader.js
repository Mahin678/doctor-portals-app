import React, { useState } from 'react';
import contentImg from '../../images/Mask Group 1.png';
import Navbar from '../Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorBookingTime from '../DoctorBookingTime/DoctorBookingTime';
import Footer from '../../Footer/Footer';
import HeaderContent from '../HeaderContent/HeaderContent';
import Header from '../Header/Header';
const AppointmentHeader = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		const data = date.toDateString();
		setSelectedDate(data);
	};
	return (
		<>
			<Header>
				<div className="container">
					<h1 className="mb-3">Appointment </h1>
					<Calendar onChange={handleDateChange} value={new Date()} />
				</div>
			</Header>
			<div className="container my-5">
				<DoctorBookingTime selectedDate={selectedDate} />
			</div>
			<Footer />
		</>
	);
};

export default AppointmentHeader;

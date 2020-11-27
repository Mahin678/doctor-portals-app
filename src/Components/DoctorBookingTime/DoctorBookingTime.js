import React, { useState } from 'react';
import { useEffect } from 'react';
import BookingInfo from './BookingInfo/BookingInfo';
const bookingData = [
	{
		_id: '5e8df50be6e8231764dc23de',
		id: 1,
		subject: 'Teeth Orthodontics',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10,
	},
	{
		_id: '5e8df578e6e8231764dc23df',
		id: 2,
		subject: 'Cosmetic Dentistry',
		visitingHour: '10:50 AM - 11:30 AM',
		totalSpace: 10,
	},
	{
		_id: '5e8df5aee6e8231764dc23e0',
		id: 3,
		subject: 'Teeth Cleaning',
		visitingHour: '5:00 PM - 6:00 PM',
		totalSpace: 10,
	},
	{
		_id: '5e8df63be6e8231764dc23e1',
		id: 4,
		subject: 'Cavity Protection',
		visitingHour: '7:00 AM - 8:30 AM',
		totalSpace: 10,
	},
	{
		_id: '5e8df68de6e8231764dc23e2',
		id: 5,
		subject: 'Teeth Checkup',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10,
	},
	{
		_id: '5e8df6a0e6e8231764dc23e3',
		id: 6,
		subject: 'Ent Checkup',
		visitingHour: '8:00 AM - 9:00 AM',
		totalSpace: 10,
	},
];
const DoctorBookingTime = ({ selectedDate }) => {
	const [doctorInfo, setDoctorInfo] = useState([]);
	useEffect(() => {
		fetch('https://murmuring-shore-14683.herokuapp.com/doctors')
			.then((res) => res.json())
			.then((res) => setDoctorInfo(res));
	});
	return (
		<section>
			<h1 style={{ color: '#1cc7c1' }} className="text-center mb-5">
				Available Appointment on {`${selectedDate}`}
			</h1>
			<div className="row">
				{doctorInfo.map((info) => (
					<BookingInfo
						key={info._id}
						selectedDate={selectedDate}
						info={info}
					/>
				))}
			</div>
		</section>
	);
};

export default DoctorBookingTime;

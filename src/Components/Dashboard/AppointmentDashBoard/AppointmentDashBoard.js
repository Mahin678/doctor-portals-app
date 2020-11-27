import React, { useState } from 'react';
import { useEffect } from 'react';
import Dashboard from '../DashboardPanel/Dashboard';
import './AppointmentDashBoard.css';
const appointments = [
	{
		Schedule: '4.00PM',
		department: 'Ent Checkup',
		name: 'shahin',
		email: 'mahin@gmail.com',
	},
];
const AppointmentDashBoard = () => {
	const [dateInfo, setDate] = useState(new Date().toDateString());
	const [DataByDate, setDataByDate] = useState([]);
	const [allPatients, setAllPatients] = useState([]);
	const handleCheckingDate = (event) => {
		let date = new Date(`${event.target.value}`).toDateString();
		setDate(date);
	};
	fetch('https://murmuring-shore-14683.herokuapp.com/allPatients')
		.then((res) => res.json())
		.then((res) => setAllPatients(res));
	useEffect(() => {
		fetch('https://murmuring-shore-14683.herokuapp.com/toDayAppointment', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				date: dateInfo,
			}),
		})
			.then((res) => res.json())
			.then((data) => setDataByDate(data));
	}, [dateInfo]);
	return (
		<>
			<Dashboard>
				<div className="appointment-wrapper-inner ">
					<div className="my-5  ml-5">
						<h4>Dashboard </h4>
					</div>
					<div className="row px-5 pt-3 ">
						<div className="col-sm-12 col-md-6 col-lg-3  mt-3">
							<div className="dashboard-card1 dashboard-custom-card d-flex justify-content-center align-items-center">
								<h1 className="">09</h1>
								<h5 className="p-3">
									<span className="d-block ">Pending</span>
									<span>Appointments</span>
								</h5>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3  mt-3">
							<div className="dashboard-card2  dashboard-custom-card d-flex justify-content-center align-items-center">
								<h1 className="">{DataByDate.length}</h1>
								<h5 className="p-3">
									<span className="d-block ">Today’s</span>
									<span>Appointments</span>
								</h5>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3  mt-3 ">
							<div className="dashboard-card3 dashboard-custom-card d-flex justify-content-center align-items-center ">
								<h1 className="">09</h1>
								<h5 className="p-3">
									<span className="d-block ">Total</span>
									<span>Appointments</span>
								</h5>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3  mt-3">
							<div className=" dashboard-card4 dashboard-custom-card d-flex justify-content-center align-items-center">
								<h1 className="">{allPatients.length}</h1>
								<h5 className="p-3">
									<span className="d-block ">Total </span>
									<span>Patients</span>
								</h5>
							</div>
						</div>
					</div>
					<div className="today-appointment mx-5 mt-4 ">
						<div className="form-group d-flex align-items-center  justify-content-between ">
							<h2 className="sub-title">Today's Appointments</h2>

							<input
								onChange={handleCheckingDate}
								value={new Date()}
								name="checkingDate"
								type="date"
								style={{ width: '9rem' }}
							/>
						</div>
						<table className="table table-borderless  m-3">
							<thead>
								<tr>
									<th className="text-secondary text-left" scope="col">
										Schedule
									</th>
									<th className="text-secondary" scope="col">
										Name
									</th>
									{/* <th className="text-secondary" scope="col">Gender</th> */}
									{/* <th className="text-secondary" scope="col">Age</th> */}
									{/* <th className="text-secondary" scope="col">Weight</th> */}
									<th className="text-secondary" scope="col">
										Phone
									</th>
									<th className="text-secondary" scope="col">
										Email
									</th>
								</tr>
							</thead>
							<tbody>
								{DataByDate.length ? (
									DataByDate.map((appointment, index) => (
										<tr className="font-weight-bold">
											<td>{appointment.Schedule}</td>
											<td>{appointment.name}</td>
											{/* <td>{appointment.gender}</td> */}
											{/* <td>{appointment.age}</td> */}
											{/* <td>{appointment.weight}KG</td> */}
											<td>{appointment.department}</td>
											<td>{appointment.email}</td>
										</tr>
									))
								) : (
									<p>Today have no appointment</p>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</Dashboard>
		</>
	);
};

export default AppointmentDashBoard;

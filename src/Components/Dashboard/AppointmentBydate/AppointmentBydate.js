import React from 'react';
import './AppointmentBydate.css';
const AppointmentBydate = ({ selectedDate, appointments }) => {
	return (
		<div className=" bg-white  ">
			<div className="d-sm-block d-md-flex d-lg-flex justify-content-between">
				<h4 className="p-4 sub-title text-capitalize ">
					Appointment total {appointments.length}
				</h4>
				<h6 className="p-sm-0 p-lg-5 ">{`${selectedDate}`}</h6>
			</div>
			<div className="overflow-scroll ">
				<table className="table table-borderless  m-sm-0  m-md-3 m-lg-3">
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
						{appointments.length ? (
							appointments.map((appointment, index) => (
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
	);
};

export default AppointmentBydate;

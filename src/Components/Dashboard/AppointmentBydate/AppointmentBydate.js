import React from 'react';

const AppointmentBydate = ({ selectedDate, appointments }) => {
    return (
        <div className="py-5 my-5 bg-white">
            <h4 className="p-4 text-secondary">Appointment total {appointments.length} </h4>
            <h6>{selectedDate.date}</h6>
            <table className="table table-borderless  m-3">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        {/* <th className="text-secondary" scope="col">Gender</th> */}
                        {/* <th className="text-secondary" scope="col">Age</th> */}
                        {/* <th className="text-secondary" scope="col">Weight</th> */}
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.length ?
                            appointments.map((appointment, index) =>
                                <tr className="font-weight-bold" >
                                    <td>{index + 1}</td>
                                    <td>{appointment.name}</td>
                                    {/* <td>{appointment.gender}</td> */}
                                    {/* <td>{appointment.age}</td> */}
                                    {/* <td>{appointment.weight}KG</td> */}
                                    <td>{appointment.phone}</td>
                                    <td>{appointment.email}</td>
                                </tr>
                            )
                            : <p>Today have no appointment</p>}

                </tbody>
            </table>
        </div>
    );
};

export default AppointmentBydate;
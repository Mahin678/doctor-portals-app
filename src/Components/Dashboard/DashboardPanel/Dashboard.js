import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import AppointmentBydate from '../AppointmentBydate/AppointmentBydate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date().getDate())
    const [appointments, setAppElements] = useState([])
    const containerStyle = {
        backgroundColor: '#f4fdfb', height: '100%'
    }
    const handleDateChange = date => {
        setSelectedDate(date)

    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        }).then(res => res.json()).then(data => setAppElements(data))
    }, [selectedDate])

    return (
        <section className="container-fluid pl-0">
            <div style={containerStyle} className="row">
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-4 p-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-lg-6 container">
                    <div className=" container" >
                        <AppointmentBydate selectedDate={selectedDate} appointments={appointments} />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
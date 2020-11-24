import React, { useState } from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';

const BookingInfo = ({ selectedDate, info }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4" >
            <div className="card m-3" >
                <div class="card-body text-center"><h5 style={{ color: "#1cc7c1" }} class="card-title text-brand">{info.subject}</h5><h6>8:00 AM - 9:00 AM</h6><p>{info.totalSpace} SPACES AVAILABLE</p><button onClick={openModal} class="btn btn-success text-uppercase " >Book Appointment</button>
                    <div></div></div>
            </div>
            <AppointmentForm appointmentOn={info} modalIsOpen={modalIsOpen} closeModal={closeModal} date={selectedDate} />
        </div>
    );
};

export default BookingInfo;